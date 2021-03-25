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

  function test (sortedData) {
    // console.log(sortedData);
    console.log(sortedData.n);
    console.log(sortedData.s);
  }

  return (
    <ul className="countryScore">
      {scoresSort.map((sortedData, index) => {
        <li key={index}>
          <p>{test(sortedData)}</p>
          <p>{sortedData.n}</p>
          <p>{sortedData.s}</p>
        </li>
      })}
      {/* {scoresSort}

      <p>{props.n}</p>
      <p>{props.s}</p> */}
    </ul>
  );
};

export default CountryScore;
