import styles from "../../style";

const LetsConnect = () => {
  return (
    <section
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="bg-text-gradient text-gradient-custom">Let's</span>
          </p>
        </div>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="bg-text-gradient text-gradient-custom">Connect</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;
