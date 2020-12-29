import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/homenavigation/HomePage'
import TasksPage from './components/tasks/TasksPage'
import AboutPage from './components/about/AboutPage'
import NewTaskPage from './components/tasks/NewTaskPage'
import TaskPage from './components/tasks/TaskPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/tasks" component={TasksPage} >
            <Route path="/tasks/new" component={NewTaskPage} />
            <Route path="/tasks/:id" component={TaskPage} />
        </Route>
        <Route path="/about" component={AboutPage} />
    </Route>
)
