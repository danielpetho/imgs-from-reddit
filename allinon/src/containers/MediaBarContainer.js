import { connect } from "react-redux";
import MediaBar from "../components/layout/MediaBar";

function mapStateToProps(state) {
    return {
        filteredPosts: state.fetchState.items
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
    };
}

const MediaBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MediaBar);

export default MediaBarContainer;