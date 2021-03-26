import React from "react";

const CountryScore = (props) => {
  // sorting the scores
  let scoresSort;
  if (props.scores === "ascending") {
    scoresSort = props.elem.scores.sort((a, b) => {
      return a.s - b.s; // ascending
    })
  } else {
    scoresSort = props.elem.scores.sort((a, b) => {
      return b.s - a.s; // descending
    })
  }


  return (
    <div className="countryScore">
      {scoresSort.map((sortedData, index) => {
        return (
        <ul key={index}>
          <li>{sortedData.n}</li>
          <li>{sortedData.s}</li>
        </ul>
        )
      })}
    </div>
  );
};

export default CountryScore;
