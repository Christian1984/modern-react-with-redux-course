import React from "react";
import "./VideoCard.scss"

const VideoCard = props => {
    return (
        <div className="item video-item" onClick={ () => props.onVideoSelect(props.video) } >
            <img className="ui tiny image" src={ props.video.thumbnail }  />
            <div className="content">
                <div className="header">{props.video.title}</div>
                <div className="meta"><span>{props.video.channelTitle}</span></div>
            </div>
        </div>
    );
}

export default VideoCard;