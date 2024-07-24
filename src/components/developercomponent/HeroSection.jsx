import React from "react";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

function HeroSection({
  heroImage,
  introduction,
  name,
  profession,
  bio,
  socialMediaLinks,
}) {
  return (
    <section
      className="font-sans section sm-max:p-5 dark:bg-gray-900 sm:p-10 xl:p-0 overflow-hidden"
      name="hero"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-8 sm:justify-between items-center xl:justify-center sm:h-auto xl:h-[100vh]">
        <div className="flex flex-col justify-center items-center lg:items-start gap-7 lg:w-[50%] sm:w-[100%]">
          <p className="text-xl font-medium dark:text-gray-100 xl-max:text-lg">
            {introduction}
          </p>
          <div>
            <h1 className="sm:text-5xl sm:text-center sm-max:text-center lg:text-start font-bold text-6xl lg:text-4xl xl:text-6xl">
              <span className="dark:text-gray-100">Hi, I'm </span>
              <span className="text-primary-developer-template">{name}</span>
              <br />
            </h1>
            <p className="sm:text-5xl font-bold lg:text-4xl xl:text-6xl sm-max:text-center sm:mt-4 xl:mt-8 sm:text-center lg:text-start">
              <span className="dark:text-gray-100 sm-max:text-5xl"> A </span>
              <span className="text-primary-developer-template sm-max:text-5xl">
                {" "}
                {profession}{" "}
              </span>
            </p>
          </div>
          <p className="sm:text-center sm-max:px-10 sm:font-medium dark:text-gray-100 sm:text-gray-500 lg:text-start">
            {bio}
          </p>
          <div className="flex gap-5">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              <button className="bg-primary-developer-template px-14 py-4 rounded-lg text-white text-lg hover:bg-primary-developer-template-hover">
                About Me
              </button>
            </Link>
            <div className="flex justify-center gap-5 items-center dark:text-gray-100">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.type === "facebook" ? (
                    <FaFacebookF className="w-6 h-6" />
                  ) : null}
                  {link.type === "github" ? (
                    <FaGithub className="w-6 h-6" />
                  ) : null}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border w-full sm:max-w-[100%] sm:mx-10 sm-max:mt-[0px] sm:mt-0 xl:w-[25%] lg:w-[40%] relative flex rounded-lg justify-center items-end h-auto shadow-xl">
          <div className="absolute top-0 w-[70%] h-[50%] bg-primary-developer-template rounded-full"></div>
          <img
            src={heroImage}
            className="z-10 w-full h-full object-cover"
            alt="Developer"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
