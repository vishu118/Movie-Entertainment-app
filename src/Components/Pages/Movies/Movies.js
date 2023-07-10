import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SingleContent from '../../SingleContent/SingleContent';
import CustomPagination from '../../Pagination/Pagination';

const Movies = () => {
  const [content ,setContent] = useState([])
  const [page , setPage] = useState(1)
  const [TotalPages, setTotalPages] = useState();
 
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const movieURL =   
  Base_Url +
  "discover/movie?" +
  Api_key + `&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${page}` ;

  const fetchMovies = async ()=>{
    const {data} = await axios.get(movieURL)
    setContent(data.results)
    setTotalPages(data.total_pages);
    console.log(TotalPages)
  }

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  },[page]);


  return (
     <>
      <span className="PageTitle"> Discover Movies</span>
     <div className="trending">
      {content &&
        content.map((ele) => (
          <SingleContent
            key={ele.id}
            id={ele.id}
            poster={ele.poster_path}
            title={ele.title || ele.name}
            date={ele.first_air_date || ele.release_date}
            media_type={ele.media_type}
            vote_average={ele.vote_average}
          />
        ))}
    </div>
    { (
        <CustomPagination setPage={setPage} TotalPages={TotalPages} />
      )}
     </>
  )
}

export default Movies