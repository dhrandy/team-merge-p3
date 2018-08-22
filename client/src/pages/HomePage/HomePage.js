import React from 'react';
import './homepage.css'
import HeaderHome from '../../components/HomePageComponents/Header/HeaderHome';
import NavHome from '../../components/HomePageComponents/Nav/NavHome';
import Article from '../../components/HomePageComponents/Article/Article';
import FooterHome from '../../components/HomePageComponents/Footer/FooterHome'
import SocialHome from '../../components/HomePageComponents/Social/SocialHome'


const HomePage = () => (
    
    <React.Fragment>
    <SocialHome />
    <NavHome />
    <div id="header-below-nav-separator"></div>
    <HeaderHome />
    <div id="header-bottom-separator"></div>
    <Article />
    <FooterHome />
    </React.Fragment>
);

export default HomePage;