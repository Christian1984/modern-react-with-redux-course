import React, { useState } from "react";
import Accordion from "./Accordion";
import Dropdown from "./Dropdown";
import Search from "./Search";

const items = [
    {
        id: 1,
        title: "Why use React?",
        content: "React is awesome!",
    },
    {
        id: 2,
        title: "Why is it great?",
        content: "Because it uses Components to allow for code reuse and it does a lot of great stuff under the hood!",
    },
    {
        id: 3,
        title: "Can you give an Example?",
        content: "The state system/hooks for example that will make components rerender automatically!",
    },
];

const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
];

const App = () => {
    const [selected, setSelected] = useState(options[0]);
    return (
        <div className="ui container">
            {/*<Accordion items={items} />*/}
            {/* <Search /> */}
            <Dropdown options={options} selected={selected} onSelectedChange={setSelected} />
        </div>
    );
};

export default App;
