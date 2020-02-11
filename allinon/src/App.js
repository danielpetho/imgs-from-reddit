import React from 'react';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import './App.css';
//import SettingsBar from './components/layout/SettingsBar';
import Photo from './components/images/Photo';
import SettingsBarContainer from './containers/SettingsBarContainer';
import HashtagBarContainer from './containers/HashtagBarContainer';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="sticky-header">
          <Navbar />
          <SettingsBarContainer />
          <HashtagBarContainer />
        </div>
        <Photo />
      </div>
    </HashRouter>
  );
}




export default App;
