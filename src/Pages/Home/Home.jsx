import { Link } from "react-router-dom";
import Container from "../../Layout/Container";
import image from "../../assets/images/firoz-dp.png";
import resume from "../../assets/firoz-resume.pdf";
import "./home.css";
import CountUp from "react-countup";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";

const Home = () => {
  return (
    <Container>
      <div>
        <div className="flex  flex-col-reverse lg:flex-row justify-between lg:my-20 font-Poppins items-center align-middle  lg:space-x-10 px-5">
          <div className=" space-y-5 pt-5 text-center lg:text-left">
            <div className="space-y-2 font-Baskerville text-gray-300">
              <p className="text-sm md:text-xl md:font-bold">Web Developer</p>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
                Hello I&apos;m
              </h1>
              <h2
                className="text-5xl lg:text-7xl text-green-400 tracking-wide
 font-bold "
              >
                Firoz Al Hasan
              </h2>
            </div>
            <p
              className=" md:w-96  tracking-wide
"
            >
              I am a Web Developer at heart and create features that are best
              suited for the job at hand.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start md:items-center md:space-x-4">
              <a href={resume} download="resume">
                <button
                  type="button"
                  className=" duration-300 hover:bg-green-400 text-white hover:text-black font-bold border border-green-400 rounded-md my-5 px-8 py-2"
                >
                  Download CV
                </button>
              </a>
              <ul className="flex justify-center lg:justify-start space-x-4 text-3xl">
                <li>
                  <Link to={"https://github.com/FirozTheProgrammer"}>
                    <FaGithub></FaGithub>
                  </Link>
                </li>
                <li>
                  <Link to={"https://www.facebook.com/FirozTheProgrammer/"}>
                    <FaFacebook></FaFacebook>
                  </Link>
                </li>
                <li>
                  <Link to={"https://twitter.com/Developer_Firoz"}>
                    <FaSquareXTwitter />
                  </Link>
                </li>
                <li>
                  <Link
                    target="blank"
                    to={"https://www.linkedin.com/in/firoz-al-hasan/"}
                  >
                    <FaLinkedin></FaLinkedin>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="box my-8 lg:my-0">
            <img
              className="w-[300px] my-6 md:w-full p-1 border-4 z-10 border-green-400 rounded-full"
              src={image}
              alt=""
            />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row  items-center space-y-5 lg:space-y-0  lg:justify-between md:px-5 py-5 my-8 lg:my-0 lg:py-0 -ml-20 lg:-ml-0">
          <div className="w-10 flex space-x-2">
            <p className="text-5xl font-semibold font-Poppins">
              {" "}
              <CountUp start={0} end={2} duration={1} />
            </p>
            <p className="text-base text-gray-400">Years of experience</p>
          </div>
          <div className="w-10 flex space-x-2">
            <p className="text-5xl font-semibold font-Poppins">
              {" "}
              <CountUp start={0} end={17} duration={3} />+
            </p>
            <p className="text-base text-gray-400">Project completed</p>
          </div>
          <div className="w-10 flex space-x-2">
            <p className="text-5xl font-semibold font-Poppins">
              {" "}
              <CountUp start={0} end={7} duration={2} />
            </p>
            <p className="text-base text-gray-400">Technologies mastered</p>
          </div>
          <div className="w-10 flex space-x-2">
            <p className="text-5xl font-semibold font-Poppins">
              <CountUp start={0} end={500} duration={3} />+
            </p>
            <p className="text-base text-gray-400">Code commites</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
