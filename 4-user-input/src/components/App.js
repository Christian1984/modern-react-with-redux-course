import React from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = { imageList: [] }

    onSearchHandler = async searchTerm => {
        try {
            const res = await unsplash.get("/search/photos", {
                params: {
                    query: searchTerm
                }
            });

            const imageList = res.data.results.map(e => ({
                url: e.urls.small,
                id: e.id,
                alt: e.description
            }));
            this.setState({ imageList: imageList });
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
                    <ImageList imageList={ this.state.imageList } />
                </div>
            </div>
        );
    }
}

export default App;