import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j90kjtl",
        "template_6buck6g",
        form.current,
        "fFHFC46jKBIYNb3DU"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.form.resetFields();
  };
  const [loader, setLoader] = useState(false);
  if (loader) {
    setLoader(true);
    return <span className="loading loading-ring loading-lg"></span>;
  }
  return (
    <div className="pt-10 md:pt-10">
      <div className="px-10 lg:px-20 ">
        <div className="text-center">
          <h2 className="text-white text-3xl lg:text-5xl font-bold mb-5">
            Get in Touch
          </h2>
          <p className=" lg:px-40">
            Have a question or a project idea? I&apos;d love to hear from you!
            Reach out and let&apos;s create something amazing together.
          </p>
        </div>

        {/* two colunm */}
        <div className="flex flex-col  lg:my-20 lg:flex-row-reverse justify-between  lg:gap-20">
          {/* info section */}
          <div className="flex-1 flex flex-col py-10 font-Poppins  justify-center space-y-4 ">
            {/* phone section */}
            <div className="flex items-center space-x-5">
              <div className="bg-[#28272C] p-4 inline-block rounded-md ">
                <FaPhoneAlt className="  text-2xl "></FaPhoneAlt>
              </div>{" "}
              <div>
                <span className="text-gray-500 font-bold flex  items-center  text-base">
                  {" "}
                  Phone:{" "}
                </span>
                <p className="text-gray-200 text-lg "> +880 1734-134799</p>
              </div>
            </div>

            {/* email section */}
            <div className="flex items-center space-x-5">
              <div className="bg-[#28272C] p-4 inline-block rounded-md ">
                <MdEmail className="  text-2xl "></MdEmail>
              </div>{" "}
              <div>
                <span className="text-gray-500 font-bold flex  items-center  text-base">
                  {" "}
                  Email:
                </span>
                <p className="text-gray-200 text-lg ">
                  {" "}
                  firozhasan1542@gmail.com
                </p>
              </div>
            </div>

            {/* home address */}
            <div className="flex items-center space-x-5">
              <div className="bg-[#28272C] p-4 inline-block rounded-md ">
                <FaLocationDot className="  text-2xl "></FaLocationDot>
              </div>{" "}
              <div>
                <span className="text-gray-500 font-bold flex  items-center  text-base">
                  {" "}
                  Address:
                </span>
                <p className="text-gray-200 text-lg ">
                  {" "}
                  Tangail, Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>

          {/* from section */}
          <div className="flex-1 bg-[#28272C] p-10 rounded-xl">
            <div className="mb-10 font-Baskerville space-y-3">
              <h3 className="text-4xl text-green-400">
                {" "}
                Let&apos;s Work Together
              </h3>
              <p className="font-Poppins">
                Ready to bring your ideas to life? Let&apos;s collaborate and
                create something extraordinary. Whether it&apos;s a new project
                or an exciting opportunity, I&apos;m eager to contribute my
                skills and expertise. Get in touch, and let&apos;s make it
                happen!
              </p>
            </div>
            <form
              className=" grid grid-cols-1 lg:grid-cols-2 gap-6"
              ref={form}
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="to_name"
                placeholder="Name"
                className="input input-bordered col-span-2 lg:col-span-1  input-md rounded-sm  bg-[#1C1B22]"
              />
              <input
                type="text"
                name="from_name"
                placeholder="Email"
                className="input input-bordered col-span-2 lg:col-span-1  input-md  rounded-sm  bg-[#1C1B22]"
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                className="input input-bordered rounded-md input-lg col-span-2  bg-[#1C1B22] min-h-[150px]"
              />
              <input
                type="submit"
                value="Send Message"
                className="bg-green-400 text-center cursor-pointer text-black btn  duration-300 hover:bg-white font-semibold font-Poppins col-start-1 col-span-2 rounded-md px-4 py-2"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
