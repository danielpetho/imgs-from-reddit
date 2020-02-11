import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import SearchBar from './SearchBar';

const SettingsBar = (props) => {
    const { settings, onToggle } = props;
    return (
        <div className="settings-bar">
            <div className="settings">
                <ul>
                    <li onClick={(e) => onToggle("pictures", !settings["pictures"])} className={settings['pictures'] ? "on" : "off"}>pictures</li>
                    <li onClick={(e) => onToggle("videos", !settings["videos"])} className={settings['videos'] ? "on" : "off"}>videos</li>
                    <li onClick={(e) => onToggle("autoplay", !settings["autoplay"])} className={settings['autoplay'] ? "on" : "off"}>autoplay</li>
                    <li onClick={(e) => onToggle("sortposts", "top")} className={settings['sortposts'] === "top" ? "on" : "off"}>top</li>
                    <li onClick={(e) => onToggle("sortposts", "new")} className={settings['sortposts'] === "new" ? "on" : "off"}>new</li>
                    <li>about</li>
                </ul>
            </div>
            <div className="searchview">
                <SearchBar />
                <ul>
                    <li onClick={(e) => onToggle("gridview", "big")}><i className={settings['gridview'] === "big" ? "iconon material-icons" : "off material-icons"}>border_all</i></li>
                    <li onClick={(e) => onToggle("gridview", "grid")}><i className={settings['gridview'] === "grid" ? "iconon material-icons" : "off material-icons"}>grid_on</i></li>
                </ul>
            </div >
        </div >
    );
};

export default SettingsBar;