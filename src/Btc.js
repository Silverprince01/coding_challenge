import React, { useState, useEffect } from "react";
import { getVolume } from "./getData.js";
import "./style.css";
const Btc = () => {
  const [value, setValue] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    getVolume(setValue);
  }, []);
  const { data, loading, error } = value;
  const btcData = data?.filter((item) => item.unit === "BTC");

  const sortedBtcData = btcData?.sort((a, b) => b.volume - a.volume);

  const top5BtcData = sortedBtcData?.slice(0, 5);
  console.log(top5BtcData);

  return (
    <div className="container">
      {loading ? (
        <div>
          <p>Loading.....</p>
        </div>
      ) : error ? (
        <div>
          <p>Error loading the data</p>
        </div>
      ) : (
        <div>
          <ul>
            {top5BtcData?.map((topdata) => {
              let { name, volume } = topdata;
              return <li key={name}>{`${name.toUpperCase()} (${volume})`}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Btc;
