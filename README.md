This repo is a code-along for https://www.udemy.com/course/react-redux/

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
- Default props can be specified by configuring
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

## Styling

- CSS files should not be added to the HTML directly, but rather be imported on a per component level with an `import` statement, e.g. `import "./SeasonDisplay.css";`. this instructs the bundler to inject/wire the CSS accordingly
- SASS/SCSS can also be used by adding the dependencies with `npm install node-sass` and then rename the CSS to SCSS and import it as described above

# Other Learnings

- semantic ui is a nice css library to quickly style components without heavy customization in the first place (https://semantic-ui.com/ and https://cdnjs.com/libraries/semantic-ui)
- faker is a great library for creating example data for prototyping and testing (https://fakerjs.dev/guide/)
- the chrome developer console's "Sensors" tab provides a way to override sensor data for testing and mocking purposes