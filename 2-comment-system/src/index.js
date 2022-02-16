import React from "react";
import ReactDom from "react-dom";
import { faker } from "@faker-js/faker"
import { CommentDetails } from "./CommentDetails";

const App = () => {

    return (
        <div className="ui container comments">
            <CommentDetails />
            <CommentDetails />
            <CommentDetails />
        </div>
    );
}

ReactDom.render(<App />, document.querySelector("#root"));
