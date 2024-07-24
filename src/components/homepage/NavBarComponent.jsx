import { MdDarkMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { motion } from "framer-motion";
import { FaSun } from "react-icons/fa";
import { AiFillDashboard } from "react-icons/ai";

export default function NavBarComponent() {
  const navigate = useNavigate();

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("isDarkMode") === "true";
  });
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("access");
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("isDarkMode", !isDarkMode);
  };

  const handleGetStartClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="menu flex flex-wrap items-center justify-between lg:px-20 sm:px-10 sm-max:px-5 py-4 fixed top-0 w-full drop-shadow-md font-sans dark:bg-gray-900 dark:text-gray-100 z-30 bg-white"
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
          src="logoHomepage.png"
          alt="logoHomepage"
        />
        <p className="text-xl font-semibold text-gray-700 dark:text-gray-100">
          Showcase
        </p>
      </Link>
      <ul
        className={`flex-col gap-6 md:flex-row lg:flex items-center w-full lg:w-auto lg:mx-4 lg:space-x-4 lg-max:hidden`}
      >
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Template
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Features
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            About
          </Link>
        </li>
        <li className="hover:text-primary cursor-pointer">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="flex justify-center items-center gap-1 lg:flex sm-max:hidden sm:hidden">
        <button
          onClick={() => {
            toggleDarkMode();
            document.documentElement.classList.toggle("dark", !isDarkMode);
          }}
          className="px-4 py-2 cursor-pointer text-gray-900 dark:text-gray-100 md:rounded"
        >
          {isDarkMode ? (
            <FaSun className="w-7 h-7" />
          ) : (
            <MdDarkMode className="w-7 h-7" />
          )}
        </button>
        {isLoggedIn ? (
          <button
            onClick={handleDashboardClick}
            className="px-6 flex justify-between items-center h-12 w-auto gap-2 bg-primary hover:bg-primary-hover text-white rounded-md"
          >            
          <AiFillDashboard className="w-5 h-5"/>
            Dashboard
          </button>
        ) : (
          <>
            <button
              onClick={handleLoginClick}
              className="px-6 py-2 dark:text-gray-100 text-gray-900 hover:bg-primary hover:text-gray-100 md:rounded"
            >
              Login
            </button>
            <button
              onClick={handleGetStartClick}
              className="px-4 py-2 bg-primary hover:bg-primary-hover text-white md:rounded"
            >
              Get Started
            </button>
          </>
        )}
      </div>

      <div className="lg:hidden flex justify-center items-center gap-4">
        <button
          onClick={() => {
            toggleDarkMode();
            document.documentElement.classList.toggle("dark", !isDarkMode);
          }}
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
            <div className="h-9 w-20 rounded-md flex justify-center items-center bg-primary">
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
          className="hover:text-primary cursor-pointer px-3 py-2 lg:py-0"
        >
          <Link
            activeClass="active"
            to="template"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Template
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="hover:text-primary cursor-pointer px-3 py-2 lg:py-0"
        >
          <Link
            activeClass="active"
            to="features"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Features
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="hover:text-primary cursor-pointer px-3 py-2 lg:py-0"
        >
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            About
          </Link>
        </motion.li>
        <motion.li
          variants={itemVariants}
          className="hover:text-primary cursor-pointer px-3 py-2 lg:py-0"
        >
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="dark:text-gray-100"
            onSetActive={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </motion.li>
        {isLoggedIn ? (
          <motion.li
            variants={itemVariants}
            className="lg:hidden px-3 py-2 lg:py-0"
          >
           <button
            onClick={handleDashboardClick}
            className="px-6 flex justify-between items-center h-12 w-auto gap-2 bg-primary hover:bg-primary-hover text-white rounded-md"
          >            
          <AiFillDashboard className="w-5 h-5" />
            Dashboard
          </button>
          </motion.li>
        ) : (
          <>
            <motion.li
              variants={itemVariants}
              className="lg:hidden px-3 py-2 lg:py-0"
            >
              <button
                onClick={handleLoginClick}
                className=" lg:w-auto px-6 py-2 w-36 dark:text-gray-100 text-gray-900 hover:bg-primary hover:text-gray-100 hover:2xl-max:rounded-md"
              >
                Login
              </button>
            </motion.li>
            <motion.li
              variants={itemVariants}
              className="lg:hidden px-3 py-2 lg:py-0"
            >
              <button
                onClick={handleGetStartClick}
                className="px-6 py-2 w-36 bg-primary hover:bg-primary-hover text-white 2xl-max:rounded-md"
              >
                Get Started
              </button>
            </motion.li>
          </>
        )}
      </motion.ul>
    </motion.nav>
  );
}
