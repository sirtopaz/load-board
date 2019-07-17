import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { getStore } from '../../store';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={getStore()}>
      <App onUpdateCheck={() => {}} updatedAt={Date.now()} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
