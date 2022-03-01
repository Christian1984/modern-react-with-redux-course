import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.scss";

const ImageList = props => {
    const imageList = props.imageList.map(image => <ImageCard key={ image.id } url={ image.url } alt={ image.alt } />);
    console.log(props.imageList);

    return (
        <div className="ui segment">
            <div>Found {props.imageList.length} images</div>
            <ul className="image-list">{ imageList }</ul>
        </div>
    );
}

export default ImageList