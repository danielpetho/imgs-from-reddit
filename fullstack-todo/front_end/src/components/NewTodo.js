import React from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form/immutable';
import { NewTodoRenderField } from './NewTodoRenderField';

let NewTodoForm = (props) => {
    const { handleSubmit } = props
    return <form onSubmit={handleSubmit}>
        <Field type="text" name="value" placeholder="Title" component={NewTodoRenderField} label="Todo Title" />
        <Field type="text" name="priority" placeholder="Priority" component={NewTodoRenderField} style={{ width: 10 }} label="Priority" />
        <button type="submit">Add</button>
    </form>
}
//            onClick={e => props.onAddTodo("value", "priority")}
let NewTodoFormContainer = reduxForm({
    form: 'addTodoForm'
})(NewTodoForm);


function NewTodo({ onAddTodo }) {
    return (<form>
        <NewTodoFormContainer onSubmit={onAddTodo}></NewTodoFormContainer>
        <Link to="/">Back</Link>
    </form>
    )
}

export default NewTodo;