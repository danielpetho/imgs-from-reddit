import { connect } from "react-redux";
import HashtagBar from "../components/layout/HashtagBar";

function mapStateToProps(state) {
    return {
        search: state.searchtags
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
    };
}

const HashtagBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HashtagBar);

export default HashtagBarContainer;