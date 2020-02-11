import { connect } from "react-redux";
import Hashtag from "../components/layout/Hashtag";

function mapStateToProps(state, props) {
    return {

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
    };
}

const HashtagContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Hashtag);

export default HashtagContainer;