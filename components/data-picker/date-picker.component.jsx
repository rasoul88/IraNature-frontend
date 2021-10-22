import React from "react";
// React.useLayoutEffect = React.useEffect;
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, {
  utils,
} from "@hassanmojab/react-modern-calendar-datepicker";

const CustomDatePicker = ({ selectedRange, onChange }) => {
  const dateFormater = (date) => {
    return `${date.year}/${date.month}/${date.day}`;
  };
  const dataRange =
    selectedRange.from && selectedRange.to
      ? ` ${dateFormater(selectedRange.to)} از ${dateFormater(
          selectedRange.from
        )} تا`
      : "";
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref}
      placeholder="انتخاب تاریخ"
      value={dataRange}
      style={{
        width: "26rem",
        borderRadius: "5px",
        border: "1px solid lightgray",
        fontSize: "1.4rem",
        fontFamily: "IranSans",
        textAlign: "center",
        padding: "0.5rem 1rem",
        color: "#333",
      }}
      // className="my-custom-input-class" // a styling class
    />
  );

  return (
    <DatePicker
      value={selectedRange}
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
