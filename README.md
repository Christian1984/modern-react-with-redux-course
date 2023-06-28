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

/\ /\ /\ legacy course
= = = = = = = = = = = =
\/ \/ \/ new course

- Project 6 Covers Section (6) - (9)

  - Handling Forms
  - APIs
  - Context System
  - React Hooks

- Project 7 Covers Sections (10) - ...

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

- aren't really state of the art anymore, as _Function Components_ got a lot more powerful with the most recent versions of React, but may be used in a lot of legacy code
- it's also much easier
- must extend `React.Component`
- must implement a `render()` method that returns the actual JSX
- rendering a component and returning different JSX based on state is called _conditional redenring_
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
- CSS classes that describe a child and are derived from it's state or props can easily be written with _template string_, e.g. `` <i className= { `${iconName} icon massive icon-left` } ></i> ``

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

- use the functional version of state updates whenever a new state depends on the old state!

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

- if the callback function refers to a variable that is not in the list of dependencies, a "stale variable reference" may occur. This means that the callback function in useEffect references a variable at a location in memory that is no longer being referenced by the component itself, as a complete new "set" of variables is created upon every rerender, e.g.:

  ```
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => console.log(counter), 500);
  }, []);

  return <button onClick={() => setCounter(prev => prev + 1)}>+</button>;
  ```

  In this example, counter will always log 0, as the callback function will always reference the counter created upon the initial render, not the memory location that holds the actual counter value (see Video #144 for further details).

  The same happens when a function is passed to useEffect. `useCallback` can be used to mitigate this behaviour.

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

## `ReactDOM.createPortal`

- `ReactDOM.createPortal(/* jsx element */, /* target */)` can be used to render content into a specific target, e.g.

```
const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null;

  const target = document.querySelector("#modal-container");
  if (!target) return null;

  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white">
        <h1>Modal</h1>
        <div>{children}</div>
      </div>
    </div>,
    target
  );
};
```

- make sure to check that `target !== null`, otherwise the app may break!

# Styling

- CSS files should not be added to the HTML directly, but rather be imported on a per component level with an `import` statement, e.g. `import "./SeasonDisplay.css";`. this instructs the bundler to inject/wire the CSS accordingly
- SASS/SCSS can also be used by adding the dependencies with `npm install node-sass` and then rename the CSS to SCSS and import it as described above

# Context

- with context, data can be shared across the entire app.
- steps:
  1. create a context with `const MyContext = createContext()`
  2. wrap the entire app inside a Context-Provider with `<MyContext.Provider><App /></MyContext.Provider>`
  3. consume context inside components with `const data = useContext(MyContext)`

# Redux

- Redux is global state management library.
- Redux Toolkit simplifies interacting with the redux store.
- react-redux bundles redux bindings for react.

First, use `createSlice` to create slices for data "classes" in your application, such as Videos and Songs in out example.

Then, init the actual store with `configureStore` and hand over the reducers defined when creating the slices.

Finally, an action can be dispatched `store.dispatch(songsSlice.actions.addSong("lalala"))` for example. This is called an `ActionCreator` and simplifies the process of dispatching an action object and makes it pretty typesafe with typescript.

Explicitely typing the action parameter of a slice's reducer function with `PayloadAction<string>`, for example, automatically types the payload properly and avoids `any` typing!

Initialize a new project like so:

1. Create the store as described above and export it. Also export the state's type with `export type RootState = ReturnType<typeof store.getState>;`
2. Import the store in the main index.ts or main.tsx file, the one that initializes the react app.
3. Import the Provider component from react-redux.
4. Wrap the App inside the Provider and pass it the imported store as its store property.

To update the store from a component,

1. Add a reducer to the slice that you want to update. The reducer can either modify the state in place as immer is used under the hood, or return a new object.
2. Export the action creator created by the slice
3. Import the action createor and `useDispatch` from react-redux into the component you want to use it from
4. Call the useDispatch hook to get access to the dispatch function
5. When the user interacts with the app, call the action creator to get the action and dispatch it.

> redux toolkit uses Immer under the hood. Therefore, we can mutate the state inplace OR return a new state object from a reducer.

To access state,

1. Import the `useSelector` hook from react-redux
2. Create a selector and pass it into the hook. It is a function that takes the store's root state as an argument. Make sure to type it with the `RootType` exported from the store.
3. Return the slice you are interested in.

To modify multiple slices upon a single user interaction, one could

1. ... either dispatch individual actions, one for each slice. This, however, isn't the "redux way" of doing it.
2. ... or create a separate action width `createAction("app/reset")`, for example and then make each slice listen for that action by adding `extraReducers`.

## Lazy Loading

Requests should never be made from inside reducers, hence Redux Toolkit comes with two possible means of fetching data:

### Async Think Functions: This method is somewhat outdated.

1. Create new file for the thunk named after the purpose of the thunk, e.g. `fetchUsers.ts`
2. Create the thunk with `createAsyncThunk` and give it a base "action type", i.e. string identificator, such as e.g. `const fetchUsers = createAsyncThunk("users/fetch", ...)`
3. From inside the thunk, make the request and return the data that you want to use inside the reducer. That is, create an async function that actually makes the request to the server and pass it as the second argument to `createAsyncThunk`.
4. In the slice, add `extraReducers`, watching for the action types dispatched by the thunk. The actions are provided through the previously exported thunk and are `fetchUsers.pending`, `fetchUsers.rejected` or `fetchUsers.fulfilled`. The respective data is contained in the `action.payload` property.
5. Export the thunk from the `store/index.ts` file
6. When the user does something, dispatch the thunk function to run it!

### Redux Toolkit Query: This is the state of the art method!

With RTK Query you create an API for each "slice".

1. Identify a group of related requests that your app needs to make.
2. Make a new file that will create the API, e.g. `src/store/api/albumsApi.ts`
3. The API needs to store a ton of state related data, requests, status, errors. Add a `reducerPath` which is simply a name that redux uses to address this reducer, e.g. `reducerPath: "albums"`
4. The API needs to know how and where to send requests. Add a `baseQuery`, e.g. `baseQuery: "http://localhost:3005`
5. Add "endpoints", one for each kind of request you want to make. Requests that *read* data are **queries**, requests that *modify* data are **mutations**.
6. Export all of the automatically created hooks, e.g. `export const { useFetchAlbumsQuery, useAddAlbumMutation } = albumsApi;`
7. Connect the API to the store. Reducer, middleware and listeners:

   ```
   const store = configureStore({
     reducer: {
       // ...
       [albumsApi.reducerPath]: albumsApi.reducer, // this helps to avoid typos and inconsistencies
     },
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(albumsApi.middleware),
   });

   setupListeners(store.dispatch);

   //...

   export { useFetchAlbumsQuery, useAddAlbumMutation } from "./apis/albumsApi";
   ```

8. Re-export the hooks from the `store/index.ts` file
9. Use the generated hooks in a component, e.g.:

```
const AlbumsList = ({ user }: AlbumsListProps) => {
  const { data: albumData, error: fetchAlbumsError, isLoading: isLoadingAlbums, isFetching: isFetchingAlbums } = useFetchAlbumsQuery(user.id);
  const [addAlbum, addAlbumMutationResults] = useAddAlbumMutation();

  //...
}
```

RTK query has a tag system that allows mutations to invalidate previously run fetch requests and thus refetch data. Here's an example:

```
const albumsApi = createApi({
  //...
  tagTypes: ["albums"],
  endpoints: (builder) => ({
    fetchAlbums: builder.query<Album[], string>({
      providesTags: (result, error, userId) => [{type: "albums", id: userId}],
      query: (userId) => ({
        //...
      }),
    }),
    addAlbum: builder.mutation<Album, string>({
      invalidatesTags: (result, error, userId) => [{type: "albums", id: userId}],
      query: (userId) => ({
        //...
      })
    })
  }),
});
```

> Typically you would decide for one of the two options for the scope of one project. In the example project, we'll use both for demo purposes.

# Other Learnings

- semantic ui is a nice css library to quickly style components without heavy customization in the first place (https://semantic-ui.com/ and https://cdnjs.com/libraries/semantic-ui)
- faker is a great library for creating example data for prototyping and testing (https://fakerjs.dev/guide/)
- the chrome developer console's "Sensors" tab provides a way to override sensor data for testing and mocking purposes
- HTML entities (like `&quot;` etc.) will not be decoded by JSX per se. Using `dangerouslyInsertHTML` is an option, but not good practice, as it makes an App XSS vulnerable. A better option would be to run those strings to an HTML entity encoder like [he](https://github.com/mathiasbynens/he), for example.
- json-server is a great package to quickly spin up a development rest server that uses a simple json-file as its "database".
- use concurrently to spin up frontend and backend with one command
- the vscode extension REST client can consume http-files and send requests directly from here.
- the `classnames` npm library allows for conditionally joining classnames. nice!
- use `React.ComponentPropsWithoutRef<"button">` (for example) to inherit the properties of a native component (see project 7, Button.tsx for an example); alternatively `React.ButtonHTMLAttributes<HTMLButtonElement>` could be used.
- when writing deconstructuring assignments, order matters:

```
const obj = {a: "a", b: "b"}
const first = {...obj, a: "modified a"}
const last = {a: "modified a", ...obj}

console.log("first", first) // GOOD: "first", { a: "modified a", b: "b" }
console.log("last", last) // BAD: "last", { a: "a", b: "b" }
```

# Helpful Libraries

- classnames
- react-icons
- immer
- json-server
