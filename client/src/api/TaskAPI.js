import axios from 'axios';

class TaskAPI {
    static getAllTasks() {
        return axios.get('http://localhost:3000/api/v1/tasks').then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }

    static updateTask(task) {
        return axios.put('http://localhost:3000/api/v1/tasks/${task.id}', {task: {done: task.target.checked}})
            .then(response => {return response.data;}).catch(error => {return error;});
    }


}

export default TaskAPI;


