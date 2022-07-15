import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, useSelector } from "react-redux";
import { add, countSelector, store, subtract } from "./store";

function App() {
  const state = useSelector(countSelector);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{state}</div>
        <button
          onClick={() => {
            store.dispatch(add());
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            store.dispatch(subtract());
          }}
        >
          subtract
        </button>
      </header>
    </div>
  );
}

function AppWithStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default AppWithStore;
