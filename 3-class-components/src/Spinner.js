import React from "react";

const Spinner = props => {
    const text = props.text || "Loading..."
    return (
        <div class="ui active inverted dimmer">
            <div class="ui big text loader">{ text }</div>
        </div>
    )
}

export default Spinner;