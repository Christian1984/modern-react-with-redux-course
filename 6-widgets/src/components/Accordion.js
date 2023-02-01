import React, { useState } from "react";

const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = index => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((e, index) => {
        const active = index === activeIndex ? "active" : "";
        return (
            <React.Fragment key={e.id}>
                <div className={`title ${active}`} onClick={ () => onTitleClick(index) }>
                    <i className="dropdown icon"></i>
                    {e.title}
                </div>
                <div className={`content ${active}`}>
                    <p className="transition visible">
                    {e.content}
                    </p>
                </div>
            </React.Fragment>
        )
});

    return (
        <div>
            <div className="ui styled accordion">{renderedItems}</div>
            <div>Active Item: { activeIndex }</div>
        </div>
    );
};

export default Accordion;