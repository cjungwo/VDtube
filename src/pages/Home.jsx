import React from 'react';

import Main from '../components/section/Main';
import Developer from '../components/contents/Developer';
import Today from '../components/contents/Today';
import Webd from '../components/contents/Webd';
import Website from '../components/contents/Website';
import Gsap from '../components/contents/Gsap';
import Portfolio from '../components/contents/Portfolio';
import Youtube from '../components/contents/Youtube';

const Home = () => {
  return (
    <Main
      title = "Learnch Youtube"
      description="This is Learnch Youtube"
    >
      <Today />
      <Developer />
      <Webd />
      <Website />
      <Gsap />
      <Portfolio />
      <Youtube />
    </Main>
  )
}

export default Home