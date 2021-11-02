import React from "react";
// React.useLayoutEffect = React.useEffect;
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";

const CustomDatePicker = ({
  selectedRange,
  selectedDates,
  onChange,
  inputStyle,
}) => {
  const dateFormater = (date) => {
    return `${date.year}/${date.month}/${date.day}`;
  };
  const dataRange =
    selectedRange && selectedRange.from && selectedRange.to
      ? ` ${dateFormater(selectedRange.to)} از ${dateFormater(
          selectedRange.from
        )} تا`
      : "";
  const datesString =
    selectedDates && selectedDates[0]
      ? selectedDates.reduce((acc, date) => {
          return acc + `${dateFormater(date)} - `;
        }, "")
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
      value={selectedRange ? selectedRange : selectedDates}
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
