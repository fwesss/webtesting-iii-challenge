import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';
// Store
import store from './store';

import './index.css';

const render = () => {
  const Dashboard = require('./dashboard/Dashboard').default;

  ReactDOM.render(
    <Provider store={store}>
      <Dashboard />
    </Provider>,
    document.getElementById('root')
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./dashboard/Dashboard', render);
}
