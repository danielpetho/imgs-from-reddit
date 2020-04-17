import React from 'react';

const MobileSettings = (props) => {
    const {settings, onToggle} = props;
    const active = settings.openmobilesets === true ? "mobile-settings-active" : "mobile-settings"
    return (
        <div className={active}>
                <ul>
                    {/*<li onClick={() => onToggle("pictures", !settings["pictures"])} className={settings['pictures'] ? "on" : "off"}>pictures</li>
                    <li onClick={() => onToggle("videos", !settings["videos"])} className={settings['videos'] ? "on" : "off"}>videos</li>
                    <li onClick={() => onToggle("autoplay", !settings["autoplay"])} className={settings['autoplay'] ? "on" : "off"}>autoplay</li>*/}
                     <li onClick={() => onToggle("gridview", "big")}><i className={settings['gridview'] === "big" ? "iconon material-icons" : "off material-icons"}>check_box_outline_blank</i></li>
                    <li onClick={() => onToggle("gridview", "grid")}><i className={settings['gridview'] === "grid" ? "iconon material-icons" : "off material-icons"}>border_all</i></li>
                </ul>
            </div>
    )

    
}

export default MobileSettings;