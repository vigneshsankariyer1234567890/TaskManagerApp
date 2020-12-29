import * as actiontypes from './actionTypes';
import TaskAPI from '../api/taskAPI.JS';
import CategoryAPI from '../api/categoryAPI';

export function loadTasksSuccess(tasks) {
    return {type: actiontypes.LOAD_TASKS_SUCCESS, tasks };
}

export function updateTaskSuccess(task) {
    return {type: actiontypes.UPDATE_TASK_SUCCESS, task };
}

export function createTaskSuccess(task) {
    return {type: actiontypes.CREATE_TASK_SUCCESS, task };
}

export function deleteTaskSuccess(task) {
    return {type: actiontypes.DELETE_TASK_SUCCESS, task };
}

export function loadCategoriesSuccess(categories) {
    return { type: actiontypes.LOAD_CATEGORIES_SUCCESS, categories }
}

export function loadTasks() {
    return function (dispatch) {
        return TaskAPI.getAllTasks().then(tasks => {
            dispatch(loadTasksSuccess(tasks));
        }).catch(error => {throw(error);});
    }
}

export function loadCategories() {
    return function (dispatch) {
        return CategoryAPI.getAllCategories().then(categories => {
            dispatch(loadCategoriesSuccess(categories));
        }).catch(error => {throw(error);});
    }
}

export function updateTask(task) {
    return function (dispatch) {
        return TaskAPI.updateTask(task).then(responseTask => {
            dispatch(updateTaskSuccess(responseTask));
        }).catch(error => {throw(error);});
    }
}