import React from 'react';
import Header from "../../components/Header/Header";
import BottomNavbar from "../../components/Navbar/Bottom/BottomNavbar";
import TopNavbar from "../../components/Navbar/Top/TopNavbar";
import NewsContainer from "../../components/NewsContainer/NewsContainer";

const News = () => (
    <div>
      <TopNavbar />
      <Header />
      <NewsContainer />
      <BottomNavbar />
    </div>
  )

export default News;