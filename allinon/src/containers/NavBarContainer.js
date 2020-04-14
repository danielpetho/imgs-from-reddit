import { connect } from "react-redux";
import SearchBar from "../components/layout/SearchBar";
import {processQuery} from "../actions/searchbar";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onSearch: (props, searchValues) => {
            dispatch(processQuery(props, searchValues));
        }
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;