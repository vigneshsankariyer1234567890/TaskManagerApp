import * as actiontypes from '../actions/actionTypes'
import initialState from './initialState'

export default function taskReducer(state = initialState.tasks, action) {
    switch(action.type) {
        case actiontypes.LOAD_TASKS_SUCCESS:
            return action.tasks
        case actiontypes.UPDATE_TASK_SUCCESS:
            return [
            ...state.filter(task => task.id !== action.task.id),
            Object.assign({}, action.task)
        ]

        default:
            return state
    }
}