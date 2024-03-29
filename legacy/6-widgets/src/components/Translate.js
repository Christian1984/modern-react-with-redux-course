import { useEffect, useState } from "react";
import { Convert } from "./Convert";
import Dropdown from "./Dropdown";

const options = [
    { label: "Afrikaans", value: "af" },
    { label: "German", value: "de" },
    { label: "Hindi", value: "hi" },
];

export const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <br />
            <Dropdown label="Select Language" options={options} selected={language} onSelectedChanged={setLanguage} />
            <br />
            <div className="ui form">
                <div className="field">
                    <label>Output</label>
                    <Convert text={text} language={language.value} />
                </div>
            </div>
        </div>
    );
};
