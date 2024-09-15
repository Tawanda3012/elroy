/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";

import { Activity, Users, Calendar, School } from "lucide-react";
import HoverBoxContainer from "../Components/HoverBoxContainer";
import OurEthosSection from "../Components/OurEthosSection";
import CollegeValuesSection from "../Components/CollegeValuesSection";
import Footer from "../Components/Footer";
import LatestNewsAndEvents from "../Components/LatestNewsAndEvents";
import WelcomeSection from "../Components/WelcomeSection";

const Hompepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  };

  const slides = [
    {
      title: "Enroll",
      description:
        "Sci High is an open-enrollment school, accepting all students from across New Orleans, specifically those with an interest in STEM careers for our shared future.",
      image:
        "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_HdsR5vbbBEQ7kNvgFjoVhW&_nc_ht=scontent-mad1-1.xx&_nc_gid=AYyT8TECI_yPINoSzAUSlwb&oh=00_AYDmgrzAA_CWE5ZMcddgP9yQYUEh-0n258Bh2ShW6Hol0w&oe=66E9E8C8",
      link: "https://noscihigh.org/enroll",
    },
    {
      title: "We Believe",
      description:
        "Our city will grow stronger when every New Orleanian can contribute to our wellbeing and innovation through the tools of math and science.",
      image:
        "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/310875352_477171764430406_5450391110969048992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HCdvB98DFW0Q7kNvgExhXGO&_nc_ht=scontent-mad1-1.xx&_nc_gid=A8d3I4ZxgePrZU-y0j1QXUS&oh=00_AYASE37ssIYzpUCGfrCeKmZPNvEf4YOabShe3EHNgxoMWQ&oe=66E9D6B5",
      link: "/About",
    },
    {
      title: "Every Day",
      description:
        "We open the doors of opportunity in these fields, guiding our students as they imagine the possibilities for our shared future.",
      image:
        "https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/367455901_695936475887266_3692020753916654816_n.jpg?stp=c216.0.864.864a_dst-jpg_s206x206&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=apkkJYXWM-QQ7kNvgGWxCgj&_nc_ht=scontent-mad1-1.xx&oh=00_AYCbSSCM_kR2FzqubED7ap6unvFUASnC_HydSDV1YHMf0Q&oe=66E9B30A",
      link: "/Why-Sci-High",
    },
    {
      title: "Stay Updated",
      description:
        "View our calendar, announcements and weekly messages from our Head of School.",
      image:
        "https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/310875352_477171764430406_5450391110969048992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=MP4ptaF2avAQ7kNvgFKGZqx&_nc_ht=scontent.fhre2-2.fna&oh=00_AYDbNNNnhaJl5o6gDMF98GhIWHoK7dxOg36otVrR95gGvA&oe=66CF78B5",
      link: "https://noscihigh.org/news",
    },
    {
      title: "Sci High",
      description:
        "We are a public school that welcomes any student interested in exploring the fields of science, technology, engineering and math.",
      image:
        "https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/279351054_366891398718945_7478995217308468023_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zGgRNonttz4Q7kNvgG75fIn&_nc_ht=scontent.fhre2-2.fna&oh=00_AYCBTy7-uWhkJkJPo9v-vxgT4v4goUzmz9p5DqjO4gVA0Q&oe=66CF9713",
      link: "https://noscihigh.org/Academics-Courses",
    },
  ];

  const Card = ({ icon, title, description, link }) => (
    <a
      href={link}
      className="block transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
    >
      <div className="flex flex-col items-center p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold text-center">{title}</h3>
        <p className="mb-4 text-center text-gray-600">{description}</p>
        {/* <span className="inline-flex items-center font-semibold text-green-600">
          Read More
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span> */}
      </div>
    </a>
  );

  return (
    <div className="mwPageBlock Gallery ">
      <div className="blockContents">
        <Slider {...settings} className="sliderEight">
          {slides.map((slide, index) => (
            <div key={index} className="relative sliderItem">
              <div
                className="w-full h-screen bg-center bg-cover sliderItemImage"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 flex items-center md:mt-[350px] mt-[600px] ">
                  <div className="w-full max-w-lg p-4 text-white bg-black bg-opacity-50 caption">
                    <h2 className="mb-4 text-3xl font-bold text-left">
                      {slide.title}
                    </h2>
                    <p className="mb-6 text-left">{slide.description}</p>
                    <div className="button">
                      <a
                        href={slide.link}
                        className="inline-block px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <WelcomeSection />
   

<div className="container px-4 mx-auto">
  <div className="flex items-center my-10 md:my-20">
    <div className="flex-grow border-t border-gray-400"></div>
    <span className="flex-shrink mx-2 text-sm font-medium text-center text-gray-400 md:mx-4 md:text-base">
      VIBRANT SCHOOL EXPERIENCE
    </span>
    <div className="flex-grow border-t border-gray-400"></div>
  </div>
  <div className="flex flex-col justify-center mt-10 md:flex-row md:mt-20">
    <div className="w-full mb-6 md:w-1/2 md:mb-0 md:pr-3">
      <div
        className="cursor-pointer"
        onClick={() =>
          window.open("https://www.stgeorges.co.zw/about-us/", "_blank")
        }
      >
        <div className="relative overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <div
            className="bg-center bg-cover h-[300px] md:h-[530px]"
            style={{
              backgroundImage:
                "url('https://scontent-mad2-1.xx.fbcdn.net/v/t39.30808-6/367461902_695936319220615_6728390917095706423_n.jpg?stp=c216.0.864.864a_dst-jpg_s206x206&_nc_cat=104&ccb=1-7&_nc_sid=50ad20&_nc_ohc=2oyAGCd98XEQ7kNvgGWpl9q&_nc_ht=scontent-mad2-1.xx&_nc_gid=ASRl9wbUZqay6A5UFh8xuoD&oh=00_AYCTLL00Y3TO69S9-xvwqv2yZ3p4Tt4DyGf2gTkgEMx8Gg&oe=66E9C86B')",
            }}
          >
            <div className="absolute inset-0 flex flex-col justify-end text-white bg-black bg-opacity-50">
              <div className="p-4">
                <a
                  className="relative block overflow-hidden transition-transform transform rounded-lg shadow-lg ha-flip-btn hover:scale-105"
                  href="https://www.stgeorges.co.zw/about-us/"
                >
                  <div className="ha-hover-box-main">
                    <div className="flex w-full ha-hover-box-wrapper bg-red">
                      <div className="flex flex-col items-start justify-center h-full transition-opacity duration-200 ease-in-out delay-100 ha-hover-box-content z-99">
                        <a
                          className="text-base font-semibold md:text-lg ha-hover-sub-title"
                          style={{ textAlign: "left" }}
                          href="/"
                        >
                          Elroy Foundation School
                        </a>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full md:w-1/2 md:pl-3">
      <HoverBoxContainer />
    </div>
  </div>
</div>

      <OurEthosSection />
      <div className="w-full py-12 mt-20 text-center bg-transparent">
        <div className="max-w-5xl px-4 mx-auto">
          <div className="w-full">
            <div className="mb-6">
              <h2 id="vision" className="mb-4 text-3xl font-bold text-center">
                Our Vision
              </h2>
            </div>
            <div className="text-lg">
              <p className="text-center">
                Elroy Foundation College aims to be a{" "}
                <strong>leading Southern African centre</strong> of academic,
                cultural and sporting excellence for young people.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CollegeValuesSection />
      <LatestNewsAndEvents />

      <Footer />
    </div>
  );
};

export default Hompepage;
