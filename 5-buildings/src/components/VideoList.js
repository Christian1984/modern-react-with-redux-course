import React from "react";
import VideoCard from "./VideoCard";

const VideoList = (props) => {
    const renderListItems = () => {
        return props.videos.map(el => (
            <VideoCard video={ el } key={ el.id } />
        ));
    };

    const renderList = () => {
        if (!props.videos || props.videos.length === 0) return <div>- empty -</div>;

        return (
            <div className="ui divided items">{ renderListItems() }</div>
        );
    };

    return(
        <div className="ui segment">
            { renderList() }
        </div>
    );
}

export default VideoList;