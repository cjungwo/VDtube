import React, { useEffect, useState } from 'react';
import Main from '../components/section/Main';

import VideoCards from '../components/videos/VideoCards'
import { gsapText } from '../data/gsap'

const Gsap = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const gsapPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "GSAP Tutorial"
            description="This is GSAP Tutorial">
            
            <section id='gsapPage' className={gsapPageClass}>
                <h2>GSAP Parrellal</h2>
                <div className="video__inner">
                    <VideoCards videos={gsapText} />
                </div>
            </section>
        </Main>
    )
}

export default Gsap