import ProgressBar from "@ramonak/react-progress-bar";
import image from "../../assets/images/developer.jpg";
import resume from "../../assets/firoz-resume.pdf";
import { useState } from "react";
import { SiWebflow } from "react-icons/si";

import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiFirebase,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
const About = () => {
  const [loader, setLoader] = useState(false);
  if (loader) {
    setLoader(true);
    return <span className="loading loading-ring loading-lg"></span>;
  }
  return (
    <div className="pt-20 md:pt-10">
      <div className="px-10 lg:px-20">
        <h2 className="font-Poppins text-white text-3xl lg:text-5xl font-bold">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-20 mt-5 pb-10 border-b border-gray-300 ">
          <img src={image} className="w-72 md:w-5/12 rounded-lg" alt="" />
          <div className="text-left mt-4 md:mt-0">
            <h3 className="text-3xl text-green-50 lg:text-5xl font-bold">
              Firoz Al Hasan
            </h3>
            <p className="text-base md:text-xl text-gray-300 md:mt-2">
              Front-End Web Developer
            </p>
            <div className="group mt-8 inline-flex flex-wrap  items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <SiWebflow />{" "}
              </span>
              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <FaGithub />
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border bg-green-50 p-3 text-black text-xs transition-colors hover:border-pink-500/10 hover hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
        </div>
        <div className="space-y-5 py-10 border-b border-gray-300 text-white">
          <p>
            I&apos;m Firoz, a junior MERN stack web developer excited about
            building cool web applications. I know my way around HTML, CSS,
            MongoDB, Express.js, React.js, and Node.js and enjoy making websites
            work smoothly.
          </p>
          <p>
            Though I&apos;m just starting out, I&apos;ve played around with the
            MERN stack during my studies and personal projects. I like creating
            websites that look good and are easy to use with React.js. I also
            know how to handle data using MongoDB.
          </p>
          <p>
            I&apos;m all about learning and adapting to the fast-changing world
            of web development. Excited to team up with pros, bring in new
            ideas, and grow as a MERN stack developer.
          </p>
        </div>
        <div className="py-10 flex flex-col md:flex-row justify-start md:justify-between md:items-center border-b border-gray-300 space-y-4">
          <ul className="space-y-2">
            <li className="text-green-50 font-bold">
              Birthday:
              <span className="text-gray-300 font-normal"> 25.11.2002</span>
            </li>
            <li className="text-green-50 font-bold">
              Age:<span className="text-gray-300 font-normal"> 21</span>
            </li>
            <li className="text-green-50 font-bold">
              Address:
              <span className="text-gray-300 font-normal">
                {" "}
                Tangail,Dhaka,Bangladesh
              </span>
            </li>
            <li className="text-green-50 font-bold">
              Email:
              <span className="text-gray-300 font-normal">
                {" "}
                firozhasan1542@gmail.com
              </span>
            </li>
            <li className="text-green-50 font-bold">
              Phone:
              <span className="text-gray-300 font-normal">
                {" "}
                +880 1734-134799
              </span>
            </li>
          </ul>
          <ul className="space-y-2">
            <li className="text-green-50 font-bold">
              Nationality:
              <span className="text-gray-300 font-normal"> Bangladesh</span>
            </li>
            <li className="text-green-50 font-bold">
              Study:
              <span className="text-gray-300 font-normal">
                {" "}
                HABHIT, Tangail
              </span>
            </li>
            <li className="text-green-50 font-bold">
              Degree:
              <span className="text-gray-300 font-normal">
                {" "}
                Diploma in Computer
              </span>
            </li>
            <li className="text-green-50 font-bold">
              Interest:
              <span className="text-gray-300 font-normal">
                {" "}
                Playing Football
              </span>
            </li>
            <li className="text-green-50 font-bold">
              Freelance:
              <span className="text-gray-300 font-normal"> Available</span>
            </li>
          </ul>
        </div>

        {/* dowload cv or resumy */}
        <div className="flex gap-2 md:space-x-4 lg:space-x-6">
          <a href={resume} download="resume">
            <button
              type="button"
              className="bg-green-400 duration-300 hover:bg-[#EBE9FC] text-black font-bold rounded-md my-10 px-4 py-2"
            >
              Download CV
            </button>
          </a>
          <a href={resume} download="resume">
            <button
              type="button"
              className="bg-[#EBE9FC] duration-300 hover:bg-green-400 text-black font-bold rounded-md my-10 px-4 py-2"
            >
              Download CV
            </button>
          </a>
        </div>
      </div>
      <div className="bg-[#EBE9FC] px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-start md:justify-between md:items-center md:space-y-0 md:space-x-10">
        <div className="w-full text-black md:w-2/4 space-y-4">
          <h2 className="text-black font-bold text-xl">Programming Skills</h2>
          <div className="">
            <p>JavaScript</p>
            <ProgressBar
              completed={70}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
          <div className="">
            <p>React</p>
            <ProgressBar
              completed={80}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
          <div className="">
            <p>Node</p>
            <ProgressBar
              completed={65}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
        </div>
        <div className="w-full md:w-2/4 text-black space-y-4 mt-8 md:mt-0">
          <h2 className="text-black text-xl font-bold">Language Skills</h2>
          <div className="">
            <p>Bangla</p>
            <ProgressBar
              completed={85}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
          <div className="">
            <p>English</p>
            <ProgressBar
              completed={70}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
          <div className="">
            <p>Hindi</p>
            <ProgressBar
              completed={55}
              bgColor="#000000"
              height="3px"
              borderRadius="0"
              labelAlignment="outside"
              isLabelVisible={false}
              labelColor="#070707"
              animateOnRender
            />
          </div>
        </div>
      </div>
      <div className="px-10 lg:px-20 py-10 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="space-y-3">
          <h2 className="text-white text-xl font-bold">Knowledge</h2>
          <ul className="space-y-2">
            <li className="text-gray-400 font-normal">HTML, CSS</li>
            <li className="text-gray-400 font-normal">
              Tailwindcss, Bootstrap
            </li>
            <li className="text-gray-400 font-normal">ReactJS</li>
            <li className="text-gray-400 font-normal">Node, Express</li>
            <li className="text-gray-400 font-normal">Mongodb, Firebase</li>
          </ul>
        </div>
        <div className="space-y-3 mt-4 md:mt-0">
          <h2 className="text-white text-xl font-bold">Interests</h2>
          <ul className="space-y-2">
            <li className="text-gray-400 font-normal">Create Mobile App</li>
            <li className="text-gray-400 font-normal">Site Optimization</li>
            <li className="text-gray-400 font-normal">Custom Website</li>
            <li className="text-gray-400 font-normal">Learn E-commerce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
