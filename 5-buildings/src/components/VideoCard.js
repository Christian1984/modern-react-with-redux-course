import React from "react";

const VideoCard = (props) => {
    const videoLink = `https://www.youtube.com/watch?v=${props.video.id}`;
    const channelLink = `https://youtube.com/channel/${props.video.channelId}`;

    return (
        <div className="item">
            <a className="ui small image" href={ videoLink } target="_blank">
                <img src={ props.video.thumbnail } />
            </a>
            <div className="content">
                <a className="header" href={ videoLink } target="blank">{ props.video.title }</a>
                <div className="meta">
                    <a href={ channelLink } target="_blank">{ props.video.channelTitle }</a>
                </div>
                <div className="description">
                    <p>{ props.video.description }</p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;