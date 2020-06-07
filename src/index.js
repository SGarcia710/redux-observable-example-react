import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HomeScreen from './screens/home';
import configureStore from './redux';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HomeScreen />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
