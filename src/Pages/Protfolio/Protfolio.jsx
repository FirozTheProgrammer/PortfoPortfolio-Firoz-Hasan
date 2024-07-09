// import { Link } from "react-router-dom";
import { useState } from "react";
import img1 from "../../assets/images/car_shop.jpeg";
import img2 from "../../assets/images/phone_Express.jpeg";
import img3 from "../../assets/images/hockeys.jpeg";
import img4 from "../../assets/images/gamerzone.jpeg";
import img5 from "../../assets/images/mascara.jpeg";

import { FaNodeJs, FaReact } from "react-icons/fa6";
import {
  SiFirebase,
  SiMongodb,
  SiReactrouter,
  SiTailwindcss,
} from "react-icons/si";
import { Link } from "react-router-dom";

const Protfolio = () => {
  const [loader, setLoader] = useState(false);
  if (loader) {
    setLoader(true);
    return <span className="loading loading-ring loading-lg"></span>;
  }
  return (
    <div className="pt-20 md:pt-10  px-10 lg:px-20">
      <div className="lg:mb-20 text-center ">
        <h2 className="text-white text-3xl lg:text-5xl text-center font-bold mb-5 ">
          Creative Portfolio{" "}
        </h2>
        <p className="text-gray-300 lg:px-32">
          Welcome to my project portfolio! Here, you will find a curated
          selection of my work, showcasing my skills and passion for web
          development. Each project highlights my dedication to delivering
          innovative solutions, utilizing cutting-edge technologies, and
          continuously pushing the boundaries of creativity and technical
          expertise. Explore my projects to see the diverse range of challenges
          I have tackled and the impactful results I have achieved.
        </p>
      </div>
      <div className="grid  md:grid-cols-2 gap-4 md:gap-10 lg:gap-20">
        {/* <Link to={'https://tech-info-5ab1a.web.app/'} target="_blank" className="tooltip" data-tip="View Live" >
                    <img className="max-h-[500px]" src={img1} alt="" />
                </Link>
                <Link to={'https://brand-shop-a4585.web.app/'} target="_blank" className="tooltip" data-tip="View Live">
                    <img className="max-h-[500px]" src={img2} alt="" />
                </Link>
                <Link to={'https://hotel-booking-fc964.web.app/'} target="_blank" className="tooltip" data-tip="View Live">
                    <img className="max-h-[500px]" src={img3} alt="" />
                </Link> */}

        {/* finall desing touch */}
        <div className="relativeflex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img2} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                Phone Express
              </h5>
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              This project is built using the MERN stack (MongoDB, Express,
              React, Node.js) and styled with Tailwind CSS. It is a
              comprehensive platform for buying and selling phones with features
              such as user authentication, product management, shopping cart,
              and an admin panel.
            </p>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
          <div className="flex space-x-3 p-6 pt-3">
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={
                "https://github.com/FirozTheProgrammer/Phone-Express-E-Commerce-MERN-Client"
              }
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                Code Link
              </button>
            </Link>
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://phone-express-cd6d7.web.app/"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                {" "}
                Website Link
              </button>
            </Link>
          </div>
        </div>
        {/* finall desing touch */}
        <div className="relativeflex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img5} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                MASCARA SIZZLE
              </h5>
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              This project is built using the MERN stack (MongoDB, Express,
              React, Node.js) and styled with Tailwind CSS. It is a
              comprehensive platform for restaurant services with features such
              as user authentication, menu management, reservation system, and
              an admin panel.
            </p>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
          <div className="flex space-x-3 p-6 pt-3">
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={
                "https://github.com/FirozTheProgrammer/Mascara-Sizzle-Restaurant-Client-"
              }
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                Code Link
              </button>
            </Link>
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://bistro-boss-restuarent.vercel.app/"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                {" "}
                Website Link
              </button>
            </Link>
          </div>
        </div>

        <div className="relative card grid-cols  flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img1} />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="card-body flex-col justify-between">
            <div className="flex flex-col justify-between">
              <div className="mb-3 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Brand Shop
                </h5>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                This project is built using the MERN stack (MongoDB, Express,
                React, Node.js) and styled with Tailwind CSS. It is a
                comprehensive platform for buying and selling cars with features
                such as user authentication, product management, shopping cart,
                and an admin panel.
              </p>
              <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
                <span
                  data-tooltip-target="money"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <SiTailwindcss></SiTailwindcss>
                </span>
                <span
                  data-tooltip-target="wifi"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <FaReact></FaReact>
                </span>

                <span
                  data-tooltip-target="bedrooms"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <SiReactrouter />
                </span>

                <span
                  data-tooltip-target="tv"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <FaNodeJs></FaNodeJs>
                </span>
                <span
                  data-tooltip-target="fire"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <SiMongodb></SiMongodb>
                </span>
                <span
                  data-tooltip-target="Firebase"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  <SiFirebase></SiFirebase>
                </span>
                <span
                  data-tooltip-target="more"
                  className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
                >
                  +5
                </span>
              </div>
            </div>
            <div className=" pt-3">
              <Link
                to={"https://brand-shop-a4585.web.app"}
                target="_blank"
                data-tip="View Live"
              >
                <button
                  className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* finall desing touch */}
        <div className="relativeflex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img3} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                Hockeys Club Landing Page{" "}
              </h5>
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              As the pinnacle of our organization, our professional hockey club
              exemplifies the highest standard of skill, dedication, and
              competition. Witness the thrill of elite-level play as our
              professional athletes compete at the highest echelons of the
              sport.
            </p>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
          <div className="flex space-x-3 p-6 pt-3">
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={
                "https://github.com/FirozTheProgrammer/Hockey-s-Club-Landing-Page-Using-Tailwind-CSS"
              }
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                Code Link
              </button>
            </Link>
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={
                "https://firoztheprogrammer.github.io/Hockey-s-Club-Landing-Page-Using-Tailwind-CSS/"
              }
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                {" "}
                Website Link
              </button>
            </Link>
          </div>
        </div>
        {/* finall desing touch */}
        <div className="relativeflex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img4} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                Gamer Zone Landing Page{" "}
              </h5>
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              As the pinnacle of our organization, our professional hockey club
              exemplifies the highest standard of skill, dedication, and
              competition. Witness the thrill of elite-level play as our
              professional athletes compete at the highest echelons of the
              sport.
            </p>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
          <div className="flex space-x-3 p-6 pt-3">
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://github.com/FirozTheProgrammer/B8A2GamerZone"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                Code Link
              </button>
            </Link>
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://firoztheprogrammer.github.io/B8A2GamerZone/"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                {" "}
                Website Link
              </button>
            </Link>
          </div>
        </div>
        {/* finall desing touch */}
        <div className="relativeflex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
          <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={img4} alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            <button
              className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-white transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-dark="true"
            >
              <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                </svg>
              </span>
            </button>
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                Gamer Zone Landing Page{" "}
              </h5>
            </div>
            <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
              As the pinnacle of our organization, our professional hockey club
              exemplifies the highest standard of skill, dedication, and
              competition. Witness the thrill of elite-level play as our
              professional athletes compete at the highest echelons of the
              sport.
            </p>
            <div className="group mt-8 inline-flex flex-wrap items-center gap-2">
              <span
                data-tooltip-target="money"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiTailwindcss></SiTailwindcss>
              </span>
              <span
                data-tooltip-target="wifi"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaReact></FaReact>
              </span>

              <span
                data-tooltip-target="bedrooms"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiReactrouter />
              </span>

              <span
                data-tooltip-target="tv"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <FaNodeJs></FaNodeJs>
              </span>
              <span
                data-tooltip-target="fire"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiMongodb></SiMongodb>
              </span>
              <span
                data-tooltip-target="Firebase"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                <SiFirebase></SiFirebase>
              </span>
              <span
                data-tooltip-target="more"
                className="cursor-pointer rounded-full border border-pink-500/5 bg-pink-500/5 p-3 text-black transition-colors hover:border-pink-500/10 hover:bg-pink-500/10 hover:!opacity-100 group-hover:opacity-70"
              >
                +5
              </span>
            </div>
          </div>
          <div className="flex space-x-3 p-6 pt-3">
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://github.com/FirozTheProgrammer/B8A2GamerZone"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                Code Link
              </button>
            </Link>
            <Link
              className="block w-full select-none rounded-lg bg-black py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              to={"https://firoztheprogrammer.github.io/B8A2GamerZone/"}
              target="_blank"
            >
              <button type="button" data-ripple-light="true">
                {" "}
                Website Link
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protfolio;
