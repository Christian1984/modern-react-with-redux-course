import React from "react";
import Accordion from "./Accordion";
import Search from "./Search";

const items = [
    {
        id: 1,
        title: "Why use React?",
        content: "React is awesome!"
    },
    {
        id: 2,
        title: "Why is it great?",
        content: "Because it uses Components to allow for code reuse and it does a lot of great stuff under the hood!"
    },
    {
        id: 3,
        title: "Can you give an Example?",
        content: "The state system/hooks for example that will make components rerender automatically!"
    },
]

const App = () => {
    return (
        <div className="ui container">
            {/*<Accordion items={items} />*/}
            <Search />
        </div>
    );
};

export default App;

