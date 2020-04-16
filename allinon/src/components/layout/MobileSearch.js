import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';
import SearchBarContainer from '../../containers/SearchBarContainer';
import HashtagBarContainer from '../../containers/HashtagBarContainer';

const MobileSearch = (props) => {
    const {settings, onToggle, handleSubmit } = props;
    console.log(settings)
    return (
        <div className="mobile-search">
            <div>
            <ul>
                <li onClick={() => onToggle("sortposts", "top")} className={settings['sortposts'] === "top" ? "on" : "off"}>top</li>
                    <li onClick={() => onToggle("sortposts", "new")} className={settings['sortposts'] === "new" ? "on" : "off"}>new</li>
                </ul>
            </div>
            <div>
            <SearchBarContainer submit={handleSubmit} settings={settings}/>
            </div>
            <div>
            <HashtagBarContainer />
            </div>
        </div>
    );
};

export default MobileSearch;