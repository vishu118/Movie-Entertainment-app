import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenre,
  setSelectedGenre,
  Genre,
  setGenre,
  page,
  setPage,
  type,
}) => {
  const Api_key = "api_key=2e302e23979f60ced7d629e4168670c9";
  const Base_Url = "https://api.themoviedb.org/3/";
  const GenreURL =
    Base_Url + `/genre/${type}/list?` + Api_key + `&language=en-US`;

const handleAdd = (genre) => {
setSelectedGenre([...selectedGenre, genre])
setGenre(Genre.filter((ele) => ele.id !== Genre.id))
}

const handleRemove = (genre) => {
  setSelectedGenre(
    selectedGenre.filter((selected) => selected.id !== genre.id)
  );
  setGenre([...Genre, genre]);
  setPage(1);
};
  
  const fetchGenres = async () => {
    const { data } = await axios.get(GenreURL);
    setGenre(data.genres);
    // console.log(Genre);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenre.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {Genre.map((genre) => (
        <Chip
          style={{ margin: 2,backgroundColor: "white" }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;
