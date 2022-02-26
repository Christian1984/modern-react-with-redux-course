import React from "react";
import "./ImageList.scss";

const ImageList = props => {
    const imageList = props.imageList.map(image => <li key={ image.id }><img src={ image.url } alt={ image.alt } /></li>);
    console.log(props.imageList);
    return (
        <div className="ui segment">
            <div>Found {props.imageList.length} images</div>
            <ul className="image-list">{ imageList }</ul>
        </div>
    );
}

export default ImageList