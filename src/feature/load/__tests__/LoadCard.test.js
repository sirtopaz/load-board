import React from 'react';
import ReactDOM from 'react-dom';

import LoadCard from '../LoadCard';

it('renders without crashing', () => {
  const item = {
    origin: 'from',
    destination: 'to',
    date: '2019-01-01',
    value: 1000,
    equipment: 'V',
    locked: true,
    status: 'booked'
  };

  const div = document.createElement('div');
  ReactDOM.render(<LoadCard id="test" item={item} onChange={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
