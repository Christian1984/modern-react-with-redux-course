import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

async function getGeolocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            e => resolve(e),
            err => reject(err)
        );
    });
}

async function mockGeolocation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve({
            coords: {
                precision: 15.663,
                latitude: 50.8037693,
                longitude: 6.9836105
            }
        }), 1000);
    });
}

const App = () => {
    const month = new Date().getMonth();
    console.log("Month:", month);

    //getGeolocation()
    mockGeolocation()
        .then(res => {
            console.log("Location:", res);
        })
        .catch(err => console.log(err));

    return (
        <div className="ui container">
            <h2>Your Location:</h2>
            <div>Latitude: [//TODO: use the statesystem to render the latitude here]</div>
            <h2>Current Season:</h2>
            <SeasonDisplay />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));
