import "./SeasonDisplay.scss";
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's go to the beach",
        iconName: "sun",
        className: "summer"
    },
    winter: {
        text: "Burrr it's cold!",
        iconName: "snowflake",
        className: "winter"
    }
}

const SeasonDisplay = props => {
    const isSummer = (props.lat >= 0 && props.month > 2 && props.month < 9)
        || (props.lat < 0 && (props.month <= 2 || props.month >= 9));
    const { text, iconName, className } = isSummer ? seasonConfig.summer : seasonConfig.winter;

    return (
        <div className={ `season-display ${className}` }>
            <i className= { `${iconName} icon massive icon-left` } ></i>
            <h1> { text }</h1>
            <i className= { `${iconName} icon massive icon-right` } ></i>
        </div>
    );
}

export default SeasonDisplay;