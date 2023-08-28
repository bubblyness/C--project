import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = ({ submitHandler }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [postcode, setPostcode] = useState("");

  return (
    <div className=".place-items-center .m-auto m-40">
      {/* <form> */}
      <span>Pick a date : </span>

      <DatePicker
        className="form-control p-2 m-5 border-black border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <div>
        Post Code :
        <input
          className="form-control p-2 m-5 border-black border-solid border-2 rounded-2xl focus:outline-none placeholder:text-black"
          value={postcode}
          type="text"
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <div className=".m-auto">
        <button
          className=".m-auto bg-green-600 rounded-lg py-3 px-4"
          onClick={() => submitHandler(selectedDate, postcode)}
        >
          Submit
        </button>
      </div>
      {/* </form> */}
    </div>
  );
};
