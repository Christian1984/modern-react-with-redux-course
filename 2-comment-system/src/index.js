import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker"
import { CommentDetails } from "./CommentDetails";

const getFakerTime = () => faker.date.past().toLocaleString();
const getFakerName = () => faker.name.findName();
const getFakerText = () => faker.random.words(Math.floor(Math.random() * 30) + 10);
const getFakerAvatarUrl = () => faker.image.avatar();

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
            <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
            <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));
