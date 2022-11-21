import React from "react";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

const VideoSection = props => {
    return (
        <div className="ui segment">
            <div className="ui grid">
                <div className="ui row">
                    <div className="ten wide column">
                        <VideoPlayer video={ props.selectedVideo } />
                    </div>
                    <div className="six wide column">
                        <VideoList videos={ props.videos } onVideoSelect={ props.onVideoSelect } />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoSection;