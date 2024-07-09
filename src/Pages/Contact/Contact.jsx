import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
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
    <div className="pt-20 md:pt-10">
      <div className="px-10 lg:px-20 ">
        <h2 className="text-black text-3xl font-bold mb-5">Get in Touch</h2>
        <div className="flex flex-col md:flex-rowjustify-center items-center space-x-10 py-10">
          <p className="text-black font-bold flex  items-center space-x-2 text-xl">
            {" "}
            Phone:{" "}
            <span className="text-gray-500 font-normal"> +880 1734-134799</span>
          </p>
          <p className="text-black font-bold flex items-center space-x-2 text-xl">
            {" "}
            Email:
            <span className="text-gray-500 font-normal">
              firozhasan1542@gmail.com
            </span>
          </p>
        </div>
        <form className="space-y-5" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="to_name"
            placeholder="Name"
            className="input input-bordered rounded-none input-md w-full bg-[#f8f8f8]"
          />
          <input
            type="text"
            name="from_name"
            placeholder="Email"
            className="input input-bordered rounded-none input-md w-full bg-[#f8f8f8]"
          />
          <input
            type="text"
            name="message"
            placeholder="Message"
            className="input input-bordered rounded-none input-lg w-full bg-[#f8f8f8] min-h-[150px]"
          />
          <input
            type="submit"
            value="Send Message"
            className="bg-black text-white my-10 px-4 py-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
