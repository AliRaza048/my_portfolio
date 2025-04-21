import { motion } from "framer-motion";

const Logo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const nameVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      filter: "blur(2px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "backOut",
      },
    },
  };

  return (
    <motion.div
      className="flex items-center gap-3 cursor-pointer h-[60px] text-blue font-montserrat font-semibold"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col leading-none ml-2"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.8,
            },
          },
        }}
      >
        <motion.span
          className="text-[1.2rem] tracking-[1px]"
          variants={nameVariants}
        >
          Imran
        </motion.span>

        <motion.span
          className="text-[1.4rem] tracking-[2px] text-textPrimary drop-shadow-[0_0_8px_rgba(58,134,255,0.6)]"
          variants={{
            ...nameVariants,
            visible: {
              ...nameVariants.visible,
              transition: {
                ...nameVariants.visible.transition,
                delay: 0.9,
              },
            },
          }}
        >
          Latif
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
