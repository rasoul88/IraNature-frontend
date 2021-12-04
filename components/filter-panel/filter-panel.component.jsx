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
import CustomRangeSlider from "../custom-range-slider/custom-range-slider";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomDatePicker from "../data-picker/date-picker.component";
import CustomCkeckbox from "../custom-check-box/custom-check-box.component";
import { CheckboxItem } from "../custom-check-box/custom-check-box.styles";
import SpinButton from "../../components/spin-button/spin-button.component";

import { toggleFilterPanel } from "../../redux/tours/tours.actions";
import {
  setFilterItem,
  getFilteredTours,
} from "../../redux/tours/tours.actions";

export const UnconnectedFilterPanel = ({
  panelStatus,
  filterItems,
  dataLimits,
  activeCities,
  toggleFilterPanel,
  setFilterItem,
  getFilteredTours,
  isFetching,
}) => {
  const { price, startLocation, days, dateRange, difficulty, maxParticipants } =
    filterItems;

  const filterItemsChangeHandler = (itemName, value) => {
    setFilterItem(itemName, value);
  };

  return (
    <PanelContainer data-test="component-filter-panel" isOpen={panelStatus}>
      <FilterIconContainer
        data-test="toggle-filter-panel-button"
        onClick={() => toggleFilterPanel()}
      >
        <FilterIcon />
      </FilterIconContainer>
      <ContentContainer isOpen={panelStatus}>
        <PanelHeader>
          <h4>فیلترها</h4>
          {/* <p>4</p> */}
        </PanelHeader>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>نام </h5>
          </ItemHeaderContainer>
          <CustomInput
            data-test="name-input"
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
            data-test="price-range-slider"
            min={dataLimits.price.min}
            max={dataLimits.price.max}
            step={dataLimits.price.step}
            values={price}
            onChange={(newValue) => filterItemsChangeHandler("price", newValue)}
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
            data-test="days-range-slider"
            min={dataLimits.days.min}
            max={dataLimits.days.max}
            step={dataLimits.days.step}
            values={days}
            onChange={(newValue) => filterItemsChangeHandler("days", newValue)}
            valueLabelDisplay="on"
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>محدوده زمانی شروع </h5>
          </ItemHeaderContainer>
          <CustomDatePicker
            data-test="dateRange-date-picker"
            selectedRange={dateRange}
            onChange={(newValue) =>
              filterItemsChangeHandler("dateRange", newValue)
            }
            inputStyle={{ width: "26rem" }}
          />
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>شهر مبدا </h5>
          </ItemHeaderContainer>
          <Multiselect
            data-test="cities-multiselector"
            id="multiselect-react-dropdown"
            options={activeCities}
            selectedValues={startLocation}
            onSelect={(newValue) =>
              filterItemsChangeHandler("startLocation", [
                newValue[newValue.length - 1],
              ])
            }
            onRemove={() => filterItemsChangeHandler("startLocation", null)}
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
            data-test="difficulty-checkbox"
            selectedValues={difficulty}
            onChange={(newValue) =>
              filterItemsChangeHandler("difficulty", newValue)
            }
          >
            <CheckboxItem key="سخت">سخت</CheckboxItem>
            <CheckboxItem key="متوسط">متوسط</CheckboxItem>
            <CheckboxItem key="راحت">راحت</CheckboxItem>
          </CustomCkeckbox>
        </FilterItemContainer>
        <FilterItemContainer>
          <ItemHeaderContainer>
            <h5>حداکثر تعداد شرکت کننده</h5>
            {maxParticipants[0] && <p>تا {maxParticipants} نفر</p>}
          </ItemHeaderContainer>
          <CustomRangeSlider
            data-test="maxParticipants-range-slider"
            min={dataLimits.maxParticipants.min}
            max={dataLimits.maxParticipants.max}
            values={maxParticipants}
            onChange={(newValue) =>
              filterItemsChangeHandler("maxParticipants", newValue)
            }
            valueLabelDisplay="on"
          />
        </FilterItemContainer>
        {isFetching ? (
          <SpinButton />
        ) : (
          <CustomButton
            style={{ margin: "2rem 0" }}
            backgroundColor="#1976D2"
            color="white"
            onClick={() => {
              filterItemsChangeHandler("page", 1);
              getFilteredTours();
            }}
          >
            اعمال فیلتر ها
          </CustomButton>
        )}
      </ContentContainer>
    </PanelContainer>
  );
};

const mapStateToProps = ({
  tours: { panelStatus, filterItems, dataLimits, activeCities, isFetching },
}) => ({
  panelStatus,
  filterItems,
  dataLimits,
  activeCities,
  isFetching,
});

const mapDipatchToProps = (dispatch) => ({
  toggleFilterPanel: () => dispatch(toggleFilterPanel()),
  setFilterItem: (itemName, value) => dispatch(setFilterItem(itemName, value)),
  getFilteredTours: () => dispatch(getFilteredTours()),
});

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(UnconnectedFilterPanel);
