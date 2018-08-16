import React from 'react';
import './homepage.css'
import HeaderHome from '../../components/HomePageComponents/Header/HeaderHome';
import NavHome from '../../components/HomePageComponents/Nav/NavHome';
import Article from '../../components/HomePageComponents/Article/Article';


const HomePage = () => (
    
    <React.Fragment>
    <div id="top-separator">
      <div id="social-icons">
        <a href="http://www.facebook.com"><i className="fab fa-facebook-f"></i></a>
        <a href="http://www.twitter.com"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-google-plus-g"></i></a>
      </div>
    </div>
    <NavHome />
    <div id="header-below-nav-separator"></div>
    <HeaderHome />
    <div id="header-bottom-separator"></div>
    <Article />
    <footer id="homepage-footer">
    © 2018 | Personal Planner
    </footer>
    </React.Fragment>
);


export default HomePage;