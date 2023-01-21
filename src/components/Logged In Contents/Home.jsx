import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="md:w-2/5">Stages of The User Journey</div>
        <img className="md:w-3/5" src="" alt="" />
      </div>
      <div className="bg-black text-white text-left md:pl-10 md:pt-16 md:pb-24 md:pr-9">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="font-bold text-4xl pb-8"
        >
          Product <br /> Growth Goals.
        </motion.div>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex flex-wrap"
        >
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              750+
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              30k+
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
          <div className="min-w-[100px] max-w-[29vw]">
            <div className="text-xs border text-gray-300 border-gray-300 w-fit py-1 px-2 rounded-full">
              COMPANIES
            </div>
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="text-5xl font-bold py-4 text-gradient bg-gradient-to-r from-orange-400 via-red-600 to-purple-600"
            >
              90%
            </motion.div>
            <div className="text-gray-200">Track and Analyze Your Product</div>
          </div>
        </motion.div>
      </div>
      <div className="min-h-screen flex flex-wrap md:px-10 md:py-20">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="md:w-2/5 bg-black text-white md:p-5 flex flex-col justify-center"
        >
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
          <div className="text-3xl font-semibold py-10">Hello Everyone</div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="md:w-3/5 p-10 bg-gray-200"
        >
          <div className="bg-white p-10 h-full flex flex-col justify-center items-center">
            <img
              className="rounded-md mb-7"
              src="https://imgs.search.brave.com/bbnqvFqXVWZFNyONtKw5p7qUpGsEgaI0rDg8SC8KMVc/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Q/Sjl3YkZidlJYYXRI/c3o5MEZNWkpBSGFF/SyZwaWQ9QXBp"
              alt=""
            />
            <div className="font-bold">I am cute</div>
            <div className="my-4 text-sm font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam
              officiis in facilis a possimus!
            </div>
            <button className="bg-black mt-3 text-white max-w-[150px] text-sm rounded-md py-2 px-10">
              Meow
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
