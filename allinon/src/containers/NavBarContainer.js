import { connect } from "react-redux";
import SearchBar from "../components/layout/SearchBar";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        
    };
}

const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchBar);

export default SearchBarContainer;