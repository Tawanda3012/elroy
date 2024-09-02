import React from 'react';
import NewsArticle from "../Components/NewsArticle";
import Footer from "../Components/Footer";
import SchoolEventsCalenda from "../Components/SchoolEventsCalenda"



const NewsEventsPage = ({
  backgroundImage,
  title = "News & Media",
  subtitle = "News & Media",

}) => {
  return (
    <div>
      <header
        className="relative h-64 bg-center bg-cover md:h-96"
        style={{ backgroundImage: `url(${backgroundImage})` }}
        role="banner"
        data-interchange="[, small], [, medium], [, large], [, xlarge]"
        data-resize="uy8ggc-interchange"
        id="uy8ggc-interchange"
        data-a="bzj7o8-a"
        data-events="resize"
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Overlay for better text visibility */}
        <div className="container relative z-10 flex flex-col items-center justify-center h-full px-4 mx-auto">
          <h1 className="mb-2 text-4xl font-bold text-white md:text-5xl">{title}</h1>
          <h2 className="mb-4 text-2xl font-semibold text-white md:text-3xl">{subtitle}</h2>
          <div className="text-white breadcrumb-container">
            <div className="row">
              {/* Add breadcrumb content here if needed */}
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-wrap justify-around mt-20 main-wrap">
       <NewsArticle/>
       <div className='mt-5' >
        <SchoolEventsCalenda className=''/>
       </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewsEventsPage;