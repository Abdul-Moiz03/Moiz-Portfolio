import React from "react";
import "./Navbar.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const Navbar = () => {
  let url1 = "https://web.facebook.com/login.php/?_rdc=1&_rdr";
  let url2 = "mailto:moizrauf03@gmail.com";
  let url3 = "https://www.linkedin.com/in/abdul-moiz-a01970211";
  return (
    <div>
      <div>
        {/* navbar */}
        <nav className="main-nav">
          {/* logo or name */}
          <div>
            <strong>
              <span className="namespan">Abdul Moiz</span>
            </strong>
          </div>
          {/* catagores */}
          <div className="ul-div">
            <ul className="ulist navbar-nav me-auto">
              <li className="ullist">
                <Link className="ullistlink" to="/">
                  Home
                </Link>
              </li>
              <li className="ullist">
                <Link className="ullistlink" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="ullist">
                <Link className="ullistlink" to="/resume">
                  Resume
                </Link>
              </li>
              <li className="ullist">
                <Link className="ullistlink" to="/about">
                  About
                </Link>
              </li>
              <li className="ullist">
                <Link className="ullistlink" to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
          <div className="icon-div">
            <span>
              {" "}
              <a href={url1} className="ullistlink">
                <FacebookOutlinedIcon
                  className="iconspan"
                  sx={{ fontSize: 40 }}
                />
              </a>
            </span>
            <span>
              <a href={url2} className="ullistlink">
                <MailIcon className="iconspan" sx={{ fontSize: 40 }} />
              </a>
            </span>
            <span>
              <a href={url3} className="ullistlink">
                <LinkedInIcon className="iconspan" sx={{ fontSize: 40 }} />
              </a>
            </span>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
