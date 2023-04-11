import React from "react";

const VideoPlayer = props => {
    if (!props.video) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className="ui embed">
                <iframe title="Video Player" src={`https://youtube.com/embed/${props.video.id}`}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{ props.video.title }</h4>
                <p>{ props.video.description }</p>
            </div>
        </div>
    );
}

export default VideoPlayer;