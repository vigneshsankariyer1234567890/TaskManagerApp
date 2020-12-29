import React, {PropTypes} from 'react';

const TaskList = ({tasks}) => {
    return (
        <ul className="list-group">
            {tasks.map(task =>
            <li className="list-group-item" key={task.id}>
                {task.title}
            </li> )}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;