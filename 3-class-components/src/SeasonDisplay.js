import React from "react";

const SeasonDisplay = props => {
    const isSummer = (props.lat >= 0 && props.month > 2 && props.month < 9)
        || (props.lat < 0 && (props.month <= 2 || props.month >= 9));
    const text = isSummer ? "Summer" : "Winter";
    const icon = isSummer ? "sun" : "snowflake";

    return (
        <div>
            <i className= { `${icon} icon massive` } ></i>
            <h1> { text }</h1>
            <i className= { `${icon} icon massive` } ></i>
        </div>
    );
}

export default SeasonDisplay;