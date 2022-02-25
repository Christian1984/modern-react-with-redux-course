import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

class App extends React.Component {
    onSearchHandler = searchTerm => {
        console.log("searchTerm", searchTerm);
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