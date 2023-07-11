import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
 
 

  return (
    <Box>
      <BottomNavigation
       color='primary'
        sx={{
          width: "100%",
          backgroundColor: "#39445a",
          boxShadow: "  rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
          position: "fixed",
          bottom: 0,
          zIndex: 100,
          color:"primary"
        }}
        showLabels ={true}
        value={value}
        onChange={(event, value) => {
          setValue(value);
        }}
      >
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Trending"
          icon={<WhatshotIcon />}
          value={value}
          onClick = {()=>navigate("/")}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Movies"
          icon={<LocalMoviesIcon />}
          value={value}
          onClick = {()=>navigate("/Movies")}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="TV Series"
          icon={<LiveTvIcon />}
          value={value}
          onClick = {()=>navigate("/TV")}
        />
        <BottomNavigationAction
          style={{ color: "white" }}
          label="Search"
          icon={<SearchIcon />}
          value={value}
          onClick = {()=>navigate("/search")}
        />
      </BottomNavigation>
    </Box>
  );
}
