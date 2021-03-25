import React, {useState} from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores.js";
import Heading from "./components/Heading.js";
import CountryHeading from "./components/CountryHeading.js";
import CountryScore from "./components/CountryScore.js";

const App = () => {
  const countries = allCountryScores.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  const [sort, setSort] = useState("ascending");

  const scoreSort = () => {
    setSort (sort => {
      if (sort === "ascending") {
        return "descending";
      } else {
        return "ascending";
      }
    });
  };

  return (
    <div className="container">
      <Heading />
      <button className="btn btn-success" onClick={scoreSort}>Sort Scores</button>
      {countries.map((elem, index) => (
        <div className="countryScore-container" key={index}>
          <CountryHeading name={elem.name} />
          <CountryScore elem={elem} scores={sort} />
          {/* {elem.scores
            .sort((a, b) => {
              return b.s - a.s;
            })
            .map((elem, index) => (
              <CountryScore key={index} n={elem.n} s={elem.s} />
            ))} */}
        </div>
      ))}
    </div>
  );
};

export default App;
