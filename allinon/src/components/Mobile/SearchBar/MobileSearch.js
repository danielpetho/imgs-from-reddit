import React from 'react';
import SearchBarContainer from '../../SearchBar/SearchBarContainer';
import SubredditBarContainer from '../../SubredditBar/SubredditBarContainer';
import '../styles.css'

const MobileSearch = (props) => {
    const {settings, onToggle, handleSubmit } = props;
    const active = settings.openmobilesearch === true ? "mobile__searchbar_active" : "mobile__searchbar"
    return (
        <div className={active}>     
        <div className="mobile__searchbar_input">
            <div>
                <ul className="mobile__fetching-settings">
                    <li onClick={() => onToggle("sortposts", "top")} className={settings['sortposts'] === "top" ? "settingsbar__item_on" : "settingsbar__item_off"}>top</li>
                    <li onClick={() => onToggle("sortposts", "new")} className={settings['sortposts'] === "new" ? "settingsbar__item_on" : "settingsbar__item_off"}>new</li>
                </ul>
            </div>
            <div>
                <SearchBarContainer submit={handleSubmit} settings={settings}/>
            </div>
        </div>
        <div className="mobile__subredditbar">
            <SubredditBarContainer />

        </div>
        </div>
    );
};

export default MobileSearch;