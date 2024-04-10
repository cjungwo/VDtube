import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards'
import { websiteText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Website Tutorial"
            description="This is Website Tutorial.">
            
            <section id='websitePage' className={websitePageClass}>
                <h2>Website Tutorial</h2>
                <div className="video__inner">
                    <VideoCards videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website