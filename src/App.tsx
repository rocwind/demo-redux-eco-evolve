import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [state, setState] = useState(store.getState().count);
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState().count);
    });
  }, [setState]);

  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>{state}</div>
          <button
            onClick={() => {
              store.dispatch({
                type: "add",
              });
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              store.dispatch({
                type: "subtract",
              });
            }}
          >
            subtract
          </button>
        </header>
      </div>
    </Provider>
  );
}

export default App;
