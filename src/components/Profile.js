import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import SocialHandles from "./SocialHandles";
import ProfileData from "../data/profile";
import Wave from "./Wave";

const Profile = () => {
  return (
    <section
      id="home"
      className="text-gray-600 bg-darkblue body-font pt-16 lg:min-h-75vh"
    >
      <div className="p-5 mx-auto gap-4 flex flex-col md:pt-12 md:px-7 lg:py-20 lg:flex-row-reverse items-center min-h-fit">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-once="false"
          className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-80 lg:h-80 xl:w-96 xl:h-96 lg:mr-10 xl:mr-20 lg:p-5"
        >
          <img
            className="object-cover object-center w-full h-full border-4 border-white pointer-events-none rounded-full shadow-xl"
            alt={ProfileData.name}
            src={ProfileData.img}
          />
        </div>
        <div className="lg:flex-grow lg:pr-4 lg:mr-14 flex flex-col md:mb-0 items-center text-center max-w-2xl">
          <SocialHandles />
          <h2
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="title-font md:text-3xl text-2xl mb-4 text-center font-medium text-white"
          >
            Hello , I am{" "}
            <span className="text-dark-orange">{ProfileData.name}</span>
          </h2>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            data-aos-once="false"
            className="text-2xl md:text-3xl text-white mb-6 font-medium lg:inline-block"
          >
            &nbsp;
            <Typewriter
              words={ProfileData.professions}
              loop={false}
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </div>
          <div className="max-w-lg lg:max-w-xl xl:max-w-2xl">
            {ProfileData.info?.map((item, index) => (
              <p
                key={index}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
                data-aos-once="false"
                className="mb-3 text-white text-base md:text-lg lg:text-base xl:text-lg leading-relaxed text-center"
              >
                {item}
              </p>
            ))}
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            data-aos-once="false"
            className="mt-4 flex gap-x-4 md:gap-x-5 justify-center md:justify-between"
          >
            <button className="inline-flex font-medium text-white bg-black border-2 border-white py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={750}
              >
                Hire Me
              </Link>
            </button>
            <a href={ProfileData.resume} target="_blank" rel="noreferrer">
              <button className="inline-flex font-medium text-white bg-dark-orange border-2 border-dark-orange py-3 px-7 focus:outline-none hover:bg-cornsilk hover:border-dark-orange hover:text-black rounded-full text-md xl:px-10">
                Get Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <Wave />
    </section>
  );
};

export default Profile;
