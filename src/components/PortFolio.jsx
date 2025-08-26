import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import kraftkorner from '../assets/kraftkorner.png';
import dailyposts from '../assets/dailyposts.png';

const projects = [
  {
    title: "DailyPosts",
    description:
      "An innovative and responsive daily posting website using html, css, Reactjs.",
    tech: ["Html", "Css", "React"],
    img: dailyposts, 
    github: "https://github.com/Akash-madurai/my_react_app",
    live: "https://your-live-link.com",
  },
  {
    title: "kraftkorner",
    description:
      "An responsive handmade products website with a great user interface using reactjs and tailwind css .",
    tech: ["React", "Tailwind CSS"],
    img: kraftkorner, 
    github: "https://github.com/Akash-madurai/kraftKorner_tailwind",
    live: "https://your-live-link.com",
  },
  // {
  //   title: "my third project",
  //   description:
  //     "A full-stack MERN e-commerce application with cart, payment, and user authentication.",
  //   tech: ["MongoDB", "Express", "React", "Node"],
  //   img: "https://source.unsplash.com/600x400/?ecommerce,shop", // replace with your image
  //   github: "https://github.com/Akash-madurai",
  //   live: "https://your-live-link.com",
  // },
];

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100 py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-amber-800 text-center mb-16 mt-12"
      >
        <span className="text-amber-500 ">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition flex justify-center items-center space-x-4">
                {/* Buttons */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow hover:bg-amber-100 transition"
                >
                  <Github className="text-amber-800" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white rounded-full shadow hover:bg-amber-100 transition"
                >
                  <ExternalLink className="text-amber-800" />
                </a>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-amber-100 text-amber-800 font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

