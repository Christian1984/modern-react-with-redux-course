import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import { mockGeolocation, getGeolocation } from "./Utils"

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        //console.log("componentDidMount...");
    
        //getGeolocation()
        mockGeolocation()
            .then(res => this.setState({ lat: res.coords.latitude }))
            .catch(err => this.setState({ errorMessage: err.message }));
    }

    /*componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate:", prevProps, prevState, snapshot)
    }*/

    render() {
        console.log("render at " + new Date());

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        else if (this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } month={ new Date().getMonth() } />;
        }
        else if (!this.state.lat && !this.state.err) {
            return <div>Loading...</div>
        }
    
        /*return (
            <div className="ui container">
                <h2>Your Location:</h2>
                <div>Latitude: { this.state.lat }</div>
                <div>Error: { this.state.errorMessage }</div>
                <h2>Current Season:</h2>
                <SeasonDisplay />
            </div>
        );*/
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
