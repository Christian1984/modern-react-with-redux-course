import { useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <>
            {expanded && (
                <div
                    style={{
                        position: "fixed",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        // backgroundColor: "black",
                        // opacity: 0.5,
                    }}
                    onClick={() => {
                        setExpanded(false);
                    }}
                ></div>
            )}
            <div className="ui form hidden">
                <div className="field">
                    <label className="label">Select a color</label>
                    <div
                        onClick={() => setExpanded((old) => !old)}
                        className={"ui selection dropdown" + (expanded ? " visible active" : "")}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div className={"menu" + (expanded ? " visible transition" : "")}>
                            {options
                                //.filter((option) => option !== selected)
                                .map((option) => (
                                    <div
                                        key={option.value}
                                        className="item"
                                        onClick={() => {
                                            onSelectedChange(option);
                                        }}
                                    >
                                        {option.label}
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
            {/*
            <select className="ui dropdown">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
             */}
        </>
    );
};

export default Dropdown;
