import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import image from "../assets/image.png";
import resume from '../assets/Priyanshu_Resume.pdf';

const phrases = [
  "Full Stack Developer",
  "DSA Enthusiast (C++)",
  "Currently working on Advanced Backend",
];

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev === phrases.length - 1) setDirection(-1);
        else if (prev === 0) setDirection(1);
        return prev + direction;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [direction]);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Priyanshu_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="py-20 px-4 sm:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* For mobile: text content comes first */}
        <div className="md:hidden flex flex-col items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center w-full mb-8"
          >
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Priyanshu</span>
              </h1>

              <motion.div
                key={index}
                className="text-2xl font-semibold text-gray-300 h-8 mb-4"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {phrases[index]}
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Image  */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full flex justify-center mb-8"
          >
            <div className="relative w-56 h-56">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-75 animate-pulse z-0" />
              <img
                src={image}
                alt="Profile"
                className="relative w-full h-full rounded-2xl object-cover object-top border-4 border-gray-800 shadow-xl z-10"
              />
            </div>
          </motion.div>


          {/* Buttons */}
          <div className="w-full">
            <p className="text-lg text-gray-400 mb-6 text-center">
              Dedicated to crafting intuitive and high-performance web applications using modern frontend and backend technologies. Proficient in building responsive interfaces as well as designing robust server-side architectures. Continuously enhancing my problem-solving skills through hands-on experience with data structures and algorithms.
            </p>

            <div className="flex flex-col items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all w-full max-w-xs justify-center"
              >
                <FaDownload /> Download Resume
              </motion.button>

              <div className="flex gap-6 justify-center">
                <a href="https://github.com/codepriyanshu21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-singh-3648a627a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition">
                  <FaLinkedin />
                </a>
                <a href="mailto:priyanshusingh8233@gmail.com" className="text-gray-400 hover:text-red-400 text-2xl transition">
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="hidden md:flex md:flex-row items-center justify-between w-full">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left flex-1"
          >
            <div className="mb-6">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Priyanshu</span>
              </h1>

              <motion.div
                key={index}
                className="text-3xl font-semibold text-gray-300 h-12"
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="absolute"
                >
                  {phrases[index]}
                </motion.span>
              </motion.div>
            </div>

            <p className="text-lg text-gray-400 mb-8 max-w-xl">
              Dedicated to crafting intuitive and high-performance web applications using modern frontend and backend technologies. Proficient in building responsive interfaces as well as designing robust server-side architectures. Continuously enhancing my problem-solving skills through hands-on experience with data structures and algorithms.
            </p>

            <div className="flex flex-row gap-4 justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadResume}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                <FaDownload /> Download Resume
              </motion.button>

              <div className="flex gap-4 items-center">
                <a href="https://github.com/codepriyanshu21" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white text-2xl transition">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/priyanshu-singh-3648a627a" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 text-2xl transition">
                  <FaLinkedin />
                </a>
                <a href="mailto:priyanshusingh8233@gmail.com" className="text-gray-400 hover:text-red-400 text-2xl transition">
                  <HiOutlineMail />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 blur-lg opacity-75 animate-pulse" />
              <img
                src={image}
                alt="Profile"
                className="relative w-full h-full rounded-2xl object-cover object-top border-4 border-gray-800 shadow-xl"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}