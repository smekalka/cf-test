import React from 'react';
import Helmet from 'react-helmet';
import './App.css';

function App() {
  const videoId = '6ce79922d16a4b8a00628a450b9e0c1a';

  return (
    <>
      <Helmet>
        <script data-cfasync="false" defer type="text/javascript" src={ `https://embed.cloudflarestream.com/embed/r4xu.fla9.latest.js?video=${videoId}`} />
      </Helmet>
      <div dangerouslySetInnerHTML={{ __html: `
        <stream
          class="stream"
          height="${window.innerHeight}"
          width="${window.innerWidth}"
          src="${videoId}"
          loop
          muted
          preload
          autoplay
        ></stream>
      ` }}
      />
    </>
  );
}

export default App;
