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
            const spans = Math.floor(this.state.imgRef.current.clientHeight / 10);
            this.setState({ spans: spans });
        });
    }

    render() {
        return (
            <li style={ { gridRowEnd: `span ${this.state.spans + 1}` } }>
                <span style={ { height: `${(this.state.spans) * 10}px`} }>
                    <img ref={ this.state.imgRef } src={ this.props.url } alt={ this.props.alt } />
                </span>
            </li>
        );
    }
}

export default ImageCard;