import React from 'react';

const NewsArticle = ({ date, title, excerpt, imageUrl, readMoreUrl }) => (
  <div className="mb-8">
    <div className="relative h-48 mb-4">
      <img src={imageUrl} alt={title} className="object-cover w-full h-full" />
      <div className="absolute top-0 left-0 px-2 py-1 bg-white">
        <p className="text-sm">{date}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-2 bg-blue-500">
        <i className="text-white fas fa-newspaper"></i>
      </div>
    </div>
    <h4 className="mb-2 text-xl font-bold">
      <a href={readMoreUrl} className="hover:text-blue-500">{title}</a>
    </h4>
    <p className="mb-4">{excerpt}</p>
   
  </div>
);

const NewsArticles = () => {
  const articles = [
    {
      date: "Friday January 13 2023",
      title: "Newsletter: Friday, 13 January 2023",
      excerpt: "Welcome to the 2023 school year! The days have once again flown by and we are at the end of the first week! I ask that you join us as an...",
      imageUrl: "https://mcs.ac.zw/wp-content/uploads/2023/01/Opening-Day-Term-1-2023-36-of-290-1920x400.jpg",
      readMoreUrl: "https://mcs.ac.zw/news/newsletter-friday-13-january-2023/"
    },
    {
      date: "Friday October 7 2022",
      title: "Newsletter: Friday, 7 October 2022",
      excerpt: "As an extremely hot week draws to a close, we continue to encourage everyone to stay hydrated. We look forward to an exciting weekend of...",
      imageUrl: "https://mcs.ac.zw/wp-content/uploads/2022/10/MCS-12-Overs-Cricket-1080x400.jpg",
      readMoreUrl: "https://mcs.ac.zw/news/newsletter-friday-7-october-2022/"
    },
    {
        date: "Friday January 13 2023",
        title: "Newsletter: Friday, 13 January 2023",
        excerpt: "Welcome to the 2023 school year! The days have once again flown by and we are at the end of the first week! I ask that you join us as an...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2023/01/Opening-Day-Term-1-2023-36-of-290-1920x400.jpg",
       
      },
      {
        date: "Friday October 7 2022",
        title: "Newsletter: Friday, 7 October 2022",
        excerpt: "As an extremely hot week draws to a close, we continue to encourage everyone to stay hydrated. We look forward to an exciting weekend of...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2022/10/MCS-12-Overs-Cricket-1080x400.jpg",
       
      },
      {
        date: "Friday January 13 2023",
        title: "Newsletter: Friday, 13 January 2023",
        excerpt: "Welcome to the 2023 school year! The days have once again flown by and we are at the end of the first week! I ask that you join us as an...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2023/01/Opening-Day-Term-1-2023-36-of-290-1920x400.jpg",
  
      },
      {
        date: "Friday October 7 2022",
        title: "Newsletter: Friday, 7 October 2022",
        excerpt: "As an extremely hot week draws to a close, we continue to encourage everyone to stay hydrated. We look forward to an exciting weekend of...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2022/10/MCS-12-Overs-Cricket-1080x400.jpg",
        readMoreUrl: "https://mcs.ac.zw/news/newsletter-friday-7-october-2022/"
      },
      {
        date: "Friday October 7 2022",
        title: "Newsletter: Friday, 7 October 2022",
        excerpt: "As an extremely hot week draws to a close, we continue to encourage everyone to stay hydrated. We look forward to an exciting weekend of...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2022/10/MCS-12-Overs-Cricket-1080x400.jpg",
  
      },
      {
        date: "Friday January 13 2023",
        title: "Newsletter: Friday, 13 January 2023",
        excerpt: "Welcome to the 2023 school year! The days have once again flown by and we are at the end of the first week! I ask that you join us as an...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2023/01/Opening-Day-Term-1-2023-36-of-290-1920x400.jpg",
      
      },
      {
        date: "Friday October 7 2022",
        title: "Newsletter: Friday, 7 October 2022",
        excerpt: "As an extremely hot week draws to a close, we continue to encourage everyone to stay hydrated. We look forward to an exciting weekend of...",
        imageUrl: "https://mcs.ac.zw/wp-content/uploads/2022/10/MCS-12-Overs-Cricket-1080x400.jpg",
       
      },
    // Add more articles here...
  ];

  return (
    <div className="container px-4 mx-auto">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsArticle key={index} {...article} />
        ))}
      </div>
    </div>
  );
};

export default NewsArticles;