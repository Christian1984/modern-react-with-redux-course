import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

class VideoSection extends React.Component {
    state = { selectedVideo: null }

    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui segment">
                <VideoPlayer video={ this.state.selectedVideo } />
                <VideoList videos={ this.props.videos } onVideoSelect={ this.onVideoSelect } />
            </div>
        )
    }
}

export default VideoSection;