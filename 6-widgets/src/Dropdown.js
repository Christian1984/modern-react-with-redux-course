import { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
    const [expanded, setExpanded] = useState(false);
    const dropdownRef = useRef(null);

    const onBodyClick = (e) => {
        //console.log("body ->", e.target);
        if (!dropdownRef.current.contains(e.target)) {
            setExpanded(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", onBodyClick, { capture: true });
        return () => document.body.removeEventListener("click", onBodyClick);
    }, []);

    return (
        <div className="ui form hidden" ref={dropdownRef}>
            <div className="field">
                <label className="label">Select a color</label>
                <div
                    onClick={(e) => {
                        //console.log("label -> ", e.target);
                        setExpanded((old) => !old);
                    }}
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
                                    onClick={(e) => {
                                        //console.log("option -> ", e.target);
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
    );
};

export default Dropdown;
