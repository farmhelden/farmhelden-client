import moment from 'moment';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';

import './index.css';

import history from './lib/history';
import {initStore} from './lib/store';
import AppRoutes from './routes';
import * as serviceWorker from './serviceWorker';

const store = initStore();


const render = Component => {
  moment.locale('de');
  return ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Component/>
      </Router>
    </Provider>,
    document.getElementById('root')
  );
};

render(AppRoutes);

if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextApp = require('./routes').default;
    render(NextApp);
  });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();