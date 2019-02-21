import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Navigator from './views/component/router/navigator';

const App = () => (
  <Provider store={store} >
    <Navigator />
  </Provider>
)

export default App;
