import { connect } from "react-redux";
import SubredditBar from "./SubredditBar";
import {filterPosts} from "../../actions/searchbar"

function mapStateToProps(state) {
    return {
        subreddits: state.searchtagState.hashtags
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onDelete: (id, tag) => dispatch(filterPosts(id, tag))
    };
}

const SubredditBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SubredditBar);

export default SubredditBarContainer;