import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { createStore } from "redux";
import { Loading } from "./components/loading/Loading";
import { Form } from "./components/form/Form";
import { IntensityIndex } from "./components/intensityIndex/IntensityIndex";
import { useDispatch, useSelector } from "react-redux";

function App() {
  // const store = createStore();
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lowRangeIntensity, setLowRangeIntensity] = useState([]);

  const submitHandler = (selectedDate, postcode) => {
    const isoDate = selectedDate.toISOString();
    fetchData(isoDate, postcode);
  };

  const fetchData = async (isoDate, postcode) => {
    if (!isoDate || !postcode) {
      alert("Please select a date and enter a post code.");
      return;
    }
    setLoading(true);

    try {
      const url = `https://api.carbonintensity.org.uk/regional/intensity/${isoDate}/fw24h/postcode/${postcode}`;

      const response = await axios.get(url);
      setFetchedData(response.data.data);
      console.log("response.data.data", response.data.data);
      // console.log("fetchedData", fetchedData);
      filterIntensity(response.data.data);
    } catch (error) {
      console.error("Error", error);
    }
    setLoading(false);
  };

  const filterIntensity = () => {
    const lowIntensityItems = fetchedData.data.filter((item) => {
      return (
        item.intensity.index === "low" || item.intensity.index === "very low"
      );
    });
    setLowRangeIntensity(lowIntensityItems);
  };

  // useEffect(() => {
  //   filterIntensity();
  // }, [fetchedData]);

  return (
    <div>
      {loading && <Loading />}
      <Form submitHandler={submitHandler} />
      <IntensityIndex lowRangeIntensity={lowRangeIntensity} />
    </div>
  );
}

export default App;
