import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setIntensity } from "./intensitySlice";

export const IntensityIndex = ({ lowRangeIntensity }) => {
  const intensity = useSelector((state) => state.intensity.value);
  const dispatch = useDispatch();

  console.log("lowRangeIntensity INTENSITY", lowRangeIntensity);
  return (
    <div className=".place-items-center .m-auto m-40">
      <h3>Low Range Intensity Data</h3>
      <ul>
        {lowRangeIntensity.map((item, index) => {
          console.log("item", item);

          return (
            <div key={index}>
              {lowRangeIntensity ? (
                <p>{item.intensity.index}</p>
              ) : (
                <p>Next available date and time is: </p>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
