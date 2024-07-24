import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";

export default function NavBarComponent({logo}) {
  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu flex flex-wrap items-center justify-between px-20 sm:px-10 sm-max:px-5 py-4 sticky top-0 z-20 w-full drop-shadow-md font-sans dark:bg-gray-900 dark:text-gray-100 bg-white"
    >
      <Link
        activeClass="active"
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img
          width="30px"
          height="30px"
          src={logo}
          alt="logoHomepage"
        />
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-100">
          Showcase
        </p>
      </Link>
      <div className="flex justify-center items-center w-auto">
        <ul
          className={`flex-col md:flex-row lg:flex items-center w-full lg:w-auto lg:mx-4 lg:space-x-4  lg-max:hidden`}
        >
          <li className="px-3 py-2 lg:py-0 cursor-pointer">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              About
            </Link>
          </li>
          <li className="px-3 py-2 lg:py-0 cursor-pointer">
            <Link
              activeClass="active"
              to="project"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              Project
            </Link>
          </li>
          <li className="px-3 py-2 lg:py-0 cursor-pointer">
            <Link
              activeClass="active"
              to="blog"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              Blog
            </Link>
          </li>
          <li className="px-3 py-2 lg:py-0 cursor-pointer">
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-1 lg:flex sm-max:hidden sm:hidden">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
          >
            {isDarkMode ? (
              <FaSun className="w-7 h-7" />
            ) : (
              <MdDarkMode className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      <div className="lg:hidden flex justify-center items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
        >
          {isDarkMode ? (
            <FaSun className="w-7 h-7" />
          ) : (
            <MdDarkMode className="w-7 h-7" />
          )}
        </button>

        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoIosClose className="h-6 w-6 bg-gray-400 rounded-md" />
          ) : (
            <div className="h-9 w-20 rounded-md flex justify-center items-center bg-primary-developer-template hover:bg-primary-developer-template-hover">
              <IoMenu className="h-6 w-6 text-gray-100" />
            </div>
          )}
        </motion.button>
      </div>

      <motion.ul
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        className={`flex-col lg:flex-row items-center w-full lg:hidden lg:w-auto ${
          isOpen ? "flex" : "hidden"
        } lg:mx-4 lg:space-x-4`}
        onClick={isOpen ? toggleMenu : undefined}
      >
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
          >
            Project
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
          >
            Blog
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="px-3 py-2 lg:py-0 cursor-pointer"
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100 text-blue-900 hover:text-primary-developer-template"
          >
            Contact
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
}
