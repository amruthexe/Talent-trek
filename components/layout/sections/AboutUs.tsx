"use client";

import { motion } from "framer-motion";
import { Briefcase, BookCheck, BadgeCheck, Globe2, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-white text-black py-16 px-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center ">About Us</h1>
        <p className="text-lg leading-8 mb-10 text-center">
          At <strong>Talent Trek E-Learning</strong>, we're committed to empowering individuals with the skills and knowledge they need to excel. Our team of expert instructors brings years of industry experience to the table, ensuring that our learners receive top-notch training in their chosen fields.
        </p>
        <p className="text-lg leading-8 mb-10 text-center">
          Join us today and embark on a journey of discovery, growth, and endless possibilities. Let's chart a course to success together!
        </p>

        <div className="grid sm:grid-cols-2  gap-8 mb-16">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <Briefcase className="w-6 h-6" /> Our Mission
            </h2>
            <p className="text-base leading-7">
              To provide accessible, high-quality online education and practical internships that empower individuals to achieve their career and personal development goals.
            </p>
          </motion.div>

          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-3">
              <Globe2 className="w-6 h-6" /> Our Vision
            </h2>
            <p className="text-base leading-7">
              To become a global leader in digital education and virtual internships, delivering industry-ready skills and empowering learners across the globe.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 pt-8 md:grid-cols-4 gap-6 text-center mb-20">
          <div>
            <BookCheck className="mx-auto text-blue-700 w-8 h-8 mb-2" />
            <h4 className="font-medium text-lg">Certified Courses</h4>
            <p className="text-sm text-gray-700">Expert-led programs with credentials.</p>
          </div>
          <div>
            <Briefcase className="mx-auto text-blue-700 w-8 h-8 mb-2" />
            <h4 className="font-medium text-lg">Virtual Internships</h4>
            <p className="text-sm text-gray-700">Flexible remote work experience.</p>
          </div>
          <div>
            <BadgeCheck className="mx-auto text-blue-700 w-8 h-8 mb-2" />
            <h4 className="font-medium text-lg">Certifications</h4>
            <p className="text-sm text-gray-700">Boost your professional profile.</p>
          </div>
          <div>
            <Globe2 className="mx-auto text-blue-700 w-8 h-8 mb-2" />
            <h4 className="font-medium text-lg">Global Access</h4>
            <p className="text-sm text-gray-700">Anytime, anywhere learning.</p>
          </div>
        </div>

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6" /> Our Location
          </h2>
          <p className="mb-4 text-base">
            324, 7th Cross, 7th Main, BTM 2nd Stage, Bangalore, Karnataka - 560076, India
          </p>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <iframe
              src="https://www.bing.com/maps/embed?h=300&w=500&cp=12.906511~77.602398&lvl=16.72&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
              width="100%"
              height="300"
              frameBorder="0"
              allowFullScreen
              title="Talent Trek Location"
              className="rounded-xl"
            ></iframe>
            <div className="flex flex-col gap-4 justify-center">
              <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
              <div className="flex gap-4 text-2xl">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-700 hover:text-blue-900" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-pink-600 hover:text-pink-800" />
                </a>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-green-600 hover:text-green-800" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-blue-600 hover:text-blue-800" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

       
      </motion.div>
    </main>
  );
};

export default AboutUs; 