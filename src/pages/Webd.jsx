import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards';
import { webdText } from '../data/webd';

const Webd = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  const webdPageClass = loading ? 'isLoading' : 'isLoaded';

  return (
    <Main
    title = "Web Design Tutorial Page"
      description="This is Web Design Tutorial Page"
    >
      <section id='webdPage' className={webdPageClass}>
        <h2>Web Design Tutorial</h2>
        <div className="video__inner">
            <VideoCards videos={webdText} />
        </div>
      </section>
    </Main>
  )
}

export default Webd