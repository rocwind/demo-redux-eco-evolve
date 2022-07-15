import { createStore, Reducer } from "redux";

// https://github.com/redux-utilities/flux-standard-action#actions
type Action =
  | {
      type: "add";
      payload?: number;
    }
  | {
      type: "subtract";
      payload?: number;
    };

type State = {
  count: number;
};

const reducer: Reducer<State, Action> = (
  state = { count: 0 },
  { type, payload = 1 }
) => {
  switch (type) {
    case "add":
      return {
        count: state.count + payload,
      };
    case "subtract":
      return {
        count: state.count - payload,
      };
    default:
      return state;
  }
};

export const store = createStore(reducer);
