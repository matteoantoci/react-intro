import React from 'react';
import {Counter} from "../molecules/Counter";
import PropTypes from "prop-types";

export const Widget = ({ count, handleIncrement, ...props }) =>
  (
    <div className="App-Widget mb16" {...props}>
      <div className="mb16">Here is my widget!</div>
      <Counter count={count} onClick={handleIncrement}/>
      <div>{`I can see widget state too: ${count}`}</div>
    </div>
  );

Widget.propTypes = {
  count: PropTypes.number.isRequired,
  handleIncrement: PropTypes.func.isRequired,
};
