import React from "react";
import "./SingleContent.css";
import { img_300, unavailable } from "../Config/Config";
import StarIcon from "@mui/icons-material/Star";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  popularity,
}) => {
  return (
    
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {/* {media_type === "tv" ? "Series" : "Movie"} */}
        <span className="likes">
          <ThumbUpIcon sx={{ color: "green" }} />
          {`${Number(popularity / 10).toFixed()}k likes`}
        </span>

        <span className="rating">
          <StarIcon sx={{ color: "#FF8B3D" }} />
          {`${vote_average}/10`}
        </span>
      </span>
    </div>
  );
};

export default SingleContent;
