import React, { useEffect } from 'react'
import { useState } from 'react';
import SingleContent from '../../SingleContent/SingleContent';
import axios from 'axios';
import CustomPagination, { Pagination } from '../../Pagination/Pagination';
import useGenre from '../../../Hooks/useGenre';
import Genres from '../../Genres/Genres';
const Tv = () => {
  
  const [content ,setContent] = useState([])
  const [page , setPage] = useState(1)
  const [TotalPages, setTotalPages] = useState();
  const [Genre, setGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState([]);
  const genreforURL = useGenre(selectedGenre)

  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const TvURL =   
  Base_Url +
  "discover/tv?" +
  Api_key + `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}` ;

  const fetchSeries = async ()=>{
    const {data} = await axios.get(TvURL)
    setContent(data.results)
    setTotalPages(data.total_pages);
   
  }

  useEffect(()=>{
    fetchSeries()
  },[genreforURL, page])
  return (
    <>
    <span className="PageTitle"> TV Series</span>

   <Genres
        type = "tv"
        selectedGenre = {selectedGenre}
        setSelectedGenre = {setSelectedGenre}
        Genre = {Genre}
        setGenre = {setGenre}
        page = {page}
        setPage={setPage}

      />
   <div className='trending'>

   
     {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type="tv"
              vote_average={c.vote_average}
              popularity={c.popularity}
            />
          ))}
   <CustomPagination setPage={setPage} TotalPages={500}/>
   </div>

    </>
  )
}

export default Tv