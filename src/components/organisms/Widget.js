import React from 'react';
import {useStore} from "../../store/store";
import {counterButtonClick} from "../../store/actions";
import {Counter} from "../molecules/Counter";

export const Widget = () => {
  const { state, dispatch } = useStore();
  const { count } = state;
  const handleIncrement = () => dispatch(counterButtonClick());
  return (
    <div className="App-Widget mb16">
      <div className="mb16">Here is my widget!</div>
      <Counter count={count} onClick={handleIncrement} />
      <div>{`I can see widget state too: ${count}`}</div>
    </div>
  );
};
