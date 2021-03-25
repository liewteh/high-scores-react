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

  // function test (sortedData) {
  //   // console.log(sortedData);
  //   console.log(sortedData.n);
  //   console.log(sortedData.s);
  // }

  return (
    <div className="countryScore">
      {scoresSort.map((sortedData, index) => {
        return (
        <ul key={index}>
          {/* <li>{test(sortedData)}</li> */}
          <li>{sortedData.n}</li>
          <li>{sortedData.s}</li>
        </ul>
        )
      })}
      {/* {scoresSort}

      <p>{props.n}</p>
      <p>{props.s}</p> */}
    </div>
  );
};

export default CountryScore;
