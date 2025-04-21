import React from "react";
import style from "../../style";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div
      whileInView={{ y: [-40, 0], opacity: [0, 1] }}
      transition={{ duration: 1 }}
    >
      <footer className=" bg-gradient-bg py-6  p-6">
        <section className={`${style.maxWidth}`}>
          <h1 className="text-xl font-bold text-gray font-poppins  hover:text-gray hover:text-gray">
            Imran Latif
          </h1>
          <p
            className={`font-poppins font-normal text-dimWhite mb-4 text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
          >
            A software engineer is a computer scientist who designs, develops,
            tests, and maintains software applications.
          </p>
          <div className="flex gap-4 text-white mb-4">
            <GitHubIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
            <EmailIcon fontSize="large" />
            <XIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
          </div>
          {/* <div className="flex gap-6 font-poppins ">
          <a target="_blank"> 
            <Button styles="mt-10 mr-3 inline-flex items-center justify-center">
              Resume
            </Button>
          </a>
          <a target="_blank">
            <Button styles="mt-10 inline-flex items-center justify-center">
              Star
            </Button>
          </a>
        </div> */}
        </section>
      </footer>
    </motion.div>
  );
}
