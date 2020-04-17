import { connect } from "react-redux";
import { toggleSettings} from "../actions/settings";
import MobileSettings from "../components/layout/MobileSettings";

function mapStateToProps(state) {
    return {
        searchtags: state.searchtagState,
        settings: state.settingsState

    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        onToggle: (type, flag) => dispatch(toggleSettings(type, flag)),    
    };
}

const MobileSettingsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MobileSettings);

export default MobileSettingsContainer;