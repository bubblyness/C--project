import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import dayjs from "dayjs";
import { createStore } from "redux";
import { Loading } from "./components/loading/Loading";
import { Form } from "./components/form/Form";

function App() {
  // const store = createStore();

  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [postCode, setPostCode] = useState("");

  console.log("startDate", startDate);
  console.log("DATE", dayjs().format("YYYY-MM-DDThh:mmz"));

  const now = Date.now();
  const nowISO = new Date(now).toISOString();
  console.log("nowISO", nowISO);

  const submitHandler = (date, postCode) => {
    const isoDate = date.toISOString();
    console.log("DATE AND CODE", isoDate, postCode);
    mainApi(isoDate, postCode);
  };

  const dateHandler = () => {
    setStartDate(dayjs().format("YYYY-MM-DDThh:mmz"));
  };

  const mainApi = async (date, postCode) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.carbonintensity.org.uk/regional/intensity/${date}/fw24h/postcode/${postCode}`
      );
      debugger;
      const result = await response.json();
      console.log("mainData", result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      debugger;
    }
  };

  // useEffect(() => {
  //   mainApi();
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.carbonintensity.org.uk/intensity`)
  //     .then((res) => console.log(res.data.data))
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <div>
      {loading ? <Loading /> : null}

      <Form submitHandler={submitHandler} />
    </div>
  );
}

export default App;
