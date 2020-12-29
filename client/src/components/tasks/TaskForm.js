import React, {PropTypes} from 'react';
import TextInput from '../commonstuff/TextInput';
import CheckBox from '../commonstuff/CheckBox';

class TaskForm extends React.Component{
    constructor(props){
        super(props);
        this.makeCheckBoxes = this.makeCheckBoxes.bind(this);
    }

    makeCheckBoxes(){
        return this.props.categories.map(category => {
            return (
                <CheckBox
                    item = {category}
                    handleChange = {this.props.onCategoryChange}
                    key = {category.id}/>
            )
        })
    }

    render() {
        const boxes = this.makeCheckBoxes();
        return (
            <div>
                <form>
                    <TextInput
                        name = "title"
                        label = "title"
                        value = {this.props.task.name}
                        onChange = {this.props.onChange}/>

                    {boxes}

                    <TextInput
                        name = "description"
                        label = "description"
                        value = {this.props.task.description}
                        onChange = {this.props.onChange}/>

                    {boxes}

                    <TextInput
                        name = "duedate"
                        label = "duedate"
                        value = {this.props.task.duedate}
                        onChange = {this.props.onChange}/>

                    {boxes}

                    <input
                        type="submit"
                        disabled={this.props.saving}
                        value = {this.props.saving ? 'Saving...' : 'Save'}
                        className="btn btn-primary"
                        onClick={this.props.onSave}/>
                </form>
            </div>
        )
    }
}

TaskForm.propTypes = {
    task: React.PropTypes.object.isRequired,
    categories: React.PropTypes.array.isRequired,
    onSave: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onCategoryChange: React.PropTypes.func.isRequired
};

export default TaskForm;