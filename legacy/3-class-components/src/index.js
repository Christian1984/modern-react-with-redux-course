import React from "react";
import ReactDom from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
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

    renderContent() {
        const month = new Date().getMonth()

        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        else if (this.state.lat) {
            return <SeasonDisplay lat={ this.state.lat } month={ month } />;
        }
        else if (!this.state.lat && !this.state.err) {
            return <Spinner text="Retrieving Current Position..." />;
        }

    }

    render() {
        console.log("render at " + new Date());
        return<div>{ this.renderContent() }</div>;
    }
}

ReactDom.render(<App />, document.querySelector("#root"));
