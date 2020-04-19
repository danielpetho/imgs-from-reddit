import React from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import SubredditBarContainer from '../SubredditBar/SubredditBarContainer';

const MobileSearch = (props) => {
    const {settings, onToggle, handleSubmit } = props;
    const active = settings.openmobilesearch === true ? "mobile-search-active" : "mobile-search"
    return (
        <div className={active}>     
        <div className="mobile-search-bar">
            <div>
                <ul className="mobile-fetching-settings">
                    <li onClick={() => onToggle("sortposts", "top")} className={settings['sortposts'] === "top" ? "on" : "off"}>top</li>
                    <li onClick={() => onToggle("sortposts", "new")} className={settings['sortposts'] === "new" ? "on" : "off"}>new</li>
                </ul>
            </div>
            <div>
                <SearchBarContainer submit={handleSubmit} settings={settings}/>
            </div>
        </div>
        <div className="mobile-search-hashtagbar">
            <SubredditBarContainer />

        </div>
        </div>
    );
};

export default MobileSearch;