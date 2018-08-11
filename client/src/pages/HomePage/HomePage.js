import React from 'react';
import './homepage.css'
import HeaderHome from '../../components/HomePageComponents/Header/HeaderHome';
import NavHome from '../../components/HomePageComponents/Nav/NavHome';
import Article from '../../components/HomePageComponents/Article/Article';


const HomePage = () => (
    
    <React.Fragment>
    <HeaderHome />
    <NavHome />
    <Article />
    <footer>
      Copyright 2018 | Personal Planner
    </footer>
    </React.Fragment>
);


export default HomePage;