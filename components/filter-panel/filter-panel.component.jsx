import React from "react";
import { connect } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import {
  PanelContainer,
  FilterIconContainer,
  ContentContainer,
  PanelHeader,
  FilterItemContainer,
  ItemHeaderContainer,
} from "./filter-panel.styles";
import FilterIcon from "../../public/assets/icons/filters-2-svgrepo-com.svg";
import { toggleFilterPanel } from "../../redux/tours/tours.actions";
import CustomRangeSlider from "../custom-range-slider/custom-range-slider";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import DatePicker from "../data-picker/date-picker.component";
import CustomCkeckbox from "../custom-radio-button/custom-check-box.component";
import { CheckboxItem } from "../custom-radio-button/custom-check-box.styles";

import { setFilterItem } from "../../redux/tours/tours.actions";

const FilterPanel = ({
  panelStatus,
  filterItems,
  dataLimits,
  activeCities,
  dispatch,
}) => {
  const { name, price, cities, days, dateRange, difficulty, maxParticipants } =
    filterItems;

  const filterItemsChangeHandler = (itemName, value) => {
    dispatch(setFilterItem(itemName, value));
  };

  return (
    <PanelContainer isOpen={panelStatus}>
      <FilterIconContainer onClick={() => dispatch(toggleFilterPanel())}>
        <FilterIcon />
      </FilterIconContainer>
      <ContentContainer isOpen={panelStatus}>
        <PanelHeader>
          <p>4</p>
          <h4>فیلترها</h4>
        </PanelHeader>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>نام </h5>
          </ItemHeaderContainer>
          <CustomInput
            type="text"
            onBlur={(event) =>
              filterItemsChangeHandler("name", event.target.value)
            }
            placeholder="نام تور را وارد کنید"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>محدوده قیمت</h5>
            {price[0] && price[1] && (
              <p>
                از {price[0]?.toLocaleString()} تا {price[1]?.toLocaleString()}
              </p>
            )}
          </ItemHeaderContainer>
          <CustomRangeSlider
            min={dataLimits.price.min}
            max={dataLimits.price.max}
            step={dataLimits.price.step}
            values={price}
            handleChange={(newValue) =>
              filterItemsChangeHandler("price", newValue)
            }
            valueLabelDisplay="off"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>مدت </h5>
            {days[0] && days[1] && (
              <p>
                از {days[0]} تا {days[1]} روز
              </p>
            )}
          </ItemHeaderContainer>
          <CustomRangeSlider
            min={dataLimits.days.min}
            max={dataLimits.days.max}
            step={dataLimits.days.step}
            values={days}
            handleChange={(newValue) =>
              filterItemsChangeHandler("days", newValue)
            }
            valueLabelDisplay="on"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>محدوده زمانی شروع </h5>
          </ItemHeaderContainer>
          <DatePicker
            selectedRange={dateRange}
            calenderChangeHandler={(newValue) =>
              filterItemsChangeHandler("dateRange", newValue)
            }
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>شهر مبدا </h5>
          </ItemHeaderContainer>
          <Multiselect
            id="multiselect-react-dropdown"
            options={activeCities}
            selectedValues={cities}
            onSelect={(newValue) =>
              filterItemsChangeHandler("cities", newValue)
            }
            onRemove={(newValue) =>
              filterItemsChangeHandler("cities", newValue)
            }
            displayValue="name"
            placeholder="انتخاب"
            showArrow={true}
            emptyRecordMsg="در حال حاضر شهر دیگری برای انتخاب وجود ندارد"
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
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>درجه سختی</h5>
          </ItemHeaderContainer>
          <CustomCkeckbox
            selectedValues={difficulty}
            onChange={(newValue) =>
              filterItemsChangeHandler("difficulty", newValue)
            }
          >
            <CheckboxItem key="hard">سخت</CheckboxItem>
            <CheckboxItem key="medium">متوسط</CheckboxItem>
            <CheckboxItem key="easy">آسان</CheckboxItem>
          </CustomCkeckbox>
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>حداکثر تعداد شرکت کننده</h5>
            {maxParticipants[0] && <p>تا {maxParticipants} نفر</p>}
          </ItemHeaderContainer>
          <CustomRangeSlider
            min={dataLimits.maxParticipants.min}
            max={dataLimits.maxParticipants.max}
            values={maxParticipants}
            handleChange={(newValue) =>
              filterItemsChangeHandler("maxParticipants", newValue)
            }
            valueLabelDisplay="on"
          />
        </FilterItemContainer>
        <CustomButton
          style={{ margin: "2rem 0" }}
          backgroundColor="#1976D2"
          color="white"
        >
          اعمال فیلتر ها
        </CustomButton>
      </ContentContainer>
    </PanelContainer>
  );
};

const mapStateToProps = ({
  tours: { panelStatus, filterItems, dataLimits, activeCities },
}) => ({
  panelStatus,
  filterItems,
  dataLimits,
  activeCities,
});

export default connect(mapStateToProps)(FilterPanel);
