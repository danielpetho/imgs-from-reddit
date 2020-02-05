import { connect } from "react-redux";
import NewTodo from "../components/NewTodo";
import { addTodoOnServer } from "../actions/todos";

function mapStateToProps(state, props) {
    return {};
}

function mapDispatchToProps(dispatch, props) {
    return {
        onAddTodo: (item) => dispatch(addTodoOnServer(item)),
    };
}

const NewTodoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTodo);

export default NewTodoContainer;