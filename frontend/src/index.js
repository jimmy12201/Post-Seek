import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginComponent from './Components/Login/LoginComponent';
import RegisterComponent from './Components/Register/RegisterComponent';
import ProfileComponent from './Components/ProfileComponent';

import { store, persistor } from './configureStore';


ReactDOM.render(
    <Provider store={ store }>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route exact path="/login" component={LoginComponent} />
                        <Route exact path="/register" component={RegisterComponent} />
                        <Route exact path="/profile" component={ProfileComponent} />
                    </Switch>
                </div>
            </BrowserRouter>
        </PersistGate>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
