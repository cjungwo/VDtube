import React from 'react';

import Main from '../components/section/Main';
import Developer from '../components/contents/Developer';
import Today from '../components/contents/Today';
import VideoSlider from '../components/videos/VideoSlider';

import { webdText } from '../data/webd';
import { websiteText } from '../data/website';
import { gsapText } from '../data/gsap';
import { portfolioText } from '../data/portfolio';
import { youtubeText } from '../data/youtube';

const Home = () => {
  return (
    <Main
      title = "Learnch Youtube"
      description="This is Learnch Youtube"
    >
      <Today />
      <Developer />
      <VideoSlider 
        videos={webdText} 
        title="Web Design Tutorial" 
        id="webd" 
      />
      <VideoSlider 
        videos={websiteText} 
        title="Website Tutorial" 
        id="website" 
      />
      <VideoSlider 
        videos={gsapText} 
        title="🤓 GSAP Parralla Tutorial" 
        id="gsap" 
      />
      <VideoSlider 
        videos={portfolioText} 
        title="Portfolio Tutorial" 
        id="portfolio" 
      />
      <VideoSlider 
        videos={youtubeText} 
        title="Youtube Clone Tutorial" 
        id="youtube" 
      />
    </Main>
  )
}

export default Home