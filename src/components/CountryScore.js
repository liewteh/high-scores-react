import React from "react";

const CountryScore = (props) => {
  return (
    <div className="countryScore">
      <p>{props.n}</p>
      <p>{props.s}</p>
    </div>
  );
};

export default CountryScore;
