import React from "react";

class ImageCard extends React.Component {
    constructor() {
        super();
        this.state = {
            imgRef: React.createRef(),
            spans: 1
        };
    }

    componentDidMount() {
        console.log(this.state.imgRef);
        this.state.imgRef.current.addEventListener("load", () => {
            console.log(this.state.imgRef.current.clientHeight);
            const spans = Math.floor(this.state.imgRef.current.clientHeight / 10) + 1;
            this.setState({ spans: spans });
        });
    }

    render() {
        return <li style={ { gridRowEnd: `span ${this.state.spans}` } }><img ref={ this.state.imgRef } src={ this.props.url } alt={ this.props.alt } /></li>
    }
}

export default ImageCard;