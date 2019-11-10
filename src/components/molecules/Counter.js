import React from 'react';
import {Button} from "../atoms/Button";
import PropTypes from "prop-types";

export const Counter = ({ count, onClick }) =>
  (
    <div>
      <div>This is a counter molecule</div>
      <Button onClick={onClick}>
        {`User clicked ${count} times`}
      </Button>
    </div>
  );

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
