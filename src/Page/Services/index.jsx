import React from "react";
import { motion } from "framer-motion";
import Frameone from '../../assets/icons/Frameone.svg'
import Frametwo from '../../assets/icons//Frametwo.svg'
import Framethree from '../../assets/icons//Framethree.svg'
import Framefour from '../../assets/icons//Framefour.svg'
import Framefive from '../../assets/icons//Framefive.svg'

// Animation variants for Visions
const itemVariants = {
  hiddenLeft: { opacity: 0, x: -200 },
  hiddenRight: { opacity: 0, x: 200 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 3,
      ease: "easeOut"
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

// Combined component
export default function Service() {
  const services = [
    {
      id: 1,
      title: "Website & App Prototyping",
      icon: <img src={Frameone} className="w-[70px] md:w-[80px]"/>,
      description: "Design intuitive and engaging web and mobile experiences for seamless user interaction.",
      iconBgColor: "bg-purple-500",
      position: "left"
    },
    {
      id: 2,
      title: "Website & App Development",
      icon: <img src={Frametwo}/>,
      description: "We develop website and mobile apps that fit your needs perfectly.",
      iconBgColor: "bg-purple-500",
      position: "right"
    },
    {
      id: 3,
      title: "SaaS Development",
      description: "We develop scalable, secure SaaS applications with robust architectures and seamless integrations.",
      iconBgColor: "bg-purple-500",
      icon: <img src={Framethree} className="w-[50px] md:w-[70px]"/>,
      position: "left"
    },
    {
      id: 4,
      title: "Artificial Intelligence",
      description: "We design materials that visually express your values and represent your products.",
      iconBgColor: "bg-purple-500",
      icon: <img src={Framefour} className="w-[50px] md:w-[70px]"/>,
      position: "right"
    },
    {
      id: 5,
      title: "Email Template Design",
      description: "We create custom, responsive email templates that boost engagement with your brand.",
      iconBgColor: "bg-purple-500",
      icon: <img src={Framefive} className="w-[50px] md:w-[70px]"/>,
      position: "left"
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-purple-900 mx-auto max-w-[80rem] text-white p-4 md:p-8 lg:p-12"
      >
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-2">Your Vision, Our Expertise</h1>
          <p className="text-xs sm:text-sm text-gray-light">Achieving Results Through Customized Solutions</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-purple-700 transform -translate-x-1/2"></div>

          {services.map((service) => (
            <div
              key={service.id}
              className={`relative mb-2 md:mb-4 flex flex-col md:flex-row ${service.position === 'left' ? 'md:justify-start' : 'md:justify-end'}`}
            >
              <motion.div
                initial={service.position === 'left' ? 'hiddenLeft' : 'hiddenRight'}
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                className={`w-full md:w-1/2 ${service.position === 'left' ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'} order-2 md:order-none`}
              >
                <div className={`p-4 md:p-6 rounded-lg ${service.position === 'left' ? 'md:text-right' : 'md:text-left'} text-center md:text-start`}>
                  <h3 className="text-lg sm:text-xl baseText font-medium text-purple-300 mb-2 sm:mb-4">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-light mb-4 md:mb-6 lg:mb-6">{service.description}</p>
                  <button className="text-xs sm:text-sm text-purple-300 hover:text-purple-100 whitespace-nowrap px-4 py-2 border border-purple-300 rounded-full hover:bg-gradient-to-r hover:from-[#3D05DD] hover:to-[#EFA4F2] transition-all duration-400 ease-in-out">
                    See more
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={iconVariants}
                className={`flex flex-col items-center order-1 md:order-none mb-4 md:mb-0 ${service.position === 'left' ? 'md:absolute md:left-1/2' : 'md:absolute md:left-1/2'} md:transform md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2`}
              >
                <div className={`${service.iconBgColor} rounded-full p-2 md:p-3 flex items-center justify-center shadow-lg w-14 h-14 md:w-20 md:h-16`}>
                  {service.icon}
                </div>
                <div className="hidden md:block w-0.5 h-[185px] bg-[#423155] relative bottom-[4px]"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      {/* <section className="relative px-4 py-16 sm:px-8 lg:px-20">
        <div className="absolute w-72 h-72 bg-gradient-to-r from-teal-500 to-blue-500/20 rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2 z-0"></div>

        <h2 className="font-poppins text-[22px] sm:text-[32px] font-bold mb-14 text-white text-center relative z-10">
          Experience
        </h2>

        <div className="relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-[2px] before:bg-teal-500">
          {experience.map((exp, index) => (
            <motion.div
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              key={index}
              className="relative pl-14 mb-14 z-10"
            >
              <div className="absolute left-2 top-3 w-4 h-4 bg-teal-400 rounded-full border-4 border-[#0f172a] shadow-lg animate-pulse z-20"></div>

              <div className="bg-gradient-to-r from-teal-500/30 to-blue-500/40 backdrop-blur-md border border-white/20 p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-teal-400/40 hover:scale-105 transition-all duration-300 ease-in-out transform">
                <div className="flex items-center mb-5">
                  <img
                    src={exp.img}
                    alt={exp.organization}
                    className="w-12 h-12 rounded-full mr-4 border border-gray-600 shadow-md"
                  />
                  <h3 className="text-white baseText text-xl sm:text-2xl font-semibold">
                    {exp.organization}
                  </h3>
                </div>

                {exp.postions.map((pos, idx) => (
                  <div key={idx} className="mb-5">
                    <h4 className="text-teal-300  text-lg font-semibold mb-1">{pos.title}</h4>
                    <p className="text-gray-400 text-sm mb-3">{pos.duration}</p>
                    <ul className="list-disc ml-5 text-dimWhite text-sm space-y-2">
                      {pos.contributions.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {pos.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="bg-teal-600/30 text-teal-300 text-xs px-3 py-1 rounded-full border border-teal-500/30 hover:bg-teal-500 hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section> */}
    </>
  );
}
