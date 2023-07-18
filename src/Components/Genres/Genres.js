import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  Genre,
  setGenre,
  page,
  setPage,
  type,
}) => {
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const GenreURL =   
  Base_Url + 
  `/genre/${type}/list?`+ 
  Api_key + `&language=en-US` ;



  const fetchGenres = async () => {
    const { data } = await axios.get(GenreURL);
    setGenre(data.genres);
    console.log(Genre)
  };
  useEffect(() => {
    fetchGenres()
    // eslint-disable-next-line

  },[]);

  return <div className="genre">
<Chip/>
  
  </div>;
};

export default Genres;
