import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './history';
import reducers from './reducers';

import Login from './Components/Login/LoginComponent';
import RegisterComponent from './Components/Register/RegisterComponent';
import ProfileComponent from './Components/ProfileComponent';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={ createStoreWithMiddleware(reducers) }>
        <Router history={ history }>
        <div>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={RegisterComponent} />
                <Route exact path="/profile" component={ProfileComponent} />
            </Switch>
        </div>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
