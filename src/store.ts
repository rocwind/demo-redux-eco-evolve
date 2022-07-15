import { createStore } from "redux";
import { createActions, handleActions } from "redux-actions";
import { createSelector } from "reselect";

// https://github.com/redux-utilities/flux-standard-action#actions
type Action =
  | {
      type: "ADD";
      payload?: number;
    }
  | {
      type: "SUBTRACT";
      payload?: number;
    };

type State = {
  count: number;
};

// action creators
// redux-actions is not typescript friendly
export const { add, subtract } = createActions<number>("ADD", "SUBTRACT");
// selectors
export const countSelector = (state: State) => state.count;
// - memorized selector, optimize for performance
export const squareSelector = createSelector(
  countSelector,
  (count) => count * count
);

const defaultState: State = { count: 0 };

const reducer = handleActions<State, number>(
  {
    [add as any]: (state, { payload = 1 }) => ({
      count: state.count + payload,
    }),
    [subtract as any]: (state, { payload = 1 }) => ({
      count: state.count - payload,
    }),
  },
  defaultState
);

export const store = createStore(reducer);
