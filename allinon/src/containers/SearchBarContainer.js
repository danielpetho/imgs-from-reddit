import { connect } from "react-redux";
import SearchBar from "../components/layout/SearchBar";
import {addHashtag} from "../actions/search";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onLog: (searchValues) => dispatch(addHashtag(searchValues))
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;