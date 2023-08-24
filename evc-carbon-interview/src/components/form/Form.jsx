import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export const Form = ({ submitHandler }) => {
  const [startDate, setStartDate] = useState();
  const [postCode, setPostCode] = useState("");
  console.log("start date", startDate);

  const mainApi = async () => {
    // setLoading(true);
    const isoDate = startDate.toISOString();
    try {
      const response = await axios.get(
        `https://api.carbonintensity.org.uk/regional/intensity/${isoDate}/fw24h/postcode/${postCode}`
      );

      const result = response.data.data;
      console.log("mainData", result);
      // setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* <form> */}
      <p>Pick a date : </p>

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
      <div>
        Post Code:{" "}
        <input
          value={postCode}
          type="text"
          onChange={(e) => setPostCode(e.target.value)}
        />
      </div>
      {/* <button onClick={() => submitHandler(startDate, postCode)}> */}
      <button onClick={() => mainApi()}>Submit</button>
      {/* </form> */}
    </div>
  );
};
