import React from "react";
import { Counter } from './Counter'
import renderer from 'react-test-renderer';

describe('<Counter />', () => {
  it('renders correctly', () => {
    const count = 999;
    const fakeCallback = () => {};

    const tree = renderer
      .create(<Counter onClick={fakeCallback} count={count} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
