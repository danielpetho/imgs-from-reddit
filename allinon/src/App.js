import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import SettingsBarContainer from './containers/SettingsBarContainer';
import HashtagBarContainer from './containers/HashtagBarContainer';
import MediaBarContainer from './containers/MediaBarContainer';
import MobileSearch from './components/layout/MobileSearch';
import MobileSearchContainer from './containers/MobileSearchContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="sticky-header">
          <Navbar />
          <MobileSearchContainer /> 
          <SettingsBarContainer />
          <HashtagBarContainer />
        </div>
        <MediaBarContainer />
      </div>
    </HashRouter>
  );
}




export default App;
