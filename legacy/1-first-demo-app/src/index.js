import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const buttonText = "Submit";
    
    return (
        <div>
            <h1 style={{color: "blue"}}>Hello World</h1>
            <label htmlFor="name" className="my-label">Your Name:</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: "blue", color: "white" }}>{buttonText}</button>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
