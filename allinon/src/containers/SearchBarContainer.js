import { connect } from "react-redux";
import SearchBar from "../components/layout/SearchBar";
import {addHashtag} from "../actions/search";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onSubmit: (e) => dispatch(addHashtag(e))
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;