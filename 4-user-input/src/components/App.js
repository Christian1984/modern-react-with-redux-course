import React from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";
import ApiKeys from "../nodist/ApiKeys";

class App extends React.Component {
    state = { imageUrls: [] }

    onSearchHandler = async searchTerm => {
        console.log("Searching images for: ", searchTerm);

        try {
            const res = await axios.get("https://api.unsplash.com/search/photos/", {
                headers: {
                    Authorization: "Client-ID " + ApiKeys.UNSPLASH_API_KEY
                },
                params: {
                    query: searchTerm
                }
            });

            const urls = res.data.results.map(e => e.urls.small);
            this.setState({ imageUrls: urls });
        }
        catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                <div className="ui container" style={ {marginTop: "10px"} }>
                    <SearchBar searchHandler={ this.onSearchHandler } />
                </div>
                <div className="ui container" style={ {marginTop: "10px"} }>
                    <ImageList imageUrls={ this.state.imageUrls } />
                </div>
            </div>
        );
    }
}

export default App;