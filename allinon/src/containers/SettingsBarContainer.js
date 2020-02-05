import { connect } from "react-redux";
import SettingsBar from "../components/layout/SettingsBar";
import { toggleSettings } from "../actions/settings";

function mapStateToProps(state, props) {
    return {
        settings: state.settings
    };
};

function mapDispatchToProps(dispatch, props) {
    console.log(props);
    return {
        onToggle: (type, flag) => dispatch(toggleSettings(type, flag)),

    };
};

const SettingsBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsBar);

export default SettingsBarContainer;