import React from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores.js";
import Heading from "./components/Heading.js";
import CountryHeading from "./components/CountryHeading.js";
import CountryScore from "./components/CountryScore.js";

const App = () => {
  const countries = allCountryScores.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="container">
      <Heading />
      {countries.map((elem, index) => (
        <div className="countryScore-container">
          <CountryHeading key={index} name={elem.name} />
          {elem.scores
            .sort((a, b) => {
              return a.s - b.s;
            })
            .map((elem, index) => (
              <CountryScore key={index} n={elem.n} s={elem.s} />
            ))}
        </div>
      ))}
    </div>
  );
};

export default App;
