import { connect } from "react-redux";
import HashtagBar from "../components/layout/HashtagBar";
import {filterPosts} from "../actions/searchbar"

function mapStateToProps(state) {
    return {
        searchtags: state.searchtagState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onDelete: (id, tag) => dispatch(filterPosts(id, tag))
    };
}

const HashtagBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HashtagBar);

export default HashtagBarContainer;