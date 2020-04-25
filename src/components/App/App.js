import React from 'react';
import { HashRouter } from 'react-router-dom';

import './styles.css';
import NavBarContainer from '../Navbar/NavBarContainer';
import SettingsBarContainer from '../SettingsBar/SettingsBarContainer';
import SubredditBarContainer from '../SubredditBar/SubredditBarContainer';
import MediaBarContainer from '../MediaBar/MediaBarContainer';
import MobileSearchContainer from '../Mobile/SearchBar/MobileSearchContainer';
import MobileSettingsContainer from '../Mobile/SettingsBar/MobileSettingsContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="sticky-header">
          <NavBarContainer />
          <MobileSearchContainer /> 
          <MobileSettingsContainer />
          <SettingsBarContainer />
          <SubredditBarContainer />
        </div>
        <MediaBarContainer />
      </div>
    </HashRouter>
  );
}




export default App;
