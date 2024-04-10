import React from 'react';
import Main from '../components/section/Main';

import { youtubeText } from '../data/youtube';
import { Link } from 'react-router-dom';

const Youtube = () => {
  return (
    <Main
    title = "Youtube Clone"
      description="This is Youtube Clone"
    >
      <section id='youtube'>
        <h2>😱 지금 이 코딩을 영상으로</h2>
        <div className='video__inner'>
            {youtubeText.map((video, key) => (
                <div className="video" key={key}>
                    <div className="video__thumb play__icon">
                        <Link to={`/video/${video.videoId}`}>
                            <img src={video.img} alt={video.title} />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </Main>
  )
}

export default Youtube