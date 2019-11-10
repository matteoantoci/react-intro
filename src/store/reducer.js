import {COUNTER_BUTTON_CLICKED} from "./actions";
import {createReducer} from "./store";

export const INITIAL_STATE = {
  count: 0,
};

export const reducers = {
  [COUNTER_BUTTON_CLICKED]: (state, action) => ({
    ...state,
    count: state.count + 1,
  }),
};

export const REDUCER = createReducer(reducers);
