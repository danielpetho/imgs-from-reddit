import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import './styles.css'

const SettingsBar = (props) => {
    const {settings, onToggle, handleSubmit } = props;
    return (
        <div className="settingsbar">
             <div className="settingsbar__search-section">
                <SearchBarContainer submit={handleSubmit} settings={settings}/>
                <ul>
                    <li onClick={() => onToggle("sortposts", "top")}><span className={settings['sortposts'] === "top" ? "settingsbar__item_on" : "settingsbar__item_off"}>top </span></li>
                    <li onClick={() => onToggle("sortposts", "new")}><span className={settings['sortposts'] === "new" ? "settingsbar__item_on" : "settingsbar__item_off"}>new</span></li>
                </ul>
            </div >
            <div className="settingsbar__settings-section">
                <ul>
                    {/*<li onClick={() => onToggle("pictures", !settings["pictures"])} className={settings['pictures'] ? "settingsbar__item__on" : "settingsbar__item__off"}>pictures</li>
                    <li onClick={() => onToggle("videos", !settings["videos"])} className={settings['videos'] ? "settingsbar__item__on" : "settingsbar__item__off"}>videos</li>
                    <li onClick={() => onToggle("autoplay", !settings["autoplay"])} className={settings['autoplay'] ? "settingsbar__item__on" : "settingsbar__item__off"}>autoplay</li>*/}
                     <li onClick={() => onToggle("gridview", "big")}><i className={settings['gridview'] === "big" ? "settingsbar__icon_on material-icons" : "settingsbar__icon_off material-icons"}>border_all</i></li>
                    <li onClick={() => onToggle("gridview", "grid")}><i className={settings['gridview'] === "grid" ? "settingsbar__icon_on material-icons" : "settingsbar__icon_off material-icons"}>grid_on</i></li>
                </ul>
            </div>  
        </div >
    );
};

export default SettingsBar;