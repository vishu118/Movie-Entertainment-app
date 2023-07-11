import "./Header.css";
import logo from "../IMAGES/movix-logo.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  return (
    <>
      <div className="header">
        <span className="Name" onClick={() => window.scroll(0, 0)}>
          <img src={logo} alt="" className="logo" />
          MOVIX
        </span>

       
        
        <div className="Navbar-account">
          <button className="signInBtn">
            <AccountCircleIcon
              style={{ color: "#39445a", marginRight: "5px" }}
            />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
