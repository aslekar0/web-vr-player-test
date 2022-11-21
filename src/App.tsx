import React from 'react';
import logo from './logo.svg';

import './App.css';

import { VideoPlayer } from './components/VideoPlayer';

function App() {
  return (
    <div className="App">
      <div className="grid">
        
        <div>
          <h2>Trailer hosted on VRHush</h2>
          <h3>(Only second half is scripted)</h3>
          <VideoPlayer
            className="player"
            coverImage="https://b8h6h9v9.ssl.hwcdn.net/vrh/hugethumbs/vrh0373_minxxmarley_oliverfaze_180-c760x430.jpg"
            siteQualities="1080p,1440p,4K,6K,8K"
            defaultVolume="1"
            defaultZoom="0.5"
            enableScrollToZoom="true"
            defaultProjection="flat"
            hapticsCSV="https://video-player.nyc3.digitaloceanspaces.com/trail-vrh0373_minxxmarley_oliverfaze_180_1k.csv"
          >
            <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_1k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="1080p"></source>
            <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_2k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="1440p"></source>
            <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_4k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="4K"></source>
            <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_6k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="6K"></source>
            <source src="https://e2z4r8q7.ssl.hwcdn.net/vrh/trail-vrh0373_minxxmarley_oliverfaze_180_6k.mp4?ri=2000000&rs=10000&ttl=1649274462&token=a89bc5f2499d784eb7698b169d47834d" data-quality="8K"></source>
          </VideoPlayer>
        </div>

        <div>
          <h2>Jazmin 8K</h2>
          <h3>-</h3>
          <VideoPlayer
            className="player"
            coverImage="https://fuckpassvr.nyc3.cdn.digitaloceanspaces.com/uploads/scene/FPVR0034/thumbnail/thumbnails/JazminLuv-MikeMancini_001.jpg"
            siteQualities="1080p,1440p,4K,6K,8K"
            defaultVolume="1"
            defaultZoom="0.5"
            enableScrollToZoom="true"
            defaultProjection="flat"
            hapticsCSV="https://video-player.nyc3.digitaloceanspaces.com/JazminLuv-MikeMancini-180-POV-FPVR-FULL_8kUHD.csv"
          >
            <source src="https://video-player.nyc3.digitaloceanspaces.com/JazminLuv-MikeMancini-180-POV-FPVR-FULL_4k.mp4" data-quality="4K"></source>
            <source src="https://video-player.nyc3.digitaloceanspaces.com/JazminLuv-MikeMancini-180-POV-FPVR-FULL_8kUHD.mp4" data-quality="8KUHD"></source>
          </VideoPlayer>
        </div>

      </div>
    </div>
  );
}

export default App;
