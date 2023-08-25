import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Form = ({ submitHandler }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [postcode, setPostcode] = useState("");

  return (
    <div>
      {/* <form> */}
      <p>Pick a date : </p>

      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
      />
      <div>
        Post Code:
        <input
          value={postcode}
          type="text"
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <button onClick={() => submitHandler(selectedDate, postcode)}>
        Submit
      </button>
      {/* </form> */}
    </div>
  );
};
