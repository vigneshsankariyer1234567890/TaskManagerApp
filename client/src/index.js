import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store/store'
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import * from './actions/actionCreators';

const store = configureStore();

store.dispatch(loadTasks());
store.dispatch(loadCategories());


/*
* GENERAL MECHANISM PROPOSED
* 1) First call a dispatch (with the help of thunk) with argument of the action that makes the API request
* 2) Once the loadTasks() action is called on, it makes an API call and then dispatches loadTasksSuccess action
* 3) This action leads to the store, which leads to rootReducer and then to tasks reducer
* 4) Ultimately, tasks reducer handles the given action. It receives the task payload from store and returns a new state
* which has some tasks: the tasks payload
* 5) The store's new state triggers a function which then triggers the rendering on the TasksPage component, since the
* TasksPage is connected to the store
* */

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);
