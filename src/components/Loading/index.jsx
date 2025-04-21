import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import "../../App.css"
const Loading = () => {
  const controls = useAnimation();
  const name = "IMRAN LATIF";
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      await controls.start("glow");
    };
    sequence();
  }, [controls]);

  return (
    <div className="elegant-loader">
      <motion.div 
        className="backdrop"
        initial={{ opacity: 0, scale: 1.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      
      <motion.div 
        className="name-container"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.08 }
          }
        }}
      >
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            className="char"
            variants={{
              hidden: { 
                opacity: 0, 
                y: 40,
                rotateX: 90
              },
              visible: {
                opacity: 1,
                y: 0,
                rotateX: 0,
                transition: {
                  type: "spring",
                  damping: 12,
                  stiffness: 200,
                  mass: 0.5
                }
              },
              glow: {
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 10px rgba(255,255,255,0.8)",
                  "0 0 0px rgba(255,255,255,0)"
                ],
                transition: {
                  delay: i * 0.03,
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }
              }
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        className="underline"
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: { 
            delay: name.length * 0.08 + 0.5,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }
        }}
      />
      
      <div className="particles">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              opacity: 0,
              scale: 0,
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              x: Math.random() * 200 - 100,
              y: Math.random() * 200 - 100
            }}
            transition={{
              delay: i * 0.2,
              duration: 4,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Loading;