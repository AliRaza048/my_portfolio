import React from "react";
import { ExternalLink } from "lucide-react";
import imgone from "../../assets/Images/portfolioimgone.avif";

const projects = [
  {
    id: 1,
    title: "Miss Symetria - Zadbaj o siebie, poczuj harmonie",
    image: imgone,
    type: "Website Coding (HTML, CSS, JS)",
  },
  {
    id: 2,
    title: "Miss Symetria - Zadbaj o siebie, poczuj harmonie",
    image:
      "https://images.unsplash.com/photo-1541560052-77ec1bbc09f7?q=80&w=1000&auto=format&fit=crop",
    type: "Website Coding (HTML, CSS, JS)",
  },
  {
    id: 3,
    title: "Miss Symetria - Zadbaj o siebie, poczuj harmonie",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop",
    type: "Website Coding (HTML, CSS, JS)",
  },
  {
    id: 4,
    title: "MAKING BRANDS STAND OUT OUR OBSESSION",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
    type: "Website Coding (HTML, CSS, JS)",
  },
  {
    id: 5,
    title: "Miss Symetria - Zadbaj o siebie, poczuj harmonie",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1000&auto=format&fit=crop",
    type: "Website Coding (HTML, CSS, JS)",
  },
  {
    id: 6,
    title: "MAKING BRANDS STAND OUT OUR OBSESSION",
    image:
      "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1000&auto=format&fit=crop",
    type: "Website Coding (HTML, CSS, JS)",
  },
];

export default function PortfolioGrid() {
  return (
    <div className="min-h-screen bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
      <h1
        className="
              font-poppins
              font-semibold
              text-[42px]
              ss:text-[52px]
              text-white
              leading-[80px]
              ss:leading-[80px]
              text-center
              mb-[70px]"
      >
        Projects
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl overflow-hidden bg-gray-900 shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
      <div className="w-full h-60 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex justify-between items-center text-gray-300">
        <div>
          <div className="h-1 w-12 bg-purple-600 mb-2 rounded"></div>
          <p className="text-sm md:text-base font-medium">{project.type}</p>
        </div>
        <button className="hover:text-white transition-colors duration-200">
          <ExternalLink size={20} />
        </button>
      </div>
    </div>
  );
}

// import React from "react";
// import style from "../../style";
// import { header, projects } from "../../constant";
// import * as Icons from "react-icons/si";
// import { IconButton } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// const Projects = () => {
//   // const navigate = useNavigate();
//   return (
//     <motion.div
//       whileInView={{ y: [-40, 0], opacity: [0, 1] }}
//       transition={{ duration: 1 }}
//       className={` ${style.maxWidth} mt0 `}
//     >
//       <header>
//         <h1
//           className="
//               font-poppins
//               font-semibold
//               text-[42px]
//               ss:text-[52px]
//               text-white
//               leading-[80px]
//               ss:leading-[80px]"
//         >
//           {header.projectTitle}
//         </h1>
//         <article className="flex flex-wrap justify-around p-4 mt-4">
//           {projects.map((item, index) => (
//             <aside className="flex flex-col hover:bg-[#203a43] flex-shrink-0 md:w-[550px] w-[100%] justify-around rounded-[10px] flex-col mb-8 border border-gray cursor-pointer p-8 transition-colors duration-300">
//               <div className="flex gap-4">
//                 <img
//                   src={item.img}
//                   className="w-[80px] h-[80px] rounded-full z-[2] mb-4"
//                 />
//                 <div className="flex flex-col  mt-2">
//                   <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[22px] mb-2">
//                     {item.projectName}
//                   </h4>
//                   <h5
//                     className="
//                     font-poppins font-normal text-dimWhite text-[15px] mb-1"
//                   >
//                     {item.Stack}
//                   </h5>
//                   <div
//                     key={index}
//                     className="flex gap-4  text-center items-center"
//                   >
//                     {item.icons.map(({ icon, index }) => {
//                       const IconComponent = Icons[icon];
//                       return (
//                         <IconComponent
//                           title={index}
//                           className="text-dimWhite text-[20px] hover:text-teal-200 "
//                         />
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//               <p className=" text-dimWhite text-justify dark:text-gray group-hover:text-gray-300 font-poppins">
//                 {item.description}
//               </p>
//               <div className="flex">
//                 <IconButton>
//                   <item.githubIcon className="text-dimWhite" fontSize="large" />
//                 </IconButton>
//                 <IconButton>
//                   <item.linkedinIcon className="text-dimWhite " fontSize="large" />
//                 </IconButton>
//               </div>
//             </aside>
//           ))}
//         </article>
//       </header>
//     </motion.div>
//   );
// };
// export default Projects;
