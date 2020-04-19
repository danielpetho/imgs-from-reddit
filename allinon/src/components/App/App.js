import React from 'react';
import { HashRouter } from 'react-router-dom';

import './App.css';
import NavBarContainer from '../Navbar/NavBarContainer';
import SettingsBarContainer from '../SettingsBar/SettingsBarContainer';
import SubredditBarContainer from '../SubredditBar/SubredditBarContainer';
import MediaBarContainer from '../MediaBar/MediaBarContainer';
import MobileSearchContainer from '../Mobile/MobileSearchContainer';
import MobileSettingsContainer from '../Mobile/MobileSettingsContainer';

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
