import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { setIntensity } from "./intensitySlice";

export const IntensityIndex = ({ lowRangeIntensity }) => {
  const intensity = useSelector((state) => state.intensity.value);
  const dispatch = useDispatch();

  console.log("lowRangeIntensity INTENSITY", lowRangeIntensity);

  // const findNextAvailableSlot = (intensityData) => {
  //   const nextSlot = intensityData.find((item) => {
  //     if (
  //       item.intensity.index !== "low" ||
  //       item.intensity.index !== "very low"
  //     ) {
  //       return nextSlot ? nextSlot.from : "No available slots";
  //     }
  //   });
  // };

  const findNextAvailableSlot = (intensityData) => {
    const nextSlot = intensityData.find(
      (item) =>
        item.intensity.index !== "low" || item.intensity.index !== "very low"
    );
    return nextSlot ? nextSlot.from : "No available slots";
  };

  return (
    <div className=".place-items-center .m-auto m-40 bg-green-600 rounded-lg">
      <h2 className="p-2 m-5 text-2xl font-semibold">
        Low Range Intensity Data
      </h2>
      <ul className="p-2 m-5">
        {lowRangeIntensity.map((item, index) => {
          console.log("item", item);
          return (
            <div key={index}>
              {lowRangeIntensity ? (
                <>
                  <span className="text-medium font-semibold">
                    Carbon Intensity:{" "}
                  </span>
                  <span>{item.intensity.index}</span>
                </>
              ) : (
                <p>
                  Next available slot for charging:{" "}
                  {findNextAvailableSlot(lowRangeIntensity)}
                </p>
              )}
            </div>
          );
        })}
      </ul>
    </div>
  );
};
