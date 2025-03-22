import './Content.css'
import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import RowData from '../../Constants/Urls'
import Row from '../Row/Row' 

function Content() {

    const [Movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated', {
            params: {
                api_key: '4fa0eaa5d979e26499dbced739ee43f1',
            },
        });
        setMovies(response.data.results);
    };
    
    useEffect( () => {
        getMovies();
    }, [] );

    console.log(Movies)

    return (
        <div className='Content_wrapper'>
      {RowData.map((item, index) => {
        return <Row key={index} title={item.title} url={item.url} />;
      })}
    </div>
    );
}

export default Content


// axios: a tool which is used to fetch the data from the database
// 4fa0eaa5d979e26499dbced739ee43f1   is my api for tmdb- movie database
