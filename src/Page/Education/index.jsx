import React from "react";
import Lottie from "react-lottie-player";
import EducationIcon from "../../lotties/EducationIcon.json";
import style from "../../style";
import { header, education } from "../../constant";
import { motion } from "framer-motion";

const Education = () => {
  const lottieOptions = {
    loop: true,
    play: true,
    animationData: EducationIcon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={` ${style.maxWidth} mt0 `}
    >
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
  <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-transparent transform -translate-x-1/2 z-0"></div>

  <h2 className="text-center text-3xl font-bold text-white relative z-10">Experience</h2>

  <div className="mt-16 space-y-24 relative z-10">
    {/* Your experience cards here */}
  </div>
</section>
      <header>
        <h1
          className="
            font-poppins 
            font-semibold 
            text-[42px] 
            ss:text-[52px] 
            text-white 
            leading-[80px] 
            ss:leading-[80px]
            mb-[30px] text-center
            "
        >
          {header.educationTitle || "Education"} {/* Fallback if undefined */}
        </h1>
      </header>
      <div className="flex flex-row flex-wrap md:flex-noWrap">
        <aside className="flex-1 flex items-center md:my-0 md:flex hidden  ">
          <div className="relative z-[5]  w-[75%] h-[90%] max-w-[500px]">
            <Lottie {...lottieOptions} />
          </div>
        </aside>

        <aside className="flex-0 md:flex-1 flex flex-col mt-10 mb-4">
          {education.map((item, index) => (
            <article
              key={index}
              className="flex flex-row  mb-8  last:mb-0  hover:bg-[#203a43] cursor-pointer p-4  rounded-lg  transition-colors  duration-300"
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                className="w-[62px] h-[62px] rounded-full z-[2]"
              />
              <div className="ml-6 flex flex-col">
                <h4
                  className="
                    font-poppins 
                    font-semibold 
                    text-[22px] 
                    ss:text-[22px] 
                    text-white 
                    mb-1 baseText"
                >
                  {item.name}
                </h4>
                <h5
                  className="
                    font-poppins 
                    font-normal 
                    text-white 
                    text-[13px] 
                    mb-1"
                >
                  {item.fieldName}
                </h5>
                <h5
                  className={`${style.paragraph} text-[13px] text-gray-light `}
                >
                  {item.duration}
                </h5>
                {item.about.map((content, idx) => (
                  <p
                    key={idx}
                    className="
                      font-poppins 
                      font-normal 
                      text-gray-light
                      text-[16px] 
                      leading-[30px] 
                      mb-1 
                      last:mb-0"
                  >
                    {content.text}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </aside>
        <aside className="flex-1 flex items-center justify-center md:my-0 md:hidden flex   ">
          <div className="relative z-[5]  w-[100%] h-[100%] max-w-[400px]">
            <Lottie {...lottieOptions} />
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

export default Education;
