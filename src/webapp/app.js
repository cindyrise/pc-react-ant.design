import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
//import createHistory from 'history/createBrowserHistory'
//import createHistory from 'history/createBrowserHistory'

import configStore from './configStore';
import Routers from './routers';

const store = configStore();
const history =syncHistoryWithStore(hashHistory, store);
//const history = createHistory()

render(
    <Provider store={ store }>
      <Router routes={ Routers } history={ history } />
    </Provider>,
    document.getElementById('j-webapp')
);
