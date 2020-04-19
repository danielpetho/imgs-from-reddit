import { connect } from "react-redux";
import SettingsBar from "./SettingsBar";
import { toggleSettings } from "../../actions/settings";

function mapStateToProps(state, props) {
    return {
        settings: state.settingsState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onToggle: (type, flag) => dispatch(toggleSettings(type, flag)),

    };
}

const SettingsBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsBar);

export default SettingsBarContainer;