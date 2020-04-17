import React from 'react';
import { HashRouter } from 'react-router-dom';
import NavBarContainer from './containers/NavBarContainer';
import './App.css';
import SettingsBarContainer from './containers/SettingsBarContainer';
import HashtagBarContainer from './containers/HashtagBarContainer';
import MediaBarContainer from './containers/MediaBarContainer';
import MobileSearch from './components/layout/MobileSearch';
import MobileSearchContainer from './containers/MobileSearchContainer';
import MobileSettingsContainer from './containers/MobileSettingsContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="sticky-header">
          <NavBarContainer />
          <MobileSearchContainer /> 
          <MobileSettingsContainer />
          <SettingsBarContainer />
          <HashtagBarContainer />
        </div>
        <MediaBarContainer />
      </div>
    </HashRouter>
  );
}




export default App;
