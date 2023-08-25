import React from "react";

export const IntensityIndex = ({ lowRangeIntensity }) => {
  return (
    <div>
      <h2>Low Range Intensity Data</h2>
      {lowRangeIntensity.map((item, index) => {
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
