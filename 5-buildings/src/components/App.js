import React from "react";
import SearchBar from "./SearchBar";
import VideoSection from "./VideoSection";
import youtube from "../api/youtube";
import "./App.scss";

class App extends React.Component {
    state = {
        videos: []
    }

    searchHandler = async searchTerm => {
        try {
            const res = await youtube.get("/search", {
                params: {
                    q: searchTerm
                }
            });

            const items = res.data.items.map(el => {
                console.log(el);
                return {
                    id: el.id.videoId,
                    title: el.snippet.title,
                    description: el.snippet.description,
                    thumbnail: el.snippet.thumbnails.high.url,
                    channelTitle: el.snippet.channelTitle,
                    channelId: el.snippet.channelId
                }
            });

            this.setState({ videos: items });
        }
        catch(e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div>
                <div className="ui container">
                    <SearchBar submitHandler={ this.searchHandler } />
                </div>
                <div className="ui container">
                    <VideoSection videos={ this.state.videos } />
                </div>
            </div>

        );
    }
}

export default App;