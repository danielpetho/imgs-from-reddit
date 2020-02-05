import { connect } from "react-redux";
import TodoDetail from "../components/TodoDetail";
import { updateTodoOnServer } from "../actions/todos";

function mapStateToProps(state, props) {
    return {
        item: state.todos.get("" + props.match.params.id)
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onUpdateTodo: (item) => dispatch(updateTodoOnServer(item))
    };
}

const TodoDeailContaier = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoDetail);

export default TodoDeailContaier;