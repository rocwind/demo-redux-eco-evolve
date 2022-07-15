import {
  configureStore,
  createSlice,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";

type CountState = number;

const defaultState: CountState = 0;

const countSlice = createSlice({
  name: "count",
  initialState: defaultState,
  reducers: {
    add: (state, { payload = 1 }: PayloadAction<number | undefined>) => {
      return state + payload;
    },
    subtract: (state, { payload = 1 }: PayloadAction<number | undefined>) => {
      return state - payload;
    },
  },
});

export const { add, subtract } = countSlice.actions;

export const store = configureStore({
  reducer: {
    count: countSlice.reducer,
  },
});

type State = ReturnType<typeof store.getState>;

// selectors
export const countSelector = (state: State) => state.count;
// - memorized selector, optimize for performance
export const squareSelector = createSelector(
  countSelector,
  (count) => count * count
);
