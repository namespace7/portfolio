import React from 'react';
import ReactPlayer from 'react-player';

const Home = () => {
  const videoUrl = process.env.REACT_APP_VIDEO_URL;
  
  return (
    <div className="home">
      {/* 
        TODO: Add a video background to the home page or fallback to a background image.
        - Check if videoUrl is defined.
        - If videoUrl is defined, render <ReactPlayer> with the video as the background.
        - If videoUrl is not defined, implement a fallback background image using CSS.
        - Ensure the background covers the entire screen and maintains responsiveness.
      */}
      {videoUrl ? (
        <ReactPlayer
          url={videoUrl}
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      ) : (
        <div className="fallback-background">
          {/* 
            You can add a CSS class "fallback-background" with background image styles.
            Example CSS:
            .fallback-background {
              background-image: url('/path/to/fallback-image.jpg');
              background-size: cover;
              width: 100%;
              height: 100%;
              position: absolute;
              top: 0;
              left: 0;
            }
          */}
        </div>
      )}
    </div>
  );
};

export default Home;
