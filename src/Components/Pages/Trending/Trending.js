import React, { useEffect } from "react";
import axios from "axios";
import "./Trending.css"
import { useState } from "react";
import SingleContent from "../../SingleContent/SingleContent";
import CustomPagination from "../../Pagination/Pagination";


const Trending = () => {
  const [content, setContent] = useState([]);
  const [page , setPage] = useState(1)
  const auth = "2e302e23979f60ced7d629e4168670c9";
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const img_url = "https://image.tmdb.org/t/p/w500";
  const trendingMovieNamesUrl =
    Base_Url +
    "trending/all/day?" +
    Api_key + `&page=${page}` ;

  const fetchTrending = async () => {
    const { data } = await axios.get(trendingMovieNamesUrl);
    setContent(data.results);
    console.log(data.results)
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
   <>
      <span className="PageTitle">Trending Movies</span>
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
    <CustomPagination  setPage = {setPage}
       
    />
   </>
  );
};

export default Trending;
