import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import SingleContent from '../../SingleContent/SingleContent'

const Trending = () => {
  const [content, setContent] = useState([]);
  const auth = "2e302e23979f60ced7d629e4168670c9";
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const img_url = "https://image.tmdb.org/t/p/w500"; 
  const trendingMovieNamesUrl = Base_Url + "discover/movie?" + Api_key + "&sort_by=popularity.desc&page=1&primary_release_year=2023&with_original_language=ml|bn|ta";


  const fetchTrending = async () => {
    const { data } = await axios.get(trendingMovieNamesUrl);
    setContent(data.results)
  };

useEffect(() => {
fetchTrending()
},[])

  return (
    <div className='trending'>
    <h1>hello</h1>
      {
        content && content.map((ele) => <SingleContent key = {ele.id}/>)
      
      }
    </div>
  )
}

export default Trending