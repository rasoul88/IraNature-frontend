import React from "react";
import { connect } from "react-redux";
import {
  SectionContainer,
  HeadingContainer,
  DataItem,
  ButtonContainer,
  CreateTourContainer,
  TextArea,
  CoverPreview,
  ErrorText,
} from "./user-page-sections.styles";
import Multiselect from "multiselect-react-dropdown";
import SecodaryHeading from "../../components/heading/heading.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import SubmitButton from "../../components/submit-button/submit-button.component";
import CustomRangeSlider from "../custom-range-slider/custom-range-slider";
import CustomCkeckbox from "../custom-check-box/custom-check-box.component";
import { CheckboxItem } from "../custom-check-box/custom-check-box.styles";
import CustomDatePicker from "../data-picker/date-picker.component";
import ImageUpload from "../image-upload/image-upload.component";
import {
  createTourStart,
  setTourDataItem,
  setTourDataErrors,
  getActiveTourGuides,
} from "../../redux/tours/tours.actions";
import SpinButton from "../spin-button/spin-button.component";
import { showToast } from "../../utils/functions";

// import { hexTorgba } from "../../utils/functions";

const DashboardSection = ({
  createTourStart,
  setTourDataItem,
  setTourDataErrors,
  tourData,
  tourErrors,
  activeTourGuides,
  isFetching,
}) => {
  const tourDataChangeHandler = (itemName, value) => {
    setTourDataItem(itemName, value);
  };

  const onCreateHandler = () => {
    let errors = {};
    for (const item in tourData) {
      if (item === "gradientColor" && tourData[item].from && tourData[item].to)
        continue;
      if (
        item === "startDate" &&
        tourData[item].year &&
        tourData[item].month &&
        tourData[item].day
      )
        continue;
      if (typeof tourData[item] === "number" && tourData[item] > 0) continue;
      if (!tourData[item] || !tourData[item][0]) {
        errors[item] = true;
      }
    }
    setTourDataErrors(errors);
    if (Object.keys(errors).length > 0) {
      showToast(
        "error",
        "برخی از فیلدها را وارد نکرده اید یا اشتباه وارد کرده اید. لطفا بررسی کنید."
      );
    }
    if (Object.keys(errors).length === 0) {
      createTourStart(tourData);
    }
  };

  return (
    <SectionContainer>
      <CreateTourContainer>
        <form onSubmit={(event) => event.preventDefault()}>
          <HeadingContainer>
            <SecodaryHeading style={{ fontSize: "2rem" }}>
              ایجاد تور
            </SecodaryHeading>
          </HeadingContainer>
          <DataItem>
            <h4>نام:</h4>
            <div>
              <CustomInput
                data-test="name-input"
                type="text"
                placeholder="نام تور را وارد کنید"
                onBlur={(event) =>
                  tourDataChangeHandler("name", event.target.value)
                }
              />
              {tourErrors.name && (
                <ErrorText>لطفا نام تور را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>مدت:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={20}
                step={1}
                values={[tourData.duration]}
                onChange={(newValue) =>
                  tourDataChangeHandler("duration", newValue[0] * 1)
                }
                valueLabelDisplay="on"
              />
              {tourErrors.duration && (
                <ErrorText>لطفا مدت تور را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>حداکثر افراد:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={40}
                step={1}
                values={[tourData.maxGroupSize]}
                onChange={(newValue) =>
                  tourDataChangeHandler("maxGroupSize", newValue[0] * 1)
                }
                valueLabelDisplay="on"
              />
              {tourErrors.maxGroupSize && (
                <ErrorText>لطفا حداکثر افراد را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>درجه سختی:</h4>
            <div>
              <CustomCkeckbox
                selectedValues={tourData.difficulty}
                onChange={(newValue) =>
                  tourDataChangeHandler("difficulty", newValue)
                }
                singleChoice={true}
              >
                <CheckboxItem key="سخت">سخت</CheckboxItem>
                <CheckboxItem key="متوسط">متوسط</CheckboxItem>
                <CheckboxItem key="راحت">راحت</CheckboxItem>
              </CustomCkeckbox>
              {tourErrors.difficulty && (
                <ErrorText>لطفا درجه سختی تور را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>هزینه(تومان):</h4>
            <div>
              <CustomInput
                style={{ direction: "rtl" }}
                data-test="email-input"
                type="number"
                min="0"
                step="10000"
                onBlur={(event) =>
                  tourDataChangeHandler("price", event.target.value * 1)
                }
              />
              {tourErrors.price && (
                <ErrorText>لطفا هزینه تور را وارد کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> تصویر کاور:</h4>
            <div>
              <ImageUpload
                id="tour-cover-uploader"
                onChange={(newValue) =>
                  tourDataChangeHandler("imageCover", newValue)
                }
              />
              {tourErrors.imageCover && (
                <ErrorText>لطفا تصویر کاور را بارگزاری کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> تصویرهای تور:</h4>
            <div>
              <ImageUpload
                id="tour-images-uploader"
                multiple={true}
                onChange={(newValue) =>
                  tourDataChangeHandler("images", newValue)
                }
              />
              {tourErrors.images && (
                <ErrorText>لطفا تصویرهای تور را بارگزاری کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> تاریخ شروع:</h4>
            <div>
              <CustomDatePicker
                selectedDate={tourData.startDate}
                onChange={(newValue) =>
                  tourDataChangeHandler("startDate", newValue)
                }
              />
              {tourErrors.startDate && (
                <ErrorText>لطفا یک تاریخ برای شروع تور مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> شهر مبدا تور:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="text"
                onBlur={(event) =>
                  tourDataChangeHandler("startLocation", event.target.value)
                }
              />
              {tourErrors.startLocation && (
                <ErrorText>لطفا شهر مبدا تور را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> مقصد نهایی:</h4>
            <div>
              <CustomInput
                data-test="email-input"
                type="text"
                onBlur={(event) =>
                  tourDataChangeHandler("destination", event.target.value)
                }
              />
              {tourErrors.destination && (
                <ErrorText>لطفا شهر مقصد تور را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> راهنماهای تور:</h4>
            <div>
              <Multiselect
                id="multiselect-react-dropdown"
                options={activeTourGuides}
                selectedValues={null}
                onSelect={(newValue) => {
                  const idsArr = newValue.map((el) => el._id);
                  tourDataChangeHandler("guides", idsArr);
                }}
                onRemove={(newValue) => {
                  const idsArr = newValue.map((el) => el._id);
                  tourDataChangeHandler("guides", idsArr);
                }}
                displayValue="name"
                placeholder="انتخاب"
                showArrow={true}
                emptyRecordMsg="راهنمای فعال دیگری وجود ندارد"
                style={{
                  searchBox: {
                    minHeight: "4.6rem",
                    textAlign: "right",
                    fontSize: "1.4rem",
                  },
                  inputField: {
                    width: "5rem",
                    textAlign: "right",
                    fontFamily: "Iransans",
                    marginRight: "2rem",
                  },
                  optionContainer: { textAlign: "right", fontSize: "14px" },
                }}
              />
              {tourErrors.guides && (
                <ErrorText>لطفا حداقل یک راهنما انتخاب کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> رنگ کاور:</h4>
            <div>
              <CustomInput
                type="color"
                onChange={(event) => {
                  // const newColor = hexTorgba(event.target.value);
                  const newColor = event.target.value;
                  tourDataChangeHandler("gradientColor", {
                    from: newColor,
                    to: tourData.gradientColor.to,
                  });
                }}
              />
              {tourData.gradientColor.from && tourData.gradientColor.to && (
                <CoverPreview
                  gradientColor={`linear-gradient(to right bottom, ${tourData.gradientColor.from},  ${tourData.gradientColor.to}),`}
                  backgroundImage={
                    tourData.imageCover &&
                    tourData.imageCover[0] &&
                    URL.createObjectURL(tourData.imageCover[0])
                  }
                />
              )}
              <CustomInput
                type="color"
                onChange={(event) => {
                  // const newColor = hexTorgba(event.target.value);
                  const newColor = event.target.value;
                  tourDataChangeHandler("gradientColor", {
                    from: tourData.gradientColor.from,
                    to: newColor,
                  });
                }}
              />
              {tourErrors.gradientColor && (
                <ErrorText>لطفا هر دو رنگ را انتخاب کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>توضیحات:</h4>
            <div style={{ direction: " rtl" }}>
              <TextArea
                onBlur={(event) =>
                  tourDataChangeHandler("summary", event.target.value)
                }
              />
              {tourErrors.summary && (
                <ErrorText>لطفا برای تور یک خلاصه بنویسید</ErrorText>
              )}
            </div>
          </DataItem>
          <ButtonContainer>
            {isFetching ? (
              <SpinButton />
            ) : (
              <SubmitButton value="ایجاد تور" onClick={onCreateHandler} />
            )}
          </ButtonContainer>
        </form>
      </CreateTourContainer>
    </SectionContainer>
  );
};

const mapStateToProps = ({
  tours: { tourUnderConstruction, activeTourGuides, isFetching },
}) => ({
  tourData: tourUnderConstruction.data,
  tourErrors: tourUnderConstruction.errors,
  activeTourGuides,
  isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  createTourStart: (data) => dispatch(createTourStart(data)),
  setTourDataItem: (itemName, value) =>
    dispatch(setTourDataItem(itemName, value)),
  setTourDataErrors: (data) => dispatch(setTourDataErrors(data)),
  getActiveTourGuides: () => dispatch(getActiveTourGuides()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DashboardSection);
