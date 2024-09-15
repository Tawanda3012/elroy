import React from 'react';
import NewsArticle from "../Components/NewsArticle";
import Footer from "../Components/Footer";
import SchoolEventsCalenda from "../Components/SchoolEventsCalenda";

const NewsEventsPage = ({
  title = "News & Media",
  subtitle = "News & Media",
}) => {
  const backgroundImage = "https://scontent.fhre1-2.fna.fbcdn.net/v/t39.30808-6/310957183_477171517763764_798490536531550485_n.jpg?stp=c152.0.815.815a_dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=wGOAJsE0ryYQ7kNvgGirqIQ&_nc_ht=scontent.fhre1-2.fna&_nc_gid=AVOJgU73oC3UQfxu4tWZatQ&oh=00_AYBRuz48MrnuhMgvktnQwG_XFVmD13ZPUy-83rOG58as3g&oe=66EC61BF";

  return (
    <div>
      <header
        className="relative h-screen bg-center bg-cover"
        style={{ 
          backgroundImage: `url(${backgroundImage})`, 
          backgroundPosition: 'center', // Center the image
          backgroundSize: 'cover' // Ensure the image covers the entire area
        }}
        role="banner"
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
        <NewsArticle />
        <div className='mt-5'>
          <SchoolEventsCalenda className='' />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsEventsPage;