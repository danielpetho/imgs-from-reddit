import React from 'react';
import '../styles.css'

const MobileSettings = (props) => {
    const {settings, onToggle} = props;
    const active = settings.openmobilesets === true ? "mobile__settingsbar_active" : "mobile__settingsbar"
    return (
        <div className={active}>
            <ul>
                {/*<li onClick={() => onToggle("pictures", !settings["pictures"])} className={settings['pictures'] ? "on" : "off"}>pictures</li>
                <li onClick={() => onToggle("videos", !settings["videos"])} className={settings['videos'] ? "on" : "off"}>videos</li>
                <li onClick={() => onToggle("autoplay", !settings["autoplay"])} className={settings['autoplay'] ? "on" : "off"}>autoplay</li>*/}
                <li onClick={() => onToggle("gridview", "big")}><i className={settings['gridview'] === "big" ? "settingsbar__icon_on material-icons" : "material-icons"}>check_box_outline_blank</i></li>
                <li onClick={() => onToggle("gridview", "grid")}><i className={settings['gridview'] === "grid" ? "settingsbar__icon_on material-icons" : "material-icons"}>border_all</i></li>
            </ul>
        </div>
    )
}

export default MobileSettings;