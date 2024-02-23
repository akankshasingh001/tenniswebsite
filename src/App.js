import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Dashboard from './Components/Dashboard';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';
import News from './Components/News';
import MatchDetails from './Components/MatchDetails';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Footer from './Components/Footer';

import SignUp from './Components/SignUp';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div>
        <Header />
        <NavigationBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />;
        <div className="container"></div>
        <Footer />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/LoginPage"
            element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route
            path="/SignUp"
            element={<SignUp setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/News" element={<News />} />
          <Route path="/MatchDetails" element={<MatchDetails />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
