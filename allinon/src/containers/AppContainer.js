import { connect } from "react-redux";
import App from "../App";
function mapStateToProps(state, props) {
    return {
        settings: state.settings
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