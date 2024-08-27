import React from 'react';

const LatestNewsAndEvents = () => {
  return (
    <div className="container px-4 mx-auto mb-20">
      <div className="flex flex-wrap">
        {/* Latest News Section */}
        <div className="w-full p-4 md:w-3/4">
          <section className="p-6 rounded-lg shadow-md bg-[#D6D6D4]">
            <h2 className="mb-4 text-2xl font-bold text-[#2A5276] ">Latest<br />news</h2>
            <div className="mb-4">
              <a
                className="inline-block px-4 py-2 text-sm font-semibold text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600"
                href="https://peterhousegroup.co.zw/blog/"
              >
                Browse more
              </a>
            </div>
          </section>
        </div>

     
        <div className="w-full p-4 md:w-1/4">
          <section className="p-6 rounded-lg shadow-md bg-gradient-to-r from-[#006494] to-[#006494] text-white">
            <h2 className="mb-4 text-2xl font-bold">Elroy Foundation <br/>Events</h2>
            <div className="mb-4">
              <a
                className="inline-block px-4 py-2 text-sm font-semibold text-white transition duration-200 bg-blue-500 rounded hover:bg-blue-600"
                href="https://peterhousegroup.co.zw/events/"
              >
                View now
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsAndEvents;