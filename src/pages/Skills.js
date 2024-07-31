import React from "react";
import manImg from "../img/about/man.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";
//import icons
import { FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiAdobepremierepro, SiAdobelightroom, SiAdobeaudition, SiCplusplus, SiAdobephotoshop } from "react-icons/si";
import { IoLogoJavascript, IoLogoFigma } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { TfiMicrosoftAlt } from "react-icons/tfi";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90, icon: <FaHtml5 /> },
    { name: "Python", level: 70, icon: <FaPython /> },
    { name: "CSS", level: 80, icon: <FaCss3Alt /> },
    { name: "C++", level: 60, icon: <SiCplusplus /> },
    { name: "JavaScript", level: 70, icon: <IoLogoJavascript /> },
    { name: "React", level: 70, icon: <RiReactjsLine /> },
    { name: "Premiere Pro", level: 85, icon: <SiAdobepremierepro /> },
    { name: "Lightroom", level: 90, icon: <SiAdobelightroom /> },
    { name: "Audition", level: 70, icon: <SiAdobeaudition /> },
    { name: "Photoshop", level: 50, icon: <SiAdobephotoshop /> },
    { name: "Figma", level: 50, icon: <IoLogoFigma /> },
    { name: "Microsoft Office", level: 80, icon: <TfiMicrosoftAlt /> },

    // add more skills here
  ];
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="">
      <div className="container mx-auto relative ">
        {/* text & img wrapper */}
        <div className="flex flex-col-reverse lg:flex-row mt-[3vh] justify-center gap-x-8 text-center lg:text-left">
          {/* img */}
          <div className="flex flex-1 justify-center">
            <div className="items-center rounded-lg overflow-clip h-[70vh]">
              <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} className="h-full w-auto object-contain" />
            </div>
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            className=" lg:flex-1 
          lg:w-auto z-10 justify-center items-center lg:items-start "
          >
            <h1 className="h1 mb-0">Skills</h1>

            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 w-full">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center mb-3 ">
                  <div className="w-16">{skill.icon}</div>
                  <div className="flex-1 ">
                    <div className="flex justify-between mb-1">
                      <span className="mr-4">{skill.name}</span>
                      {/* <span>{skill.level}%</span> */}
                    </div>
                    <div className="h-2 bg-gray-200 w-full rounded-full" style={{ width: "10vw" }}>
                      {" "}
                      <div style={{ width: `${skill.level}%` }} className="h-full bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* <p className="mb-3">I'm a computer engineering undergraduate with a minor in Journalism, based in Hong Kong. I have a passion for technology, writing, photography, and filmmaking.</p>
            <p className="">With a strong foundation in both technical knowledge and communication skills, I aim to bridge the gap between engineering and journalism through multimedia storytelling.</p>
            <div className="w-auto h-auto max-w-xs mx-auto ">
              <br />
              <Link to={"/portfolio"} className="btn rounded-lg">
                View my work
              </Link>
            </div> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
