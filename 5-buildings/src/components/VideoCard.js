import React from "react";

class VideoCard extends React.Component {
    render() {
        return (
            <div>
                <a href={ `https://www.youtube.com/watch?v=${this.props.video.id}` } target="blank">{ this.props.video.title }</a>
            </div>
        );
    }
}

export default VideoCard;