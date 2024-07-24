import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  const controls = useAnimation();
  const heroImageVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };
  const textVariants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const undertextVariants = {
    initial: { y: "300%", opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 1 } },
  };

  const handleGetStartClick = () => {
    const isLoggedIn = !!localStorage.getItem("access");
    if (isLoggedIn) {
      navigate("/dashboard");
    } else {
      navigate("/register");
    }
  };

  useEffect(() => {
    controls.start("animate"); // Force initial animation
    if (isInView) {
      controls.start("animate");
    }
  }, [controls]);

  return (
    <section
      className="pb-20 font-sans sectoin dark:bg-gray-900 overflow-hidden"
      name="hero"
    >
      <div className="flex sm:flex-col-reverse sm-max:flex-col-reverse lg:flex-row justify-between items-center sm:mx-10 sm-max:mx-5 sm:mt-10 sm-max:mt-10 lg:mx-40 lg:mt-24">
        <motion.div
          variants={textVariants}
          initial="initial"
          ref={ref}
          animate={controls}
          className="flex flex-col gap-14 lg:w-[50%] sm:w-[100%]"
        >
          <h1 className="text-primary font-bold text-6xl sm:text-[25px] sm-max:text-[25px] md:text-[40px] lg:text-4xl xl:text-6xl">
            Almost Portfolios For You!
          </h1>
          <p className="text-xl font-medium dark:text-gray-100 xl-max:text-lg">
            A portfolio is a curated collection of materials that showcase your
            skills, accomplishments, and experience.
          </p>
          <button
            onClick={handleGetStartClick}
            className="px-6 py-3 w-44 bg-primary hover:bg-primary-hover text-white rounded-md"
          >
            Get Started
          </button>
        </motion.div>
        <div className="w-[1000px] md-max:m-0 xl-max:w-[600px] xl-max:mt-5 -mr-16">
          <motion.img
            ref={ref}
            variants={heroImageVariants}
            initial="initial"
            animate={controls}
            src="homepageImg/heroImg.png"
            alt=""
          />
        </div>
      </div>
      <motion.div
        variants={undertextVariants}
        initial="initial"
        ref={ref}
        animate={controls}
        className="flex sm:flex-col sm-max:flex-col lg:flex-row sm:mx-10 sm-max:mx-5 sm:items-start sm-max:items-start lg:items-center sm:mt-4 sm-max:mt-4 sm:gap-3 justify-between lg:mx-40"
      >
        <div className="flex gap-3 justify-center items-center">
          <FaCheckCircle className="w-6 h-6 text-primary xl-max:w-4 xl-max:h-4" />
          <p className="dark:text-gray-100 xl-max:text-[14px]">
            Build and edit your website without any coding or technical skills
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center 2xl:mr-[300px]">
          <FaCheckCircle className="w-6 h-6 text-primary xl-max:w-4 xl-max:h-4" />
          <p className="dark:text-gray-100 xl-max:text-[14px] ">
            Leverage custom modules to deliver a great user experience
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
