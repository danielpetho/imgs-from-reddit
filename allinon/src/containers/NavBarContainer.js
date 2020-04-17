import { connect } from "react-redux";
import { openMobileSearch, openMobileSettings } from "../actions/settings";
import Navbar from "../components/layout/Navbar";

function mapStateToProps(state, props) {
    return {
        menus: state.settingsState
    };
}

function mapDispatchToProps(dispatch, props) {
    return {
        openMobileSearch: () => dispatch(openMobileSearch()),
        openMobileSettings: () => dispatch(openMobileSettings())
    };
}

const NavBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);

export default NavBarContainer;