import React from "react";
import Footer from '../Components/Footer';
import SchoolEventsCalenda from "../Components/SchoolEventsCalenda"

const AboutUsPage = () => {
  return (
      
    <div>
      <div className="relative w-full h-screen bg-[#8299ae] overflow-hidden flex items-center justify-center">
        <div className="container relative z-10 flex flex-col items-center px-4 mx-auto">
          <img
            src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/302021468_449688623845387_5709386479367275880_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=2S_m8iGXHBwQ7kNvgHeWo0p&_nc_ht=scontent-mad1-1.xx&_nc_gid=AwyTVvIy2wJjpuoVqW-5ma5&oh=00_AYDx1pPuZeR38cwiAstK0R5ttAL9ENBl-A3p6u41d-pFyg&oe=66E9CD03"
            alt="Logo"
            className="w-32 h-auto mb-6"
          />

          <h1 className="mb-4 text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            About
          </h1>

          <div className="flex items-center mb-6">
            <div className="bg-white h-0.5 w-24 sm:w-32 md:w-40"></div>
            <img
              src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/302021468_449688623845387_5709386479367275880_n.jpg?stp=dst-jpg_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=2S_m8iGXHBwQ7kNvgHeWo0p&_nc_ht=scontent-mad1-1.xx&_nc_gid=AwyTVvIy2wJjpuoVqW-5ma5&oh=00_AYDx1pPuZeR38cwiAstK0R5ttAL9ENBl-A3p6u41d-pFyg&oe=66E9CD03"
              alt="Shrike"
              className="w-10 h-auto mx-4"
            />
            <div className="bg-white h-0.5 w-24 sm:w-32 md:w-40"></div>
          </div>

          <h2 className="text-xl font-normal text-center text-white sm:text-2xl md:text-3xl">
            Our history & objectives
          </h2>
        </div>

        <img
          src="//www.whitestoneschool.co.zw/wp-content/plugins/revslider/public/assets/assets/transparent.png"
          alt="Slide Background"
          className="absolute inset-0 object-cover w-full h-full opacity-20"
        />
      </div>
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <main className="w-full lg:w-2/3 lg:pr-8">
            <h1 className="mb-6 text-3xl font-bold">About</h1>

            <div className="mb-8">
              <p className="mb-4">
                The school opened in 1942 on land acquired by its founder Mr.
                M.G.Fleming. It was run as an Anglican Diocesan preparatory
                school for boys under the ownership of Ruzawi Schools Ltd., who
                bought it from Mr. Fleming, and operated successfully for many
                years.
              </p>
              <p className="mb-4">
                A sudden decline in enrollment, due mainly to the withdrawal of
                large numbers of Zambian pupils, brought about the closure of
                the school in 1975.
              </p>
              <p className="mb-4">
                In 1978 all movable property was auctioned and the buildings
                remained empty for partial occupation by pupils and staff of
                Cyrene Mission during the civil war years.
              </p>
              <p className="mb-4">
                Whitestone School has been established on 28 hectares of
                attractive granite kopje countryside in the southern Bulawayo
                suburb of Burnside. The school site is rich in a wide variety of
                indigenous flora and fauna and offers endless opportunity for
                exploration and study. A blend of rocky outcrop and mixed
                woodlands together with well appointed sports fields makes it a
                playground paradise for children.
              </p>
            </div>

            <div className="flex flex-col mb-8 md:flex-row">
              <div className="w-full mb-4 md:w-1/2 md:pr-4 md:mb-0">
                <img
                  src="https://www.whitestoneschool.co.zw/wp-content/uploads/2015/03/10499424_10152339830708386_7656123844257764330_o.jpg"
                  alt="1973"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-4">
                <img
                  src="https://www.whitestoneschool.co.zw/wp-content/uploads/2016/03/21.jpg"
                  alt="School"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <h3 className="mb-4 text-2xl font-bold">School Objectives</h3>
            <p className="mb-4">
              At Whitestone we believe it important not only to teach the
              children virtues such as honesty, humility, self-discipline,
              concern for others and good manners, but also to encourage each
              individual to discover and develop their unique qualities and
              talents. We do not force children to conform to a stereotyped
              mould.
            </p>
            <p className="mb-4">
              The teachers are therefore concerned not only with the academic
              progress of our pupils but also with their general welfare,
              happiness and spiritual, social and physical growth. Our teachers
              are available to talk to children or parents on any matter of
              concern.
            </p>

            <h3 className="mb-4 text-2xl font-bold">Discipline</h3>
            <p className="mb-4">
              A firm and fair system of discipline is part of the Whitestone
              philosophy and it is considered as a shared responsibility between
              home and school.
            </p>

            <h3 className="mb-4 text-2xl font-bold">The Curriculum</h3>
            <p className="mb-4">
              A strong grounding is established particularly in English and
              Mathematics and in the range of subjects appropriate to a
              preparatory school. These include: Environmental Studies, Art &
              Craft, Computer Studies, Drama and Literature, Music, Handwriting,
              Religious Education, Ndebele and Physical Education.
            </p>
            <p className="mb-4">
              At the end of Grade 7, all pupils write the ZIMSEC National
              Examinations and the Cambridge International Primary Programme
              Stage 6 Examinations. Many of the staff at Whitestone School are
              accredited Markers for this programme.
            </p>
          </main>

          <aside className="w-full mt-8 lg:w-1/3 lg:mt-0">
            <div className="mb-8">
              <img
                src="https://scontent-mad1-1.xx.fbcdn.net/v/t39.30808-6/310808822_477171704430412_61070650227379668_n.jpg?stp=c175.0.864.864a_dst-jpg_s206x206&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=gI2nJTw9pswQ7kNvgH2Bl5Y&_nc_ht=scontent-mad1-1.xx&oh=00_AYArP67whmkQL2QDG0-FgPxE1txylK7RXeinro6vDxd6JA&oe=66E9BFF0"
                alt="School Logo"
                className="w-full max-w-xs mx-auto"
              />
            </div>

            <div className="p-6 bg-gray-100 rounded-lg">
              <h4 className="mb-4 text-xl font-bold">Latest News</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Rugby vs Masiyephambili 5th June 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Boys Hockey-St Johns Festival 31st May 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Girls Hockey vs Masiyephambili 5th June 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Boys Hockey vs Masiyephambili 6th June 2024
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600 hover:underline">
                    Soccer vs Masiyephambili 4th June 2024
                  </a>
                </li>
              </ul>
            </div>
            <div className="p-6 mt-5 bg-gray-100 rounded-lg">
              <h4 className="mb-4 text-xl font-bold">Calendar</h4>
              <SchoolEventsCalenda/>
            </div>
          </aside>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default AboutUsPage;
