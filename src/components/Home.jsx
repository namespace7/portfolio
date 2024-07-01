// src/components/Home.js

import React from 'react';
import ReactPlayer from 'react-player';

const Home = () => {
  const videoUrl = process.env.REACT_APP_VIDEO_URL;

  const scrollToVideo = () => {
    const videoSection = document.getElementById('video-section');
    videoSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <ReactPlayer
        url={videoUrl}
        playing
        loop
        muted
        width="100%"
        height="100%"
        style={{ position: 'absolute', top: 0, left: 0 }}
      />
      <div className="content">
        <h1>Welcome to My Video App</h1>
        <p>Here is some content about your app.</p>
        <button onClick={scrollToVideo}>Watch Video</button>
      </div>
      <section id="video-section" className="video-section">
        <h2>Video Section</h2>
        <div className="video-container">
        <ReactPlayer url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" />
        </div>
      </section>
    </div>
  );
};

export default Home;
