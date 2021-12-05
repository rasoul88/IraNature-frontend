import React from "react";
// React.useLayoutEffect = React.useEffect;
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";
import {
  objectDateToString,
  stringDateToShowingDate,
} from "../../utils/functions";

const CustomDatePicker = ({
  selectedRange,
  selectedDate,
  onChange,
  inputStyle,
}) => {
  const dataRange =
    selectedRange && selectedRange.from && selectedRange.to
      ? ` ${stringDateToShowingDate(
          objectDateToString(selectedRange.to)
        )} از ${stringDateToShowingDate(
          objectDateToString(selectedRange.from)
        )} تا`
      : "";
  const datesString = selectedDate
    ? `${stringDateToShowingDate(objectDateToString(selectedDate))}`
    : "";
  const renderCustomInput = ({ ref }) => (
    <input
      ref={ref}
      placeholder="انتخاب تاریخ"
      value={selectedRange ? dataRange : datesString}
      style={{
        width: "100%",
        borderRadius: "5px",
        border: "1px solid lightgray",
        fontSize: "1.4rem",
        fontFamily: "IranSans",
        textAlign: "center",
        padding: "0.5rem 1rem",
        color: "#333",
        ...inputStyle,
      }}
      readOnly

      // className="my-custom-input-class" // a styling class
    />
  );

  return (
    <DatePicker
      style={{ width: "100%" }}
      value={selectedRange ? selectedRange : selectedDate}
      onChange={onChange}
      minimumDate={utils("fa").getToday()}
      renderInput={renderCustomInput}
      shouldHighlightWeekends
      locale="fa"
      calendarClassName="custom-calendar"
    />
  );
};

export default CustomDatePicker;
