import React from "react";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
    return (
        <div>
            <div className="ui container" style={ {marginTop: "10px"} }>
                <SearchBar />
            </div>
            <div className="ui container" style={ {marginTop: "10px"} }>
                <ImageList />
            </div>
        </div>
    );
};

export default App;