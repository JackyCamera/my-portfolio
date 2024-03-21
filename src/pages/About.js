import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const About = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="section">
      <div className="container mx-auto h-full relative">
        {/* text & img wrapper */}
        <div
          className="flex flex-col lg:flex-row
      h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16"
        >
          {/* img */}
          <div
            className="flex-1 max-h-48 lg:max-h-max
          order-2 lg:order-none mx-auto h-full relative"
          >
            <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className="flex-1 pt-36 pb-14 lg:pt-0
          lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start"
          >
            <h1 className="h1">About me</h1>
            <br />
            <p className="mb-12 max-w-sm">
              I am a photographer and filmmaker based in Hong Kong. I have been working in multimedia for over 5 years. I love to capture moments and create stories.
              <br />
              <br />
              <br />
              <div className="w-auto h-auto max-w-xs mx-auto ">
                <Link to={"/portfolio"} className="btn">
                  View my work
                </Link>
              </div>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
