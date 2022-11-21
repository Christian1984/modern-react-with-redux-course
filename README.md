This repo is a code-along for https://www.udemy.com/course/react-redux/

# Project Overview

- Project 1 Covers Sections (1) and (2)
    - Basic JSX

- Project 2 Covers Section (3)
    - Props

- Project 3 Covers Sections (4) - (6)
    - Class Based Components
    - State
    - Lifecycle Methods

- Project 4 Covers Sections (7) - (10)
    - Handling User Events/Input
    - API Requests
    - Building Lists of Records
    - Using Refs for DOM access

- Project 5 Covers Section (11)
    - Challenge

- Project 6 Covers Section (12)
    - React Hooks

# Initializing And Launching a React App

- install node
- use `npx create-react-app [appname]` to initialize a new react app
- start the app with `npm start` 

# JSX Basics

- babel is used to "translate" JSX so it can be interpreted by basically any web browser. babel provides a nice tool to check on the fly how a given JSX is translated at https://babeljs.io/repl
- quotes vs double-quotes: in JSX-components double quotes should always be used to indicate a string, but for non-JSX-components, single quotes are used (by community convention). but from a technical point of view, it does not matter. i'll use double quotes.
- `class` vs `className`: an html `class` property should be converted to `className` when converted to JSX. this is simply to avoid collisions between the JavaScript `class` keyword and the property inside JSX.
- `for` vs `htmlFor`: for the same reason, the `for` attribute (of labels) is replaced with `htmlFor` to prevent collisions
- js variables or methods can be reference from JSX with curly braces, e.g. `<button>{ getMyVar() }</button>` would show a button with the text returned by `getMyVar()`.
- default props can be specified by configuring
    ```
    const Component = props => {
        //...
    };

    Component.defaultProps = {
        test: "Hello World!"
    };
    ```
    This is a better approach than doing something like `<div>{ props.test || "Hello World!" }</div>`

# Three Tenets of Components

## Component Nesting

- components can be used and nested inside each other just like standard html elements can

## Component Reusability

- child components can and should "live" in their own .js files and then be exported and improted by the parent component
- components can be nested inside other components by also "implicitly" passing them as props, e.g.
    ```
    <ApprovalCard>
        <h1>nested h1</h1>
    </ApprovalCard>
    ```
    will add an h1 element to `props.children`
- inside the component, the children can be "consumed" like this, e.g.
    ```
    <div>
        { props.children }
    </div>
    ```

## Component Configuration

- data can be passed grom a parent to a child component using props (e.g. with `<Comment author="Tom" />`)...
- ... and then be processed by the child consuming the `props` parameter that is always passed as the first parameter, e.g.
    ```
    const Comment = props => {
        return (
            <span>{ props.author }</span>
        );
    }
    ```

# Class Components

- aren't really state of the art anymore, as *Function Components* got a lot more powerful with the most recent versions of React, but may be used in a lot of legacy code
- it's also much easier
- must extend `React.Component`
- must implement a `render()` method that returns the actual JSX
- rendering a component and returning different JSX based on state is called *conditional redenring*
- it is good practice to avoid conditional rendering inside the `render()` function, but rather extract it in a seperate function and return one common parent element from render, which then calls that other function inside, e.g.
    ```
    renderContent() {
        if (this.state.errorMessage) {
            return <div>Error: { this.state.errorMessage }</div>
        }
        else if (this.state.lat) {
            return <div>Your latitude is { this.state.lat }</div>;
        }
        else if (!this.state.lat && !this.state.err) {
            return <div>Loading data...</div>;
        }

    }

    render() {
        return <div class="parent-class">{ this.renderContent() }</div>;
    }
    ```

## The React State System

- `state` must not be confused with `props`
- only works with Class Components (though Function Components offer a similar system through hooks)
- `state` is a JavaScript object that contains data relevant to the component
- updating `state` causes the component to re-render
- `state` must be updated by using the `setState()` method
- `state` must be initialized when the component is created, e.g. in the `constructor` method
- the initialization of `this.state` in the `constructor` is THE ONLY TIME where it is directly assigned without using `setState()`!!!
- the `render()` method should never contain any "business logic" that does any kind of heavy lifting or, even worse, updates the components `state`. that will ultimately lead to constant re-rendering
- as an alternative method to initialize state in the `constructor` method, it can also be initialized as a class property right away, e.g.
    ```
    class MyComponent extends React.Component {
        state = { lat: null, err: "" };
        //...
    }
    ```
- querying data should, by convention, be triggered inside `componentDidMount`
- `state` and `props` can easily be confused: a `state` can be used an passed down to a child component as a `prop`
- CSS classes that describe a child and are derived from it's state or props can easily be written with *template string*, e.g. ``<i className= { `${iconName} icon massive icon-left` } ></i>``

# Handling Events

- event handlers must be registered through a component prop, such as `onChange`, e.g.
    ```
    <input 
        type="text"
        name="search"
        placeholder="Search Term"
        value={ this.state.searchTerm }
        onChange={ this.onInputChange }
    />
    ```
- an input element that has a value that refers to the components state is called a "controlled element"
- "wrong" bindings of `this` in handlers can be solved by one of 3 methods:
    1. "re-binding" `this` in the `constructor()` method
    2. defining the `onEventHandler` method using an arrow function, e.g.
        ```
        class Component extends React.Component {
            onSubmitHandler = e => {
                e.preventDefault();
                console.log(this.state); // will properly log state to console
            }

            render() {
                return (
                    <form onSubmit={ onSubmitHandler }>
                        <!-- form content -->
                    </form>
                );
            }
        }
        ```
    3. calling the `onEventHandler` in the `onEvent` prop using an arrow function, e.g.
        ```
        class Component extends React.Component {
            onSubmitHandler(e) {
                e.preventDefault();
                console.log(this.state); // will properly log state to console
            }

            render() {
                return (
                    <form onSubmit={ e => onSubmitHandler(e) }>
                        <!-- form content -->
                    </form>
                );
            }
        }
        ```
    - data can be communicated from a child component to a parent component by passing a callback method from the parent to the child, which then calls that specific callback method when due.

# Rendering Lists

- a list can be rendered by simply returning an array of JSX objects from a method like so:
    ```
    class ImageList extends React.Component {
        imageList() {
            return this.props.imageUrls.map(e => <li><img src={ url } /></li>);
        }

        render() {
            return (
                <div className="ui segment">
                    <div>Found {this.props.imageUrls.length} images</div>
                    <ul>{ this.imageList() }</ul>
                </div>
            );
        }
    }
    ```
- every element of a list needs to have a unique key property. in most cases an element's id is used for that purpose
- the DOM can be accessed by using `refs`
    - in the constructor, create a property on the state object and initialize it with `React.createRef()`
    - in the render method, hook it up to a JSX element by setting it as the `ref`-property
    ```
    class ImageCard extends React.Component {
        constructor() {
            super();
            this.state = { 
                imgRef: React.createRef(), 
                liRef: React.createRef() 
            };
        }

        componentDidMount() {
            console.log(this.state.liRef);
            console.log(this.state.imgRef);
        }

        render() {
            return (
                <li ref={ this.state.liRef }>
                    <img ref={ this.state.imgRef } src={ this.props.url } alt={ this.props.alt } />
                </li>
            );
        }
    }
    ```
- react does not allow to return "unwrapped" multiple html elements (e.g. `return <h1>H1</h1><p>content</p>`) is not valid JSX. to achieve this result without wrapping the content into a separate html element alltogether, a `React.Fragment` can be used (e.g. `return <React.Fragment><h1>H1</h1><p>content</p></React.Fragment>`)

# React Hooks

- hooks can be used with functional components

## `useState`

- the `useState` hook can be used to add the concept of state known from class based components to functional components as well
- state with `useState` can be implemented like so:
    ```
    import React, { useState } from "react";

    const Light = () => {
        const [light, setLight] = useState(false);

        return (
            <div>
                <h1>Light is on: {light}</h1>
                <p onClick={() => setLight(true)}>On</p>
                <p onClick={() => setLight(false)}>Off</p>
            </div>
        );
    };
    ```

## `useEffect`

- `useEffect`: enables lifecycle methods in functional components
- `useEffect` is used like so:
    ```
    import React, { useState, useEffect } from "react";

    const Counter = () => {
        const [counter, setCounter] = useState(false);

        useEffect(() => {
            console.log("counter has changed!");
        }, [counter]);

        return (
            <div>
                <h1>Counter: {counter}</h1>
                <p onClick={() => setCounter(counter + 1)}>+1</p>
            </div>
        );
    };
    ```
- the second parameter can have one of three values:
    - `[]`: run callback at initial render only
    - `undefined`: run callback at initial render and after every rerender
    - `[someValue]`: run callback at initial render and after every rerender if `someValue` has changed
- the callback function in useEffect itself should not be async. best practice is to define an async function inside the callback itself and then call it right away:
    ```
    useEffect(() => {
        const fetchData = async () => {
            // fetch data
        };

        fetchData();
    }, [term]);
    ```
- `useEffect` can return a cleanup function, that will get executed the next time BEFORE `useEffect` runs!
    ```
    let i = 0;
    const MyComponent = () => {
        const [term, setTerm] = useState("");

        useEffect(() => {
            const fetchData = async () => {
                // fetch data
            };

            fetchData();

            i++;
            console.log(i); // 0, 1, 2, ...
            return () => console.log("CLEANUP: " + 1); // 1, 2, 3, ...
        }, [term]);
    //...
    }
    ```
- the cleanup function is a great place to clear a timout function invoked in the previous `useEffect` call...

## `useRef`

- `useRef`: create a `ref` in a functional component

# Styling

- CSS files should not be added to the HTML directly, but rather be imported on a per component level with an `import` statement, e.g. `import "./SeasonDisplay.css";`. this instructs the bundler to inject/wire the CSS accordingly
- SASS/SCSS can also be used by adding the dependencies with `npm install node-sass` and then rename the CSS to SCSS and import it as described above

# Other Learnings

- semantic ui is a nice css library to quickly style components without heavy customization in the first place (https://semantic-ui.com/ and https://cdnjs.com/libraries/semantic-ui)
- faker is a great library for creating example data for prototyping and testing (https://fakerjs.dev/guide/)
- the chrome developer console's "Sensors" tab provides a way to override sensor data for testing and mocking purposes
- HTML entities (like `&quot;` etc.) will not be decoded by JSX per se. Using `dangerouslyInsertHTML` is an option, but not good practice, as it makes an App XSS vulnerable. A better option would be to run those strings to an HTML entity encoder like [he](https://github.com/mathiasbynens/he), for example.