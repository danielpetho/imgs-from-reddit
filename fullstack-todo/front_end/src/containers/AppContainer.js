import { connect } from "react-redux";
import App from "../components/App";

function mapStateToProps(state, props) {
    console.log(state.todos);
    return {
        todos: state.todos.keySeq(),
        todosByName: state.todos
            .toList()
            .sortBy(e => parseInt(e.get('priority'), 10))
            .map(e => e.get('id')),
        sum: state.todos.toList()
            .map(e => e.get('priority'))
            .reduce((e, cur) => parseInt(cur, 10) + parseInt(e, 10))
    };
}

function mapDispatchToProps(dispatch, props) {
    return {};
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;