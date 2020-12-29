import React, { PropTypes } from 'react';
import {Link, browserHistory} from 'react-router';
import {connect}from 'react-redux';
import * as taskActions from '../../actions/actionTypes';
import TaskList from './TaskList';

class TasksPage extends React.Component{
    render() {
        const tasks = this.props.tasks;
        return(
            <div className="col-md-12">
                <h1>Tasks
                    <Link to={'/tasks/new'} className="btn btn-primary">
                        + task
                    </Link>
                </h1>
                <div className="col-md-12">
                    <TaskList tasks={tasks} />
                </div>
                <div className="col-md-8" >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

TasksPage.propTypes = {
    tasks: PropTypes.array.isRequired
    children: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TasksPage)