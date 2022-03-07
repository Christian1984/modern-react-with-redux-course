import React from "react";

class VideoPlayer extends React.Component {
    render() {
        return <div>Video: { this.props.video ? this.props.video.id : "none" }</div>
    }
}

export default VideoPlayer;