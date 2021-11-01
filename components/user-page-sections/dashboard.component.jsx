import React from "react";
import {
  SectionContainer,
  HeadingContainer,
  DataItem,
  ButtonContainer,
  CreateTourContainer,
  TextArea,
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

const activeGuides = [
  { name: "علی مرادی", id: 1 },
  { name: "رسول صحرایی", id: 2 },
  { name: "سعید محمدی", id: 3 },
  { name: "رضا مهدیار", id: 4 },
  { name: "محسن زینی وند", id: 5 },
];

const INITIAL_STATE = {
  name: "",
  days: [0],
  price: 0,
  source: null,
  destination: null,
  startDates: [],
  maxParticipants: [0],
  difficulty: [],
  tourGuides: null,
  coverImage: null,
  tourImages: null,
  description: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "setTourData":
      return {
        ...state,
        [action.payload.itemName]: action.payload.value,
      };
    default:
      return state;
  }
};
const DashboardSection = () => {
  const [tourData, URDispatch] = React.useReducer(reducer, INITIAL_STATE);

  const tourDataChangeHandler = (itemName, value) => {
    URDispatch({ type: "setTourData", payload: { itemName, value } });
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
            </div>
          </DataItem>
          <DataItem>
            <h4>مدت:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={20}
                step={1}
                values={tourData.days}
                onChange={(newValue) => tourDataChangeHandler("days", newValue)}
                valueLabelDisplay="on"
              />
            </div>
          </DataItem>
          <DataItem>
            <h4>حداکثر افراد:</h4>
            <div>
              <CustomRangeSlider
                min={0}
                max={40}
                step={1}
                values={tourData.maxParticipants}
                onChange={(newValue) =>
                  tourDataChangeHandler("maxParticipants", newValue)
                }
                valueLabelDisplay="on"
              />
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
              >
                <CheckboxItem key="hard">سخت</CheckboxItem>
                <CheckboxItem key="medium">متوسط</CheckboxItem>
                <CheckboxItem key="easy">آسان</CheckboxItem>
              </CustomCkeckbox>
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
            </div>
          </DataItem>
          <DataItem>
            <h4> تاریخ های شروع:</h4>
            <div>
              <CustomDatePicker
                selectedRange={{ from: null, to: null }}
                onChange={(newValue) =>
                  //   filterItemsChangeHandler("dateRange", newValue)
                  console.log(newValue)
                }
              />
            </div>
          </DataItem>
          <DataItem>
            <h4> شهر شروع تور:</h4>
            <div>
              <CustomInput data-test="email-input" type="email" />
            </div>
          </DataItem>
          <DataItem>
            <h4> مقصد نهایی:</h4>
            <div>
              <CustomInput data-test="email-input" type="email" />
            </div>
          </DataItem>
          <DataItem>
            <h4> راهنماهای تور:</h4>
            <div>
              <Multiselect
                id="multiselect-react-dropdown"
                options={activeGuides}
                selectedValues={null}
                // onSelect={(newValue) =>
                //   filterItemsChangeHandler("cities", newValue)
                // }
                // onRemove={(newValue) =>
                //   filterItemsChangeHandler("cities", newValue)
                // }
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
            </div>
          </DataItem>
          <DataItem>
            <h4>توضیحات:</h4>
            <div style={{ direction: " rtl" }}>
              <TextArea />
            </div>
          </DataItem>
          <ButtonContainer>
            <SubmitButton value="ایجاد تور" />
          </ButtonContainer>
        </form>
      </CreateTourContainer>
    </SectionContainer>
  );
};

export default DashboardSection;
