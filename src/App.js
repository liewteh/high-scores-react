import React, {useState} from "react";
import "./App.css";
import allCountryScores from "./data/allCountryScores.js";
import Heading from "./components/Heading.js";
import CountryHeading from "./components/CountryHeading.js";
import CountryScore from "./components/CountryScore.js";
import WorldTable from "./components/WorldTable.js";

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

  // create world scores and sort ascending
  let worldScore = [];
  allCountryScores.forEach(elem => {
    worldScore = worldScore.concat(elem.scores).sort((a, b) => {
      return a.s - b.s;
    })
  })

  return (
    <div className="container">
      <h1>World Scores</h1>
      <table class="tableCentre">
        {worldScore.map((score, index) => (
          <WorldTable n={score.n} s={score.s} key={index} />
        ))}
      </table>
    
      <Heading />
      <button className="btn btn-success" onClick={scoreSort}>Sort Scores</button>
      {countries.map((elem, index) => (
        <div className="countryScore-container" key={index}>
          <CountryHeading name={elem.name} />
          <CountryScore elem={elem} scores={sort} />
        </div>
      ))}
    </div>
  );
};

export default App;
