import { fromJS } from 'immutable';
import { ADD_TODO, DEL_TODO, CHANGE_FLAG, UPDATE_TODO, MASS_ADD_TODO } from '../actions/index';

export function reducer(state = fromJS({}), action) {
    if (action.type === ADD_TODO) {
        let newTodo = Object.assign({}, action.newTodo, {
            deleting: false
        });

        return state.set("" + action.newTodo.id, fromJS(newTodo));
    }

    if (action.type === UPDATE_TODO) {
        return state.set("" + action.todo.id, fromJS(action.todo));
    }

    if (action.type === DEL_TODO) {
        return state.delete(action.todoID);
    }

    if (action.type === MASS_ADD_TODO) {
        let newState = state;
        action.todos.forEach(todo => {

            let newTodo = Object.assign({}, todo, {
                deleting: false
            });

            newState = newState.set("" + todo.id, fromJS(newTodo));
        });

        return newState;
    }

    if (action.type === CHANGE_FLAG) {
        let newState = state;

        if (typeof action.deleting !== 'undefined') {
            newState = newState.setIn(["" + action.id, 'deleting'], action.deleting);
        }

        if (typeof action.done !== 'undefined') {
            newState = newState.setIn(["" + action.id, 'done'], action.done);
        }

        return newState;
    }



    return state;
}