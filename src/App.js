import React, {useReducer} from 'react';
import './App.css';
import {INITIAL_STATE, REDUCER} from "./store/reducer";
import {Widget} from "./components/organisms/Widget";
import {counterButtonClick} from "./store/actions";
import {withLogging} from "./store/store";

const reducer = withLogging(REDUCER);

export const App = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { count } = state;
  const handleIncrement = () => dispatch(counterButtonClick());
  return (
    <div className="App">
      <Widget count={count} handleIncrement={handleIncrement} />
    </div>
  );
};
