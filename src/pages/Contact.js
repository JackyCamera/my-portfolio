import React from "react";
import manImg from "../img/contact/man.jpg";
import { motion } from "framer-motion";
import { transition1 } from "../transitions";

const Contact = () => {
  return (
    <motion.section initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: "100%" }} transition={transition1} className="section bg-white">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col lg:flex-row h-full items-center justify-start pt-36
        gap-x-8 text-center lg:text-left"
        >
          {/* bg */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9]
          absolute bottom-0 left-0 right-0 top-64 -z-10 "
          ></motion.div>
          {/* text & form */}
          <div className="lg:flex-1 pt-2 lg:w-auto">
            <h1 className="h1">Contact me</h1>
            <p className="mb-12">
              I would love to get suggestions from you.
              <br />
              Email: jackyxiechenzhijie@gmail.com
            </p>
            {/* form */}
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px]
                bg-transparent font-secondary w-full pl-3
                placeholder:tex-[#757879]"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px]
                bg-transparent font-secondary w-full pl-3
                placeholder:tex-[#757879]"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px]
                bg-transparent font-secondary w-full pl-3
                placeholder:tex-[#757879]"
                type="text"
                placeholder="Your message"
              />
              <button className="btn mb-[30px] mx-auto">Send it</button>
            </form>
          </div>
          {/* img */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ transition: transition1, duration: 1.5 }}
            className="flex-1 max-h-48 lg:max-h-max
           mx-auto h-full relative"
          >
            <img src={manImg} alt="" onContextMenu={(e) => e.preventDefault()} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
