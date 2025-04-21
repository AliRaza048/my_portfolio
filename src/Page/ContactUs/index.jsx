import React, { useState } from "react";
import {
  MessageSquare,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <>
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
            text-center mb-[60px]"
        >
          Contact Us
        </h1>
      </header>
      <div className="flex items-center justify-center p-6">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center lg:flex-row gap-12">
            {/* Left Side */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 space-y-10"
            >
              <div>
                <h1 className="text-xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 baseText bg-clip-text text-transparent">
                    DO YOU HAVE A PROJECT TO DISCUSS?
                  </span>
                </h1>

                <div className="flex items-center space-x-3">
                  <h2 className="text-md md:text-lg text-gray-300 font-medium">
                    GET IN TOUCH
                  </h2>
                  <MessageSquare className="text-gray-light" size={24} />
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg text-gray-400 mb-2">CONTACT</h3>
                  <a
                    href="mailto:web.smm.zty@gmail.com"
                    className="text-gray-light hover:text-blue-300 transition text-sm"
                  >
                    web.smm.zty@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-lg text-gray-400 mb-2">SOCIAL MEDIA</h3>
                  <div className="flex space-x-6">
                    {[Linkedin, Facebook, Instagram, MessageCircle, Send].map(
                      (Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="text-gray-light hover:text-white"
                        >
                          <Icon size={22} />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-xl md:text-2xl text-gray-light mb-6 font-semibold">
                CONTACT FORM
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <label htmlFor="name" className="block text-gray-light">
                  Name
                </label>
                <div className="flex items-center w-full h-[55px] rounded-xl border border-[#75368a] bg-[#1F1134] overflow-hidden">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full h-full px-4 bg-[transparent] text-white outline-none placeholder:text-gray-400"
                  />
                </div>

                {/* Email */}
                <label htmlFor="email" className="block text-gray-light">
                  Email
                </label>
                <div className="flex items-center w-full h-[55px] rounded-xl border border-[#75368a] bg-[#1F1134] overflow-hidden">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full h-full px-4 bg-[transparent] text-white outline-none placeholder:text-gray-400"
                  />
                </div>

                <label htmlFor="message" className="block text-gray-light">
                  Message
                </label>
                <div className="flex items-center w-full min-h-[100px] rounded-xl border border-[#75368a] bg-[#1F1134] overflow-hidden">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    className="w-full h-full px-4 py-3 resize-none bg-[transparent] text-white outline-none placeholder:text-gray-400"
                  />
                </div>

                <div className="pt-4 flex items-end justify-end">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-[#3D05DD] to-[#EFA4F2] text-white px-6 py-2 rounded-full font-medium text-sm"
                  >
                    Send
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import Lottie from "react-lottie-player";
// import style from "../../style";
// import Contactus2 from "../../lotties/Contactus2.json";
// import { motion } from "framer-motion";

// const Contactus = () => {
//   const lottieOptions = {
//     loop: true,
//     play: true,
//     animationData: Contactus2,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <motion.div
//       whileInView={{ y: [-40, 0], opacity: [0, 1] }}
//       transition={{ duration: 1 }}
//       className={` ${style.maxWidth} bg-bg-gradient `}
//     >
//       <header>
//         <h1
//           className="
//             font-poppins
//             font-semibold
//             text-[42px]
//             ss:text-[52px]
//             text-white
//             leading-[80px]
//             ss:leading-[80px]"
//         >
//           Contact Us
//         </h1>
//       </header>
//       <div className="flex flex-col md:flex-row items-center justify-center">
//         <aside className="hidden md:flex md:flex-1 ">
//           <div className="relative z-[5] w-[80%] max-w-[550px] transform hover:scale-105 transition-transform duration-300">
//             <Lottie {...lottieOptions} />
//           </div>
//         </aside>

//         <aside className="flex-1 w-full md:max-w-lg">
//           <form className="space-y-6 bg-[#2c5364] p-8 rounded-lg shadow-lg backdrop-blur-sm">
//             <div>
//               <label
//                 htmlFor="name"
//                 className="font-poppins text-white text-[14px] mb-2 block"
//               >
//                 Your Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="John Doe"
//                 className="
//                   w-full
//                   px-4
//                   py-3
//                   bg-gray-700
//                   text-white
//                   rounded-md
//                   border
//                   border-gray-600
//                   focus:border-teal-400
//                   focus:ring-2
//                   focus:ring-teal-400/50
//                   outline-none
//                   transition-all
//                   duration-300"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="email"
//                 className="font-poppins text-white text-[14px] mb-2 block"
//               >
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="john@example.com"
//                 className="
//                   w-full
//                   px-4
//                   py-3
//                   bg-gray-700
//                   text-white
//                   rounded-md
//                   border
//                   border-gray
//                   focus:border-teal
//                   focus:ring-2
//                   focus:ring-teal
//                   outline-none
//                   transition-all
//                   duration-300"
//               />
//             </div>
//             <div>
//               <label
//                 htmlFor="message"
//                 className="font-poppins text-white text-[14px] mb-2 block"
//               >
//                 Your Message
//               </label>
//               <textarea
//                 id="message"
//                 placeholder="How can I assist you today?"
//                 rows="4"
//                 className="
//                   w-full
//                   px-4
//                   py-3
//                   bg-gray-700
//                   text-white
//                   rounded-md
//                   border
//                   border-gray-600
//                   focus:border-teal
//                   focus:ring-2
//                   focus:ring-teal-400/50
//                   outline-none
//                   resize-none
//                   transition-all
//                   duration-300"
//               ></textarea>
//             </div>
//             <button
//               className="
//                block w-full rounded-md border border-orange px-4 py-1 text-white transition-colors duration-200 hover:bg-orange hover:text-gray-900"
//             >
//               Send Message
//             </button>
//           </form>
//         </aside>

//         <aside className="flex md:hidden items-center justify-center mt-12">
//           <div className="relative z-[5] w-[80%] max-w-[350px] transform hover:scale-105 transition-transform duration-300">
//             <Lottie {...lottieOptions} />
//           </div>
//         </aside>
//       </div>
//     </motion.div>
//   );
// };

// export default Contactus;
