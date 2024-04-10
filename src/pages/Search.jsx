import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../components/section/Main';

import VideoSearch from '../components/videos/VideoSearch';

const REACT_APP_YOUTUBE_API_KEY = "AIzaSyCoiev0ghF2PpdXKPePUoOOx7oAT_oCQec";

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    
    useEffect(() => {
        fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=${searchId}&type=video&key=${REACT_APP_YOUTUBE_API_KEY}`,
        )
        .then(response => response.json())
        .then(result => {
            console.log(result);
            setVideos(result.items);
        })
        .catch(error => console.log(error));
        }, [searchId]);

    return (
        <Main 
            title = "Search Video"
            description="This is search page.">
            
            <section id='searchPage'>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
            </section>
        </Main>
    )
}

export default Search