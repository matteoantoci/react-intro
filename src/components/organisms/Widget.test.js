import React from "react";
import { Widget } from './Widget'
import renderer from 'react-test-renderer';

describe('Widget', () => {
  it('renders correctly', () => {
    const count = 999;
    const fakeCallback = () => {};

    const tree = renderer
      .create(<Widget handleIncrement={fakeCallback} count={count} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
