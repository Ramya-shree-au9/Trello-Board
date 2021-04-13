import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './components/router'
import Store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <Provider store={Store} >
    <Router/>
  </Provider>,
  document.getElementById('root')
);


