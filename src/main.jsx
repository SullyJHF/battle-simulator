import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './app.scss';
import { Game } from './Game/Game';
import './reset.css';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root'),
);
