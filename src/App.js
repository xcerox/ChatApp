import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Router from './views/component/router/router';

const App = () => (
  <Provider store={store} >
    <Router />
  </Provider>
)

export default App;
