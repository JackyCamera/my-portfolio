import React from "react";
import manImg from "../img/home/man.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
const Home = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="section">
      <div className="container mx-auto h-full relative ">
        {/* text & img wrapper */}
        <div
          className=" flex flex-col lg:flex-row h-full items-center justify-start pt-36
        gap-x-8 text-center lg:text-left"
        >
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            transition={transition1}
            className="lg:flex-1 pt-2 px-4
            lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">
              photographer <br /> & student
            </h1>
            <p
              className="text-[26px] lg:text-[36px]
            font-primary mb-4 lg:mb-12"
            >
              Hong Kong
            </p>
            <Link to={"/contact"} className="btn mb-[30px]">
              Hire me
            </Link>
          </motion.div>
          {/* img */}
          <div className="flex justify-end max-h-96 lg:max-h-max">
            <motion.div initial={{ scale: 0, y: "100%" }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0, y: "100%" }} transition={transition1}>
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
