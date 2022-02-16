import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import { mockGeolocation, getGeolocation } from "./Utils"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null };

        const month = new Date().getMonth();
        console.log("Month:", month);
    
        //getGeolocation()
        mockGeolocation()
            .then(res => this.setState({ lat: res.coords.latitude }))
            .catch(err => console.log(err));
    }

    render() {
        console.log("render at " + new Date());
    
        return (
            <div className="ui container">
                <h2>Your Location:</h2>
                <div>Latitude: { this.state.lat }</div>
                <h2>Current Season:</h2>
                <SeasonDisplay />
            </div>
        );
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
