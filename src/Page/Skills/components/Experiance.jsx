import React from "react";
import { motion } from "framer-motion";
import { Code, Pencil, FileText } from "lucide-react";
import { experience } from "../../../constant";
import Marquee from "react-fast-marquee";

const fadeInVariant = (direction) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? -100 : 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 20,
      duration: 0.6,
    },
  },
});

export default function WebServices() {
  return (
    <React.Fragment>
      <h2
        className="font-poppins
              font-semibold
              text-[42px]
              ss:text-[52px]
              text-white
              leading-[80px]
              ss:leading-[80px]
              text-center
              mb-[70px]"
      >
        Experience
      </h2>

      <div className="relative w-full px-4 sm:px-6">
        <div className="relative w-full">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeInVariant(exp.position)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className={`bg-[#1F1134] rounded-xl p-6 mb-24 border border-[#75368a] backdrop-blur-sm relative z-10 
                w-full sm:w-[80%] md:w-[60%]
                ${
                  exp.position === "left"
                    ? "ml-0 sm:ml-8 sm:mr-auto"
                    : "ml-0 sm:ml-auto sm:mr-8"
                }`}
            >
              <div className="flex items-center">
                <img
                  src={exp.img}
                  className="w-12 h-12 rounded-full mr-4 border border-[#75368a] shadow-md"
                />
                <h2 className="baseText text-2xl font-semibold text-white">
                  {exp.organization}
                </h2>
              </div>

              {exp.postions.map((pos, idx) => (
                <div key={idx} className="mb-5">
                  <h4 className="text-gray-light text-lg font-semibold mt-3 sm:mt-0 sm:relative sm:left-[60px]">
                    {pos.title}
                  </h4>
                  <p className="text-gray-light text-sm mb-3 sm:relative sm:left-[60px]">
                    {pos.duration}
                  </p>
                  <ul className="list-disc ml-5 text-dimWhite text-sm space-y-2">
                    {pos.contributions.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Marquee gradient={false} speed={50}>
                    <div className="flex flex-wrap gap-2 mt-4 overflow-x-auto scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-transparent">
                      {pos.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-teal-600/30 text-teal-300 text-xs px-4 py-1 rounded-full border border-[#75368a] hover:bg-teal-500 hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Marquee>
                </div>
              ))}

              {index < experience.length - 1 && (
                <div className="hidden sm:block absolute h-16 w-px bg-gray-600 left-1/2 bottom-0 translate-y-full"></div>
              )}
            </motion.div>
          ))}

          <div className="hidden sm:block absolute top-20 bottom-20 w-px bg-[#75368a] left-1/2 -z-0"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
