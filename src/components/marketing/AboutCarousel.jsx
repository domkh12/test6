import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TeamCoponent from './TeamComponent';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { motion } from 'framer-motion';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        ./public/marketing/mrcat.jpg
        "
        names="Mr. Cat"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        "
        names="Mr. Cat"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        "
        names="Mr. Cat"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        "
        names="Mr. Cat"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        "
        names="Mr. Cat"
        />
    </div>,
    <div className="item" data-value="1">
        <TeamCoponent
        image="
        "
        names="Mr. Cat"
        />
    </div>,
];

const AboutCarousel = () => (
    <div className='bg-marketing-main-color'>
        <br />
        <div>
        <div className='flex flex-col items-center sm:mx-32 lg:mx-60 sm:items-start mt-32'>
      <small className="text-md text-white">
        <span className="text-yellow-300">//</span>
            OUR TEAM
        </small>
        <div className='sm:w-[400px]'>
        <h2 className='text-3xl text-white text-center sm:text-start'>
        Our team of expert marketers
        </h2>
        </div>
        </div>
        </div>
    <motion.div className='mx-28 my-16 xl:mx-60 lg:mx-32 md:mx-16 sm:mx-32'
    initial={{y:-100, opacity:0}}
    whileInView={{y:0, opacity:1}}
    transition={{duration:1}}
    >
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        disableDotsControls
        renderPrevButton={() => (
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-marketing-main-color p-2 rounded-[50%]">
              <FaChevronLeft />
            </button>
          )}
          renderNextButton={() => (
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white bg-opacity-50 text-marketing-main-color p-2 rounded-[50%]">
              <FaChevronRight />
            </button>
          )}
    />
    </motion.div>
    <br />
    </div>
);
export default AboutCarousel