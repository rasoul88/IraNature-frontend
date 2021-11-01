import React from "react";
import { Range, getTrackBackground } from "react-range";
import { CustomLable, CustomThumb } from "./custom-range-slider.styles";

const CustomRangeSlider = ({
  values,
  onChange,
  max,
  min,
  step,
  valueLabelDisplay,
}) => {
  const colors =
    values.length === 1
      ? ["#1976d2", "#a1bbf6"]
      : ["#a1bbf6", "#1976d2", "#a1bbf6"];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Range
        values={values}
        step={step}
        min={min}
        max={max}
        onChange={(values) => onChange(values)}
        renderMark={({ props, index }) => (
          <div
            {...props}
            style={{
              marginBottom: "-7px",
              height: "3px",
              width: "2px",
              // backgroundColor: index * STEP < values[0] ? "#548BF4" : "#ccc",
              backgroundColor: "#548BF4",
              ...props.style,
            }}
          />
        )}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "36px",
              display: "flex",
              width: "100%",
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: values,
                  colors: colors,
                  min: min,
                  max: max,
                }),
                alignSelf: "center",
                cursor: "pointer",
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ index, props, isDragged }) => (
          <CustomThumb
            {...props}
            // style={{
            //   ...props.style,
            // }}
          >
            {valueLabelDisplay === "on" && (
              <CustomLable>
                <p>{values[index]}</p>
              </CustomLable>
            )}
            <div
              style={{
                height: "5px",
                width: "5px",
                borderRadius: "50%",
                backgroundColor: isDragged ? "#1976d2" : "#a1bbf6",
              }}
            />
          </CustomThumb>
        )}
      />
    </div>
  );
};

export default CustomRangeSlider;
