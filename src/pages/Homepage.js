/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import HoverBoxContainer from "../Components/HoverBoxContainer";
import OurEthosSection from "../Components/OurEthosSection";
import CollegeValuesSection from "../Components/CollegeValuesSection";
import Footer from "../Components/Footer";

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
        "https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/424599617_794323522715227_1705046749253830577_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9r5fNSFDlKIQ7kNvgGlySjt&_nc_ht=scontent.fhre2-2.fna&oh=00_AYCvIF6X7gXErb9-pCdoJk4lJ56S5WAUtRb2p1LInoW9gg&oe=66CF8E9D",
      link: "https://noscihigh.org/enroll",
    },
    {
      title: "We Believe",
      description:
        "Our city will grow stronger when every New Orleanian can contribute to our wellbeing and innovation through the tools of math and science.",
      image:
        "https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/367461902_695936319220615_6728390917095706423_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=F7xOE6Srp70Q7kNvgH-Rc4K&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAOxQCq3sj5NPlU4Sa8_gjUHez9_pAPNiLg0ezdH0qZ-g&oe=66CFA2AB",
      link: "/About",
    },
    {
      title: "Every Day",
      description:
        "We open the doors of opportunity in these fields, guiding our students as they imagine the possibilities for our shared future.",
      image:
        "https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kIJ7HlV8h0sQ7kNvgFs27FL&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAD49e5vfEHp5VyZS5ivy2N2Cd0XCwRS5H0gDBi42A6DA&oe=66CF8AC8",
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
      <div className="p-6">
        <div className="mb-4">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <span className="inline-flex items-center font-semibold text-green-600">
          Read More
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </a>
  );

  return (
    <div className="mwPageBlock Gallery">
      <div className="blockContents">
        <Slider {...settings} className="sliderEight">
          {slides.map((slide, index) => (
            <div key={index} className="relative sliderItem">
              <div
                className="w-full h-screen bg-center bg-cover sliderItemImage"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 flex items-center ">
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
      <section className="py-10 section-container">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-start space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
            <div className="flex-1">
              <div className="p-2 bg-[#2A5276]  rounded-md shadow-md little-yellow-box">
                <p className="font-semibold text-gray-800">Welcome to</p>
              </div>
              <h2 className="mt-2 text-3xl font-bold text-gray-800 welcome-header">
                Elroy Foundation Primary School
              </h2>
              <div className="mt-4 text-gray-700 welcome-copy">
                <p>
                  <strong>
                    We are so happy to welcome you to Elroy Foundation Primary
                    School, which serves a richly-diverse community.
                  </strong>
                </p>
                <p>
                  Elroy Foundation belongs to the Association of Trust Schools
                  (ATS). The Head and Board Members attend various gatherings,
                  meetings, and conferences to promote quality education within
                  our schools.
                </p>
                <p>
                  Elroy Foundation currently enrolls students from ECD up to
                  Grade 7 for pupils between the ages of 3 to 13. As a member of
                  ATS and CHISZ, Elroy Foundation School shares the values and
                  ethos of other like-minded schools.
                </p>
              </div>
              <div className="flex mt-6 space-x-4">
                <a
                  className="px-4 py-2 text-white transition duration-300 bg-[#2A5276] ]rounded-md shadow fb-btn-reveal--primary-green hover:bg-green-600"
                  href="https://Elroy Foundationprimary.co.zw/Elroy Foundation-primary-school-about-Elroy Foundation/"
                >
                  Read More
                  <i className="ti-angle-right"></i>
                </a>
                <a
                  className="px-4 py-2 text-white transition duration-300 bg-[#2A5276]  rounded-md shadow fb-btn-reveal--primary-red hover:bg-red-600"
                  href="https://Elroy Foundationprimary.co.zw/Elroy Foundation-primary-school-contact/"
                >
                  Contact
                  <i className="ti-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="flex-1">
              <img
                className="h-full rounded-lg shadow-lg "
                src="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/369854368_695931845887729_6742817936632485026_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2DtMkM7--PMQ7kNvgF61iwl&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAIC6nMK0UH7I6wyELombkcLf7NIN0L1cnmGIutQxHwrw&oe=66CFA8DF"
                alt="Elroy Foundation Primary School"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="min-h-screen px-4 py-12 bg-gray-100 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 mb-2 text-sm font-semibold text-yellow-700 bg-yellow-200 rounded-full">
              Learning brought to life
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              At Elroy Foundation, learning is at the core
              <br /> of everything we do
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              We are passionate about providing the opportunities to children
              which allow them to flourish later in life. This means that we
              support and challenge every single pupil to achieve their very
              best.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card
              // icon={/* SVG icon for Education */}
              title="Education"
              description="Lusitania offers Cambridge Primary / Checkpoint assessment and syllabi content in English, Mathematics and Science."
              link="https://lusitaniaprimary.co.zw/lusitania-primary-school-curriculum/"
            />
            <Card
              // icon={/* SVG icon for Activities */}
              title="Activities"
              description="For those with a passion for visual arts, our Culture Department offers a diverse range of artistic disciplines, including drawing..."
              link="https://lusitaniaprimary.co.zw/lusitania-primary-school-culture/"
            />
            <Card
              // icon={/* SVG icon for Staff */}
              title="Staff"
              description="At Elroy Foundation, teamwork is everything. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut..."
              link="https://lusitaniaprimary.co.zw/lusitania-primary-school-our-team/"
            />
            <Card
              // icon={/* SVG icon for Events */}
              title="Events"
              description="Check out or calendar of events, which include Sports, Academic, Field Trips, Carnavals, Clubs, Choirs, and many more."
              link="https://lusitaniaprimary.co.zw/event/"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center my-20">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-400 font-medium">
          VIBRANT SCHOOL EXPERIENCE
        </span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      <div className="flex justify-center  mt-20">
        <div className="-full md:w-1/2 md:h-full">
          <div
            className="cursor-pointer"
            onClick={() =>
              window.open("https://www.stgeorges.co.zw/about-us/", "_blank")
            }
          >
            <div className="relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div
                className="bg-cover bg-center h-64"
                style={{
                  backgroundImage:
                    "url('https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/367432330_695931755887738_7566092391133351380_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=kIJ7HlV8h0sQ7kNvgFs27FL&_nc_ht=scontent.fhre2-2.fna&oh=00_AYAD49e5vfEHp5VyZS5ivy2N2Cd0XCwRS5H0gDBi42A6DA&oe=66CF8AC8')",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white">
                  <div className="text-center">
                    <a
                      className="ha-flip-btn block relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105"
                      href="https://www.stgeorges.co.zw/about-us/"
                    >
                      <div className="ha-hover-box-main">
                        <div className="ha-hover-box-wrapper flex w-full bg-red">
                          <div className="ha-hover-box-content flex flex-col items-start justify-center h-full z-99 transition-opacity duration-200 ease-in-out delay-100 bg-red-700">
                            <a
                              className="ha-hover-sub-title  text-lg font-semibold"
                              style={{ textAlign: "left" }}
                              href="/"
                            >
                              St George's College
                            </a>
                          </div>
                        </div>
                      </div>
                    </a>
                    {/* Add any additional content here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HoverBoxContainer />
      </div>
      {/* <div className="who">
        <h2 className="text-center" >Who we are</h2>
        <div className="flex justify-around ">
          <div className="who-image ">
            <img
              src="https://scontent.fhre2-2.fna.fbcdn.net/v/t39.30808-6/424599617_794323522715227_1705046749253830577_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=9r5fNSFDlKIQ7kNvgGlySjt&_nc_ht=scontent.fhre2-2.fna&oh=00_AYCvIF6X7gXErb9-pCdoJk4lJ56S5WAUtRb2p1LInoW9gg&oe=66CF8E9D"
              alt="My Image"
              width="100%"
              height="auto"
              style={{ borderRadius: "8px" }}
            />
          </div>
          <div className="who-text ">
            <p>
              Over the last 70 years, Falcon College has grown from its humble
              beginnings on the site of the derelict Bushtick gold mine in the
              heart of the Matabeleland bush to one of the leading independent
              secondary schools in Southern Africa.
            </p>
            <p>
              Our ethos marries enduring Christian values with a 21st-century
              educational approach, fostering personal growth through
              motivation, cooperation, and teamwork. At Falcon, we embrace the
              wisdom of the past to sculpt individuals of excellence for the
              present and future. Our commitment extends beyond academics,
              nurturing compassion, respect, and well-being, preparing students
              for a competitive yet collaborative world.
            </p>
          </div>
        </div>
      </div> */}
      <div className="w-full bg-transparent py-12 text-center mt-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="w-full">
            <div className="mb-6">
              <h2 id="vision" className="text-3xl font-bold mb-4 text-center">
                Our Vision
              </h2>
            </div>
            <div className="text-lg">
              <p className="text-center">
                Falcon College aims to be a{" "}
                <strong>leading Southern African centre</strong> of academic,
                cultural and sporting excellence for young people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <OurEthosSection />
      <h2 id="vision" className="text-3xl font-bold mb-4 text-center mt-20">
        Our Vision
      </h2>

      <CollegeValuesSection />
<Footer/>
    </div>
  );
};

export default Hompepage;
