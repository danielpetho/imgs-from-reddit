import { ADD_TODO, DEL_TODO, CHANGE_FLAG, UPDATE_TODO, MASS_ADD_TODO } from './index';
import api from '../api';


function changeTodoFlag(id, deleting = undefined, done = undefined) {
    return {
        type: CHANGE_FLAG,
        id,
        deleting,
        done
    };
}

export function changeTodoFlagOnServer(id, deleting = undefined, done = undefined) {
    return (dispatch) => {

        if (done !== undefined) {
            api('PATCH', '/' + id, { done: done }, (res) => {
                dispatch(changeTodoFlag(id, undefined, res.done === "true" ? true : false));
            });
        }

        if (deleting !== undefined) {
            dispatch(changeTodoFlag(id, deleting, undefined));
        }

    };
}

export function updateTodo(todo) {
    return {
        type: UPDATE_TODO,
        todo
    }
}

export function updateTodoOnServer(todo) {
    return (dispatch) => {
        let updatedTodo = todo.toJS();
        delete updatedTodo.id;
        delete updatedTodo.deleting;

        updatedTodo.colors = updatedTodo.priority <= 2 ? 'red' : 'green';
        api('PATCH', '/' + todo.get('id'), updatedTodo, (res) => {
            res.id = res._id;
            res.done = todo.get('done');
            res.deleting = todo.get('deleting');
            delete res._id;

            dispatch(updateTodo(res));
        });
    };
}

function addTodo(newTodo) {
    return {
        type: ADD_TODO,
        newTodo
    };
}

export function addTodoOnServer(item) {
    return (dispatch) => {
        let color = item.get('priority') <= 2 ? 'red' : 'green';
        let newItem = item.set('colors', color);
        newItem = newItem.set('done', false);
        api('POST', '', newItem.toJS(), (res) => {
            res.id = res._id;
            delete res._id;

            res.done = res.done === "true";

            dispatch(addTodo(res));
        });
    };

}

function deleteTodo(id) {
    return {
        type: DEL_TODO,
        todoID: id
    };
}

export function massAddTodo(todos) {
    return {
        type: MASS_ADD_TODO,
        todos
    };
}


export function deleteTodoOnServer(id) {
    return (dispatch) => {
        dispatch(changeTodoFlagOnServer(id, true, undefined));
        api('DELETE', '/' + id, {}, (res) => {
            dispatch(deleteTodo(id));
        });
    };
}