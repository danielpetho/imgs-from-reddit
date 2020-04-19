import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import {processQuery} from "../../actions/searchbar";

function mapStateToProps(state, props) {
    return {
        fetchBy: state.settingsState.sortposts
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onSearch: (searchValues) => {
            dispatch(processQuery(searchValues));
        }
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;