import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker"
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const getFakerTime = () => faker.date.past().toLocaleString();
const getFakerName = () => faker.name.findName();
const getFakerText = () => faker.random.words(Math.floor(Math.random() * 30) + 10);
const getFakerAvatarUrl = () => faker.image.avatar();

const App = () => {

    return (
        <div className="ui container">
            <h2>Comments Awaiting Moderation</h2>
            <div className="ui comments segment cards">
                <ApprovalCard>
                    <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
                </ApprovalCard>
            </div>
            <h2>Approved Comments</h2>
            <div className="ui segment comments">
                <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
                <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
                <CommentDetails author={ getFakerName() } time={ getFakerTime() } text={ getFakerText() } avatarUrl={ getFakerAvatarUrl() } />
            </div>
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));
