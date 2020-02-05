import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { reduxForm, Field } from 'redux-form/lib/immutable';
import { NewTodoRenderField } from './NewTodoRenderField';


let TodoDetailEditForm = (props) => {
    const { handleSubmit } = props;
    return (<form onSubmit={handleSubmit}>
        <Field type="text" name="value" placeholder="Title" component={NewTodoRenderField} label="Todo Title" />
        <Field type="text" name="priority" placeholder="Priority" component={NewTodoRenderField} style={{ width: 10 }} label="Priority" />
        <button type="submit">Add / Update</button>
    </form>)
}
//            onClick={e => props.onAddTodo("value", "priority")}
let TodoDetailEditFormContainer = reduxForm({
    form: 'addTodoForm'
})(TodoDetailEditForm);

function TodoDetail({ item, onUpdateTodo }) {
    if (!item) {
        return (<Redirect to="/" />)
    }
    return (<div>
        <h1>{item.get('value')}</h1>
        <p>Done: {item.get('done') ? "true" : "false"}</p>
        <p>Priority: {item.get('priority')}</p>
        <TodoDetailEditFormContainer enableReinitizalize={true} keepDirtyOnReinitizalize={true} initialValues={item} onSubmit={onUpdateTodo} />
        <Link to="/">Back</Link>
    </div>)
}

export default TodoDetail;