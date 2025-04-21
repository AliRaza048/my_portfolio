import Lottie from "react-lottie-player";
import style from "../../style";
import HomeIcon from "../../lotties/HomeIcon.json";
import LetsConnect from "../../components/sections/LetsConnect";
// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: HomeIcon,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row  justify-between flex-col mt-10 ${style.maxWidth}`}
    >
      <div
        className={`${style.flexStart} flex-1 flex-col xl:px-0 sm:px-4 px-6`}
      >
        <div className="flex flex-row justify-between items-center w-full text-white">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]">
            Hi there!
            <br className="sm:block hidden" /> I am
          </h1>
          {/* <div className={`ss:flex hidden md:mr-4 mr-0 `}>
            <LetsConnect />
          </div> */}
        </div>

        <h1 className="font-poppins baseText font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full">
          <span className="">imran Latif</span>
        </h1>
        <p className={`${style.paragraph} max-w-[470px] mt-5 text-justify`}>
          Software Developer from Pakistan who is either busy improving his craft
          or pondering over the next big idea.
        </p>
      </div>
      <div></div>
      <div className={`flex-1 flex ${style.flexCenter} md:my-0 my-10 relative `}>
        <div className="relative z-index-[5] h-[90%] w-[85%] ">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"></div>
      </div>

      <div className={`ss:hidden ${style.flexCenter}`}>
        <LetsConnect />
      </div>
    </section>
  );
};

export default Home;
