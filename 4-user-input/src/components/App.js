import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import ApiKeys from "../nodist/ApiKeys";

class App extends React.Component {
    onSearchHandler = searchTerm => {
        console.log("Searching images for: ", searchTerm);

        axios.get("https://api.unsplash.com/search/photos/?query=" + searchTerm + "&client_id=" + ApiKeys.UNSPLASH_API_KEY)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <div className="ui container" style={ {marginTop: "10px"} }>
                    <SearchBar searchHandler={ this.onSearchHandler } />
                </div>
                <div className="ui container" style={ {marginTop: "10px"} }>
                    <ImageList />
                </div>
            </div>
        );
    }
}

export default App;