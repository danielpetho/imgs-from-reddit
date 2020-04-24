import { connect } from "react-redux";
import SubredditBar from "./SubredditBar";
import {filterPosts} from "../../actions/searchbar"

function mapStateToProps(state) {
    return {
        subreddits: state.searchtagState.subreddits
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onDelete: (id, sub) => dispatch(filterPosts(id, sub))
    };
}

const SubredditBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditBar);

export default SubredditBarContainer;