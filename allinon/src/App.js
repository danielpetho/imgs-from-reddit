import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
import SettingsBarContainer from './containers/SettingsBarContainer';
import HashtagBarContainer from './containers/HashtagBarContainer';
import MediaBarContainer from './containers/MediaBarContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="sticky-header">
          <Navbar /> 
          <SettingsBarContainer />
          <HashtagBarContainer />
        </div>
        <MediaBarContainer />
      </div>
    </HashRouter>
  );
}




export default App;
