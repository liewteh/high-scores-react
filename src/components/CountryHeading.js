import React from 'react';

const CountryHeading = (props) => {
    return (
        <div className="CountryHeading">
            <h2>High Scores: {props.name}</h2>
        </div>
    )
};

export default CountryHeading;