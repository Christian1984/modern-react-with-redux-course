import React from "react";

class ImageList extends React.Component {
    imageList() {
        return this.props.imageUrls.map(e => <li><img src={ url } /></li>);
    }

    render() {
        return (
            <div className="ui segment">
                <div>Found {this.props.imageUrls.length} images</div>
                <ul>{ this.imageList() }</ul>
            </div>
        );
    }
}

export default ImageList