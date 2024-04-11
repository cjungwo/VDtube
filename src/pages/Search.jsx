import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../components/section/Main';

import VideoSearch from '../components/videos/VideoSearch';
import { fetchFromAPI } from '../utils/api';

// const REACT_APP_YOUTUBE_API_KEY = "AIzaSyCoiev0ghF2PpdXKPePUoOOx7oAT_oCQec";

const Search = () => {
    const { searchId } = useParams();
    const [ videos, setVideos ] = useState([]);
    const [ nextPageToken, setNextPageToken ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    
    useEffect(() => {
        setVideos([]);
        fetchVideos(searchId);
        setLoading(true);
    }, [searchId]);

    const fetchVideos = (query, pageToken = '') => {
        fetchFromAPI(`search?part=snippet&q=${query}&pageToken=${pageToken}`)
        .then((data) => {
            setNextPageToken(data.nextPageToken);
            setVideos((prevVideos) => [...prevVideos, ...data.items]);
            setLoading(false);
        })
        .catch((err) => {
            console.log('ERROR: ', err);
            setLoading(false);
        });
    }

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchVideos(searchId, nextPageToken);
        }
    };

    const searchPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "Search Video"
            description="This is search page.">
            
            <section id='searchPage' className={searchPageClass}>
                <h2>Result: <em>{searchId}</em></h2>
                <div className="video__inner search">
                    <VideoSearch videos={videos} />
                </div>
                <div className="video__more">
                    {nextPageToken && (
                        <button onClick={handleLoadMore}>More</button>
                    )}
                </div>
            </section>
        </Main>
    )
}

export default Search