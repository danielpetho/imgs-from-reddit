import { connect } from "react-redux";
import HashtagBar from "../components/layout/HashtagBar";
import {deleteHashtag} from "../actions/searchbar"

function mapStateToProps(state) {
    return {
        searchtags: state.searchtagState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onDelete: (e) => dispatch(deleteHashtag(e))
    };
}

const HashtagBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HashtagBar);

export default HashtagBarContainer;