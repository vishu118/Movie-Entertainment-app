import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav";
import Trending from "./Components/Pages/Trending/Trending";
import Movies from "./Components/Pages/Movies/Movies";
import Tv from "./Components/Pages/TV/Tv";
import Search from "./Components/Pages/Search/Search";
import { Container } from "@mui/material";


function App() {
  return (
    <BrowserRouter>
      
      <Header />
      <div className="App">
      <Container>
        <Routes>
          <Route path="/" Component={Trending} exact />
          <Route path="/Movies" Component={Movies} />
          <Route path="/TV" Component={Tv} />
          <Route path="/search" Component={Search} />
        </Routes>
      </Container>
        <SimpleBottomNavigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
