import { connect } from "react-redux";
import ListItem from "../components/ListItem";
import { deleteTodoOnServer, changeTodoFlagOnServer } from '../actions/todos';

function mapStateToProps(state, props) {
    return {
        item: state.todos.get("" + props.id)
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onDelete: () => dispatch(deleteTodoOnServer(props.id)),
        onDone: (e) => dispatch(changeTodoFlagOnServer(props.id, undefined, e))
    };
}

const ListItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ListItem);

export default ListItemContainer;