import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setIntensity } from "./intensitySlice";

export const IntensityIndex = () => {
  const intensity = useSelector((state) => state.intensity.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Low Range Intensity Data</h2>
      {dispatch(setIntensity).map((item, index) => {
        const firstLowIntensityValue = item.find(
          (firstValue) =>
            firstValue.intensity.index === "low" ||
            item.intensity.index === "very low"
        );

        return (
          <div key={index}>
            {firstLowIntensityValue ? (
              <p>{firstLowIntensityValue.intensity.index}</p>
            ) : (
              <p>Next available date and time is: </p>
            )}
          </div>
        );
      })}
    </div>
  );
};
