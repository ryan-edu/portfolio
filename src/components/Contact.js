import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import SocialHandles from "./SocialHandles";
import ContactData from "../data/contact";

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_rgkalby",
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_mcl14d9",
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "daXbffwPt1nxFY-bb",
};

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form data
  const validateForm = () => {
    if (!formData.user_name.trim()) {
      toast.error("Name is required!");
      return false;
    }
    if (!formData.user_email.trim()) {
      toast.error("Email is required!");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      toast.error("Please enter a valid email address!");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Message is required!");
      return false;
    }
    if (formData.message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long!");
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    // Check EmailJS configuration
    if (
      !EMAILJS_CONFIG.serviceId ||
      !EMAILJS_CONFIG.templateId ||
      !EMAILJS_CONFIG.publicKey
    ) {
      toast.error("Email service is not properly configured!");
      console.error("EmailJS configuration missing:", EMAILJS_CONFIG);
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );

      console.log("Email sent successfully:", result);
      toast.success("Message sent successfully! I'll get back to you soon.");

      // Reset form
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      // Handle different types of errors
      if (error.text) {
        if (error.text.includes("rate limit")) {
          toast.error("Too many requests. Please try again later.");
        } else if (error.text.includes("template")) {
          toast.error("Email template error. Please try again.");
        } else {
          toast.error("Failed to send message. Please try again.");
        }
      } else {
        toast.error(
          "Network error. Please check your connection and try again."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="text-gray-600 body-font ">
      <div className="px-3 py-5 mx-auto text-center md:mt-7 sm:mx-7 md:mx-12 lg:mx-32 xl:mx-56">
        <div id="contact" className="flex flex-col text-center w-full mb-4">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">
            Contact Me
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-once="false"
            className="text-lg font-medium leading-relaxed text-dark-orange "
          >
            Let's keep in touch
          </p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row w-full mx-auto rounded-xl bg-darkblue p-4 md:gap-7 lg:gap-9 lg:rounded-2xl xl:gap-10">
          <div className="p-2 w-full text-center lg:p-5 xl:p-7 md:w-1/2 lg:w-4/6">
            <h1
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="hidden md:block text-2xl lg:text-3xl text-dark-orange font-medium mb-3 lg:mb-4"
            >
              Get In Touch
            </h1>
            <div
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-5 mb-4 justify-center md:mb-5"
            >
              <SocialHandles />
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaPhoneAlt className="text-white" />
              <p className="text-white md:text-lg ">{ContactData.phone}</p>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center mb-4 md:gap-2 lg:gap-5"
            >
              <FaEnvelope className="text-white" />
              <a
                href={`mailto:${ContactData.email}`}
                className="text-white md:text-lg"
              >
                {ContactData.email}
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="false"
              className="flex gap-3 items-center md:gap-2 lg:gap-5"
            >
              <FaMapMarkerAlt className="text-white" />
              <p className="leading-normal text-start text-white md:text-lg">
                {ContactData.address}
              </p>
            </div>
          </div>
          <form
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            data-aos-once="false"
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex bg-whitesmoke flex-col p-2 rounded-lg md:w-1/2 md:p-4 lg:px-5 lg:py-7 lg:m-4 lg:w-3/5"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Your Full Name"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <input
                required
                placeholder="Your Email Address"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black p-2 leading-8 transition-colors duration-200 ease-in-out disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <textarea
                required
                placeholder="Your Message (minimum 10 characters)"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="mb-1 w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-black p-2 resize-none leading-6 transition-colors duration-200 ease-in-out disabled:bg-gray-100 disabled:cursor-not-allowed"
              ></textarea>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1500"
              data-aos-once="false"
              className="p-2 w-full"
            >
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-medium mx-auto my-3 text-white border-0 py-2 px-12 focus:outline-none rounded-xl text-lg transition duration-500 ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-dark-orange hover:scale-110 hover:bg-orange-600"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
