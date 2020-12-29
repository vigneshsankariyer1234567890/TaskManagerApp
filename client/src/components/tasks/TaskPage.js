import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actioncreators from '../../actions/actionCreators';
import CategoryList from './CategoryList';
import TaskForm from './TaskForm';


class TaskPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isEditing: false,
            task: this.props.task,
            taskCategories: this.props.taskCategories,
            checkBoxCategories: this.props.checkBoxCategories
        };
        this.updateTaskState = this.updateTaskState.bind(this);
        this.updateTaskCategories = this.updateTaskCategories.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
    }

    updateTaskState(event) {
        const field = event.target.name;
        const task  = this.state.task;
        task[field] = event.target.value;
        return this.setState({task:task});
    }

    updateTaskCategories(event) {
        const task = this.state.task;
        const categoryId = event.target.value;
        const category = this.state.checkBoxCategories.filter(category => category.id == categoryId)[0];
        const checked = !category.checked;
        category['checked'] = !category.checked;
        if (checked) {
            task.category_ids.push(category.id);
        } else {
            task.category_ids.splice(task.category_ids.indexOf(category.id));
        }
        this.setState({task: task});
    }

    saveTask(event) {
        event.preventDefault();
        this.props.actions.updateTask(this.state.task);
    }

    toggleEdit() {
        this.setState({isEditing: !this.state.isEditing});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.task.id != nextProps.task.id) {
            this.setState({task: nextProps.task});
        }
        if (this.props.checkBoxCategories.length < nextProps.checkBoxCategories.length) {
            this.setState({taskCategories: nextProps.taskCategories, checkBoxCategories: nextProps.checkBoxCategories});
        }
    }

    render() {
        if(this.state.isEditing){
            return (
                <div>
                    <h1>edit task</h1>
                    <TaskForm
                        task = {this.state.task}
                        categories = {this.state.checkBoxCategories}
                        onSave = {this.state.saveTask}
                        onChange = {this.state.updateTaskState}
                        onCatChange = {this.state.updateTaskCategories} />
                </div>
            )
        }
        return (
            <div className="col-md-8 col-md-offset-2">
                <h1>{this.state.task.title}</h1>
                <p>description: {this.state.task.description}</p>
                <p>duedate: {this.state.task.duedate}</p>
                <CategoryList categories={this.state.taskCategories}/>
                <button onClick={this.toggleEdit} className="btn btn-default"> edit </button>
            </div>
        )

    }
}

TaskPage.propTypes= {
    task: PropTypes.object.isRequired,
    taskCategories: PropTypes.array.isRequired,
    checkBoxCategories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function getTaskCategories( categories, task ) {
    let selectedcategories = categories.map( category => {
        if (task.category_ids.filter(categoryId => categoryId == category.id).length > 0) {
            return category;
        }
    })
    return selectedcategories.filter( element => element != undefined);
}

function categoriesForCheckBoxes(categories, task=null){
    return categories.map(category => {
        if (task && task.category_ids.filter(categoryId => categoryId == category.id).length > 0) {
            category['checked'] = true;
        } else {
            category['checked'] = false;
        }
        return category;
    })
}

function mapStateToProps(state, ownProps) {
    const stateCategories = Object.assign([], state.categories);
    let checkBoxCategories= [];
    let taskCategories=[];
    let task = {title:'', description:'', duedate:'', category_ids: []};
    const taskId = ownProps.params.id;
    if (taskId && state.tasks.length > 0 && state.categories.length > 0) {
        task = getTaskById(state.tasks, ownProps.params.id);
        if (task.category_ids.length > 0) {
            checkBoxCategories = categoriesForCheckBoxes(stateCategories, task);
            taskCategories = getTaskCategories(stateCategories, task);
        } else {
            checkBoxCategories = categoriesForCheckBoxes(stateCategories)
        }
    }
    return {task: task, checkBoxCategories:checkBoxCategories, taskCategories:taskCategories};

    /*let task = {title: '', description: '', duedate: '', category_ids: []};
    const taskId = ownProps.params.id;
    if (state.tasks.length > 0) {
        task = Object.assign({}, state.tasks.find(task => task.id == id))
    }
    return {task:task}*/
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actioncreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskPage);