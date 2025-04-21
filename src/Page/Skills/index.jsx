import React from "react";
import style from "../../style";
import { header, programmingLanguages } from "../../constant/index.js";
import Experiance from "./components/Experiance";
import Skill from "./components/Skill";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      whileInView={{ y: [-60, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
      className={` ${style.maxWidth} mt-10 `}
    >
      {/* <h1 className=" text-whitefont-poppins font-semibold ss:text-[52px] text-[42px] text-white ss:leading-[80px] leading-[80px]">
        {header.title}
      </h1> */}
      <section className=" ">
        <Skill programmingLanguages={programmingLanguages} header={header} />
        <Experiance  />
      </section>
    </motion.div>
  );
};
export default Skills;
