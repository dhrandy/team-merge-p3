import React from 'react';
import NewsContainer from '../../components/NewsContainer/NewsContainer';
import NavHome from '../../components/HomePageComponents/Nav/NavHome';
import './newsHomepage.css'

const NewsHomepage = () => (
    <React.Fragment>
        <NavHome />
        <div id="header-below-nav-separator"></div>
        <div id="news-header-background">
            <h1 id="title-shadow-news">P<span className="title-smaller">RESCRIPTION</span> <br />P<span className="title-smaller">LANNER</span></h1>
        </div>
        <div id="medical-news-border"></div>
        <div id="medical-news-title">
            <h2 id="medical-news-bold">MEDICAL NEWS</h2>
            <hr id="medical-news-hr"/>
        </div>
        <NewsContainer />
        <footer id="homepage-footer">
            © 2018 | Personal Planner
        </footer>
    </React.Fragment>
  )

export default NewsHomepage;