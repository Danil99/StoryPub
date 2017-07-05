import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import _ from './styles/main.sass';
import store from './store';

import { getPosts } from './action';

import App from './App';

store.dispatch(getPosts());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
