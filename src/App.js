// symbol polyfills
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');

// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');

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
