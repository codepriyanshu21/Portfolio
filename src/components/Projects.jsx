import { motion } from "framer-motion";
import { FaGithub, } from "react-icons/fa";
import FoodieHaven from '../assets/FoodieHaven.png'
import jobPortal from '../assets/jobPortal.png'
import netflix from '../assets/netflix.png'
import ticTacToe from '../assets/tic-tac-toe.png'
import stonePaperScissor from '../assets/stone-paper-scissor.png'
import demoShop from '../assets/Demoshop-app.png'
import musicWeb from '../assets/nextStart.png'

const projects = [
  {
    title: "Job Portal",
    description: "MERN stack project with authentication and job listings.",
    link: "https://github.com/codepriyanshu21/Job-Portal",
    image: jobPortal,
    tags: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Foodie Haven",
    description: "A food delivery app using React and Tailwind.",
    link: "https://github.com/codepriyanshu21/Food-App",
    image: FoodieHaven,
    tags: ["React", "Tailwind", "REST API"]
  },
  {
    title: "Netflix-GPT",
    description: "A movie recommendation app using React, Tailwind, OpenAI, and Firebase.",
    link: "https://github.com/codepriyanshu21/Netflix-GPT",
    image: netflix,
    tags: ["React", "Tailwind", "OpenAI"]
  },
  {
    title: "Basic-Music-Website",
    description: "A basic and responsive website built with Next.js, showcasing modern routing and performance.",
    link: "https://github.com/codepriyanshu21/Basic-Music-Website",
    image: musicWeb, 
    tags: ["Next.js", "React", "Tailwind"]
  },
  {
    title: "Demo Shopping App",
    description: "A shopping cart built with React, Tailwind CSS, and FakeStore API.",
    link: "https://github.com/codepriyanshu21/Demo-Shopping-App",
    image: demoShop,
    tags: ["React", "Tailwind", "Context API"]
  },
  {
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe game using HTML, CSS, and JavaScript.",
    link: "https://github.com/codepriyanshu21/Tic-Tac-Toe-Game",
    image:ticTacToe,
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    title: "Stone Paper Scissor",
    description: "Interactive game built with HTML, CSS, and JavaScript.",
    link: "https://github.com/codepriyanshu21/Stone-Paper-Scissor-Game",
    image: stonePaperScissor,
    tags: ["HTML5", "CSS3", "JavaScript"]
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-8 bg-gray-900">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent works. Each project was a learning experience.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}