/**
 * Create a unordered list using React that lists the top 5 exchanges by volume of currency type Bitcoin (BTC) in
 * descending order given the api endpoint:
 *   /volume.json
 *
 * Work the way you are most comfortable and treat this as an everyday task. You are allowed to ask questions,
 * look up documentation and search for answers.
 */

import React from "react";
import Btc from "./Btc";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <h1>Top 5 Exchanges by BTC Volume</h1>

      {/* list goes here */}
      <Btc />
    </div>
  );
};

export default App;
