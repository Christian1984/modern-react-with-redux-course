import React from "react";
import he from "he";
import SearchBar from "./SearchBar";
import VideoSection from "./VideoSection";
import youtube from "../api/youtube";
import "./App.scss";

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount = () => {
        this.searchHandler("cats");
    }

    searchHandler = async searchTerm => {
        try {
            const res = await youtube.get("/search", {
                params: {
                    q: searchTerm
                }
            });

            const items = res.data.items.map(el => {
                return {
                    id: el.id.videoId,
                    title: he.decode(el.snippet.title),
                    description: he.decode(el.snippet.description),
                    thumbnail: el.snippet.thumbnails.high.url,
                    channelTitle: he.decode(el.snippet.channelTitle),
                    channelId: el.snippet.channelId
                }
            });

            const selectedVideo = items && items[0] ? items[0] : null;
            this.setState({ 
                videos: items,
                selectedVideo: selectedVideo
            });
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
                    <VideoSection videos={ this.state.videos } selectedVideo={ this.state.selectedVideo } onVideoSelect={ this.onVideoSelect } />
                </div>
            </div>

        );
    }
}

export default App;