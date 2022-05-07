import React from 'react';
import logo from './logo.svg';
import './App.css';
import { VideoPlayer } from './components/VideoPlayer';
// import "./3rd_party/bundle.js";

/* declare global {
  namespace JSX {
    interface IntrinsicElements {
      "web-vr-video-player": any;
    }
  }
}
<web-vr-video-player /> */

function App() {
  return (
    <div className="App">
      <VideoPlayer />
    </div>
  );
}

export default App;
