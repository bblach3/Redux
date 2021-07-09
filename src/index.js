import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import BaseLayout from './components/layout/BaseLayout';
import Jobs from './components/Jobs';
import reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css';
import  './index.css'
import App from './App';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/jobs" component={Jobs}/>
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);