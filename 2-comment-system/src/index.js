import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker"

const Comment = () => {
    const imgUrl = faker.image.avatar();
    const name = faker.name.findName();
    const time = faker.date.past().toLocaleString();
    const text = faker.random.words(Math.floor(Math.random() * 30) + 10);

    return (
        <div className="comment">
            <a href="/" className="avatar"><img alt="avatar" src={ imgUrl } /></a>
            <div className="content">
                <a href="/" className="author">{ name }</a>
                <div className="metadata">
                    <span className="date">{ time }</span>
                </div>
                <div className="text">{ text }</div>
            </div>
        </div>
    );
}

const App = () => {

    return (
        <div className="ui container comments">
            <Comment />
            <Comment />
            <Comment />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));
