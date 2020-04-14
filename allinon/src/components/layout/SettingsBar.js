import React from 'react';
import SearchBarContainer from '../../containers/SearchBarContainer';
import {Link} from 'react-router-dom';

const SettingsBar = (props) => {
    const {settings, onToggle, handleSubmit } = props;
    return (
        <div className="settings-bar">
             <div className="searchview">
                <SearchBarContainer submit={handleSubmit} settings={settings}/>
                <ul>
                <li onClick={() => onToggle("sortposts", "top")} className={settings['sortposts'] === "top" ? "on" : "off"}>top</li>
                    <li onClick={() => onToggle("sortposts", "new")} className={settings['sortposts'] === "new" ? "on" : "off"}>new</li>
                    <Link to="/about"><li>about</li></Link>
                </ul>
            </div >
            <div className="settings">
                <ul>
                    {/*<li onClick={() => onToggle("pictures", !settings["pictures"])} className={settings['pictures'] ? "on" : "off"}>pictures</li>
                    <li onClick={() => onToggle("videos", !settings["videos"])} className={settings['videos'] ? "on" : "off"}>videos</li>
                    <li onClick={() => onToggle("autoplay", !settings["autoplay"])} className={settings['autoplay'] ? "on" : "off"}>autoplay</li>*/}
                     <li onClick={() => onToggle("gridview", "big")}><i className={settings['gridview'] === "big" ? "iconon material-icons" : "off material-icons"}>border_all</i></li>
                    <li onClick={() => onToggle("gridview", "grid")}><i className={settings['gridview'] === "grid" ? "iconon material-icons" : "off material-icons"}>grid_on</i></li>
                </ul>
            </div>
           
        </div >
    );
};

export default SettingsBar;