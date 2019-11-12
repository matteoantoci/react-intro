import React from "react";
import { Button } from './Button'
import renderer from 'react-test-renderer';

describe('Button', () => {
  it('renders correctly', () => {
    const fakeCallback = () => {};

    const tree = renderer
      .create(<Button onClick={fakeCallback}>Fooo</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
