import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../../actions/actionCreators'
import TaskForm from './TaskForm'

class NewTaskPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: {
                title: '',
                description: '',
                duedate: '',
                category_ids: []
            },
            saving: false
        };
        this.redirect = this.redirect.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.updateTaskCategories = this.updateTaskCategories.bind(this);
        this.updateTaskState = this.updateTaskState.bind(this);
    }

    updateTaskCategories(event) {
        const task = this.state.task;
        const categoryId = event.target.value;
        const category = this.props.checkBoxCategories.filter(category => category.id == categoryId)[0];
        const checked = !category.checked;
        category['checked'] = !category.checked;
        if (checked) {
            task.category_ids.push(category.id);
        } else {
            task.category_ids.splice(task.category_ids.indexOf(category.id));
        }

        this.setState({task:task});
    }

    updateTaskState(event) {
        const field = event.target.name;
        const task = this.state.task;
        task[field] = event.target.value;
        return this.setState({task: task});
    }

    saveTask(event) {
        event.preventDefault();
        this.props.actions.createTask(this.state.task);
    }

    render() {
        return (
            <div>
                <h1>new task</h1>
                <TaskForm
                    task = {this.state.task}
                    categories = {this.state.checkBoxCategories}
                    onSave = {this.saveTask}
                    onChange = {this.updateTaskState}
                    onCategoryChange = {this.updateTaskCategories} />
            </div>
        )
    }
}

function categoriesForCheckBoxes(categories) {
    return categories.map(category => {
        category['checked'] = false;
        return category;
    });
}

NewTaskPage.propTypes = {
    checkBoxCategories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    let checkBoxCategories =[];
    if (state.categories.length > 0) {
        checkBoxCategories = categoriesForCheckBoxes(Object.assign([],state.categories));
    }

    return {
        checkBoxCategories: checkBoxCategories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(NewTaskPage);