import React from "react";
import { faker } from "@faker-js/faker";

const CommentDetails = (props) => {
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

export { CommentDetails };