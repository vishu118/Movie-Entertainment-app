import axios from "axios";
import React from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  Genres,
  setGenres,
  page,
  setPage,
  type,
}) => {
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?${Api_key}&language=en-US`
    );
    setGenres(data.genres);
  };
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);

  return <div></div>;
};

export default Genres;
