import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { createStore } from "redux";
import { Loading } from "./components/loading/Loading";
import { Form } from "./components/form/Form";
import { IntensityIndex } from "./components/intensityIndex/IntensityIndex";

function App() {
  // const store = createStore();
  const [fetchedData, setFetchedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lowRangeIntensity, setLowRangeIntensity] = useState([]);

  const submitHandler = (selectedDate, postcode) => {
    const isoDate = selectedDate.toISOString();
    fetchData(isoDate, postcode);
    // filterIntensity();
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
      console.log("DATA", response.data.data);
      console.log("FetchedData", fetchedData.data);
      filterIntensity();
    } catch (error) {
      console.error("Error", error);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   console.log("IntensityIndex state has changed:");
  // filterIntensity();
  // }, [fetchedData]);

  const filterIntensity = () => {
    const lowIntensityItems = fetchedData.data.filter((item) => {
      return (
        item.intensity.index === "low" || item.intensity.index === "very low"
      );
    });
    setLowRangeIntensity(lowIntensityItems);
    console.log("lowIntensityItems", lowIntensityItems);
  };

  return (
    <div>
      {loading && <Loading />}
      <Form submitHandler={submitHandler} />
      <IntensityIndex lowRangeIntensity={lowRangeIntensity} />
    </div>
  );
}

export default App;
