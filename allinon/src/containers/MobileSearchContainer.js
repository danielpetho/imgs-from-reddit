import { connect } from "react-redux";
import MobileSearch from "../components/layout/MobileSearch";
import { toggleSettings } from "../actions/settings";
import { filterPosts } from "../actions/searchbar";

function mapStateToProps(state) {
    return {
        searchtags: state.searchtagState,
        settings: state.settingsState

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onToggle: (type, flag) => dispatch(toggleSettings(type, flag)),
        onDelete: (id, tag) => dispatch(filterPosts(id, tag))


    };
}

const MobileSearchContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileSearch);

export default MobileSearchContainer;