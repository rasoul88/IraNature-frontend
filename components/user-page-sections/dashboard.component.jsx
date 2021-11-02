import React from "react";
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
// import { hexTorgba } from "../../utils/functions";

const activeGuides = [
  { name: "علی مرادی", id: 1 },
  { name: "رسول صحرایی", id: 2 },
  { name: "سعید محمدی", id: 3 },
  { name: "رضا مهدیار", id: 4 },
  { name: "محسن زینی وند", id: 5 },
];

const INITIAL_STATE = {
  data: {
    name: "",
    days: [0],
    price: 0,
    source: null,
    destination: null,
    startDates: [],
    maxParticipants: [0],
    difficulty: "",
    tourGuides: null,
    coverImage: null,
    gradientColor: { from: null, to: null },
    tourImages: null,
    description: null,
  },
  errors: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setTourData":
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.itemName]: action.payload.value,
        },
      };
    case "setTourErrors":
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};
const DashboardSection = () => {
  const [{ data, errors }, URDispatch] = React.useReducer(
    reducer,
    INITIAL_STATE
  );

  const tourDataChangeHandler = (itemName, value) => {
    URDispatch({ type: "setTourData", payload: { itemName, value } });
  };

  const onCreateHandler = () => {
    let errors = {};
    for (const item in data) {
      if (item === "gradientColor" && data[item].from && data[item].to)
        continue;
      if (!data[item] || !data[item][0]) {
        errors[item] = true;
      }
    }
    URDispatch({ type: "setTourErrors", payload: errors });
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
              {errors.name && <ErrorText>لطفا نام تور را وارد کنید</ErrorText>}
            </div>
          </DataItem>
          <DataItem>
            <h4>مدت:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={20}
                step={1}
                values={data.days}
                onChange={(newValue) => tourDataChangeHandler("days", newValue)}
                valueLabelDisplay="on"
              />
              {errors.days && <ErrorText>لطفا مدت تور را مشخص کنید</ErrorText>}
            </div>
          </DataItem>
          <DataItem>
            <h4>حداکثر افراد:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={40}
                step={1}
                values={data.maxParticipants}
                onChange={(newValue) =>
                  tourDataChangeHandler("maxParticipants", newValue)
                }
                valueLabelDisplay="on"
              />
              {errors.maxParticipants && (
                <ErrorText>لطفا حداکثر افراد را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>درجه سختی:</h4>
            <div>
              <CustomCkeckbox
                selectedValues={data.difficulty}
                onChange={(newValue) =>
                  tourDataChangeHandler("difficulty", newValue)
                }
                singleChoice={true}
              >
                <CheckboxItem key="hard">سخت</CheckboxItem>
                <CheckboxItem key="medium">متوسط</CheckboxItem>
                <CheckboxItem key="easy">آسان</CheckboxItem>
              </CustomCkeckbox>
              {errors.difficulty && (
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
                  tourDataChangeHandler("price", event.target.value)
                }
              />
              {errors.price && (
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
                  tourDataChangeHandler("coverImage", newValue)
                }
              />
              {errors.coverImage && (
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
                  tourDataChangeHandler("tourImages", newValue)
                }
              />
              {errors.tourImages && (
                <ErrorText>لطفا تصویرهای تور را بارگزاری کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> تاریخ های شروع:</h4>
            <div>
              <CustomDatePicker
                selectedDates={data.startDates}
                onChange={(newValue) =>
                  tourDataChangeHandler("startDates", newValue)
                }
              />
              {errors.startDates && (
                <ErrorText>
                  لطفا حداقل یک تاریخ برای شروع تور مشخص کنید
                </ErrorText>
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
                  tourDataChangeHandler("source", event.target.value)
                }
              />
              {errors.source && (
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
              {errors.destination && (
                <ErrorText>لطفا شهر مقصد تور را مشخص کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4> راهنماهای تور:</h4>
            <div>
              <Multiselect
                id="multiselect-react-dropdown"
                options={activeGuides}
                selectedValues={null}
                onSelect={(newValue) =>
                  tourDataChangeHandler("tourGuides", newValue)
                }
                onRemove={(newValue) =>
                  tourDataChangeHandler("tourGuides", newValue)
                }
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
              {errors.tourGuides && (
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
                    to: data.gradientColor.to,
                  });
                }}
              />
              {data.gradientColor.from && data.gradientColor.to && (
                <CoverPreview
                  gradientColor={`linear-gradient(to right bottom, ${data.gradientColor.from},  ${data.gradientColor.to}),`}
                  backgroundImage={
                    data.coverImage &&
                    data.coverImage[0] &&
                    URL.createObjectURL(data.coverImage[0])
                  }
                />
              )}
              <CustomInput
                type="color"
                onChange={(event) => {
                  // const newColor = hexTorgba(event.target.value);
                  const newColor = event.target.value;
                  tourDataChangeHandler("gradientColor", {
                    from: data.gradientColor.from,
                    to: newColor,
                  });
                }}
              />
              {errors.gradientColor && (
                <ErrorText>لطفا هر دو رنگ را انتخاب کنید</ErrorText>
              )}
            </div>
          </DataItem>
          <DataItem>
            <h4>توضیحات:</h4>
            <div style={{ direction: " rtl" }}>
              <TextArea
                onBlur={(event) =>
                  tourDataChangeHandler("description", event.target.value)
                }
              />
              {errors.description && (
                <ErrorText>لطفا برای تور یک خلاصه بنویسید</ErrorText>
              )}
            </div>
          </DataItem>
          <ButtonContainer>
            <SubmitButton value="ایجاد تور" onClick={onCreateHandler} />
          </ButtonContainer>
        </form>
      </CreateTourContainer>
    </SectionContainer>
  );
};

export default DashboardSection;
