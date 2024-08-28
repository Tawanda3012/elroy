import React from 'react';
import NewsArticle from "../Components/NewsArticle";
import Footer from "../Components/Footer"



const NewsEventsPage = ({
  backgroundImage,
  title = "News & Media",
  subtitle = "News & Media",

}) => {
  return (
    <div>
      <header
        className="bg-cover bg-center relative h-64 md:h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="banner"
        data-interchange="[, small], [, medium], [, large], [, xlarge]"
        data-resize="uy8ggc-interchange"
        id="uy8ggc-interchange"
        data-a="bzj7o8-a"
        data-events="resize"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">{title}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{subtitle}</h2>
          <div className="breadcrumb-container text-white">
            <div className="row">
              {/* Add breadcrumb content here if needed */}
            </div>
          </div>
        </div>
      </header>
      <div className="main-wrap flex justify-around flex-wrap mt-20">
       <NewsArticle/>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsEventsPage;