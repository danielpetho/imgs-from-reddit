import { connect } from "react-redux";
import SearchBar from "../components/layout/SearchBar";
import { justLog } from "../actions/search";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onLog: (e) => dispatch(justLog(e))
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;