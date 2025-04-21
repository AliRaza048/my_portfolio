import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Page/Home";
import Skills from "./Page/Skills";
import Education from "./Page/Education";
import Projects from "./Page/Projects";
import Contactus from "./Page/ContactUs";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import Services from "./Page/Services";
import Loading from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  return (
    <AnimatePresence>
      <div className="p-6 text-textPrimary  font-primary">
        {/* {isLoading ? (
          <Loading key="loading" />
        ) : ( */}
          <motion.section
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
          >
            <Header />
            <Home />
            <Skills />
            <Services/>

            <Education />
            <Projects />
            <Contactus />
            {/* <Footer/> */}
          </motion.section>
        {/* )} */}
      </div>
    </AnimatePresence>
  );
}

export default App;
