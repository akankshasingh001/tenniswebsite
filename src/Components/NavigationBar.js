import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../Styles/style.css';

const NavigationBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // function to handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/Home'); // Update isLoggedIn state to false
  };

  return (
    <>
      <div className="navigation">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/MatchDetails">Match</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
          <li>
            <Link to="/AboutUs">About</Link>
          </li>
          {isLoggedIn ? (
            // If user is logged in, render logout link
            <li>
              <Link to="/Home" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          ) : (
            // If user is not logged in, render login and register links
            <>
              <li>
                <Link to="/LoginPage">Login</Link>
              </li>
              <li>
                <Link to="/SignUp">SignUp</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default NavigationBar;
