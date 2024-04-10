import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards'
import { youtubeText } from '../data/youtube'

const Youtube = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const youtubePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Youtube Clone Tutorial"
            description="This is Youtube Clone Tutorial.">

            <section id='youtubePage' className={youtubePageClass}>
                <h2>Youtube Clone Tutorial</h2>
                <div className="video__inner">
                    <VideoCards videos={youtubeText} />
                </div>
            </section>
        </Main>
    )
}

export default Youtube