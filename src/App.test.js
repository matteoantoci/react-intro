import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import { App } from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('when counter button is clicked', () => {
    it('renders correctly', () => {
      const { getByTestId } = render(<App/>);
      const button = getByTestId('counter-button');

      fireEvent.click(button);

      expect(button.innerHTML).toBe('User clicked 1 times');
    });
  })
});
