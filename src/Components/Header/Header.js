import "./Header.css";
import logo from "../IMAGES/movix-logo.png"
import SearchIcon  from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
 <>
     <div className="header">
        
          <span className="title">
            <img src={logo} alt="" className="logo" />
            MOVIX
          </span>
      

        <div className="Navbar-search">
          <input placeholder="Search Here For Movie..." className="searchInput" />
          <button className="searchBtn">
            <SearchIcon size={1} />
          </button>
        </div>
        <div className="Navbar-account">

          <button className="signInBtn">
            <AccountCircleIcon style={{color: "#39445a", marginRight:"5px"}} />
            Sign In
          </button>
        </div>
      </div>
 </>
  );
};

export default Header;
