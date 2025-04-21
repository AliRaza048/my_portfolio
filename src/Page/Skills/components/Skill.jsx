import React, { useEffect, useState } from "react";
import * as Icons from "react-icons/si";
import Marquee from "react-fast-marquee";

const Skill = ({ programmingLanguages }) => {
  return (
    <Marquee gradient={false} speed={100}>
      <div className="flex mt-[50px]">
        {programmingLanguages.map(({ icon, name }, index) => {
          const IconComponent = Icons[icon];

          return (
            <div
              key={index}
              className="relative min-w-[150px] sm:min-w-[200px] flex-shrink-0 rounded-xl py-6 px-4 backdrop-blur-md shadow-xl transition-all ease-out duration-300 transform"
              style={{}}
            >
              <div className="flex flex-col items-center justify-center text-center">
                {IconComponent && (
                  <IconComponent className="text-white text-[40px] sm:text-[50px] mb-4 group-hover:text-teal-400 transition-all ease-in-out duration-300" />
                )}
                <h5 className="text-gray-300 text-[14px] sm:text-[16px] font-medium group-hover:text-white transition-all duration-300">
                  {name}
                </h5>
              </div>
            </div>
          );
        })}
      </div>
    </Marquee>
  );
};

export default Skill;
