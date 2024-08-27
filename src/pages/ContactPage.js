import React, { useState } from "react";
import Footer from "../Components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div
        className="relative flex items-center justify-center h-screen bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(5, 10, 35, 0.75), rgba(5, 10, 35, 0.75)), url(../images/home-page-header.jpg)",
        }}
      >
        <div className="bg-gradient-to-r from-[#006494] to-[#20262e] p-8 md:p-12 lg:p-16 w-full max-w-4xl rounded-lg shadow-lg">
          <div className="p-10 bg-white rounded-lg">
            <h2 className="mb-6 text-2xl font-semibold">Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-4 md:flex-row md:justify-between">
                <div className="flex-1 mb-4 mr-2 md:mb-0">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Enter your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  style={{ height: "150px" }}
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#9a2351] text-white py-2 px-6 rounded-lg hover:bg-[#8a1f4a] transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
