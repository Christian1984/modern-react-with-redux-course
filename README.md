This repo is a code-along for https://www.udemy.com/course/react-redux/

# JSX Basics

- babel is used to "translate" JSX so it can be interpreted by basically any web browser. babel provides a nice tool to check on the fly how a given JSX is translated at https://babeljs.io/repl
- quotes vs double-quotes: in JSX-components double quotes should always be used to indicate a string, but for non-JSX-components, single quotes are used (by community convention). but from a technical point of view, it does not matter. i'll use double quotes.
- `class` vs `className`: an html `class` property should be converted to `className` when converted to JSX. this is simply to avoid collisions between the JavaScript `class` keyword and the property inside JSX.
- `for` vs `htmlFor`: for the same reason, the `for` attribute (of labels) is replaced with `htmlFor` to prevent collisions
- js variables or methods can be reference from JSX with curly braces, e.g. `<button>{ getMyVar() }</button>` would show a button with the text returned by `getMyVar()`.

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

# Other Learnings

- semantic ui is a nice css library to quickly style components without heavy customization in the first place (https://semantic-ui.com/ and https://cdnjs.com/libraries/semantic-ui)
- faker is a great library for creating example data for prototyping and testing (https://fakerjs.dev/guide/)