import React from "react";
import VideoCard from "./VideoCard";

class VideoList extends React.Component {
    renderListItems = () => {
        return this.props.videos.map(el => (
            <li key={ el.id }>
                <VideoCard video={ el } />
            </li>)
        );
    };

    renderList = () => {
        if (!this.props.videos || this.props.videos.length === 0) return <div>- empty -</div>;

        return (
            <ul>{ this.renderListItems() }</ul>
        );
    };

    render() {
        return(
            <div className="ui segment">
                { this.renderList() }
            </div>
        );
    }
}

export default VideoList;