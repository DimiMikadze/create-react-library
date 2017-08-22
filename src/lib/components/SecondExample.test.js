import React from 'react';
import ReactDOM from 'react-dom';
import SecondExample from './SecondExample';

it('SecondExample renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SecondExample />, div);
});
