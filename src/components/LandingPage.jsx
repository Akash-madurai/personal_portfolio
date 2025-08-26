import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import profile from "../assets/profile.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import { useState , useEffect } from "react";
import picsart from "../assets/picsart.jpg";

const LandingPage = () => {
  const skills = [" Web Developer",'React Developer'];
  const [change,setChange] = useState(0);

  useEffect(() => {
    if(skills.length === 1){
      return skills
    }
    const timeout = setTimeout(() => {
      setChange((prevChange) => (prevChange + 1) % 2);
    },3000);

    return () => clearTimeout(timeout);
  },[change,skills.length])

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-amber-100 via-white to-white px-6">
      <div className="flex flex-col-reverse md:flex-row items-center md:space-x-16 mt-26">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-orange-800">
            Hello, I'm Akash  
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-amber-500 ml-1 font-medium">
              {skills[change]}
          </p>

          
          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {[
              { href: "mailto:akashmaduraik@gmail.com", 
                img: gmail, 
                alt: "Gmail" },
              {
                href: "https://github.com/Akash-madurai",
                img: github,
                alt: "GitHub",
              },
              {
                href: "https://www.linkedin.com/in/akash-mk-25629b31b/",
                img: linkedin,
                alt: "LinkedIn",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl transition"
              >
                <img src={social.img} alt={social.alt} className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center md:justify-start"
          >
            <a
              href="/AKASH_RESUME.pdf"
              download="Akash_resume.pdf"
              className="flex items-center gap-2 px-6 py-3 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 hover:shadow-xl transition transform hover:scale-105"
            >
              Resume / CV <Download size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-12 md:mb-0"
        > */}
          {/* <motion.img
            src={picsart}
            alt="Akash's profile"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-8 border-white shadow-2xl md:ml-20"
            // animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          /> */}
          {/* Glow Effect */}
          {/* <div className="absolute inset-0 rounded-full bg-amber-200 opacity-20 blur-3xl -z-10"></div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default LandingPage;







// import React from "react";
// import { Download } from "lucide-react";
// import profile from '../assets/profile.png'
// import gmail from '../assets/gmail.png';
// import github from '../assets/github.png';
// import linkedin from '../assets/linkedin.png';

// const LandingPage = () => {
//   const skill = ['Frondend Web Developer']
//   return (
//     <>
//     <div className="min-h-screen">
//       <div className="h-100 flex">
//           <div className="ml-60 mt-60">
//             <div className="text-5xl font-bold text-amber-900">Hello, Akash here </div>
//             <p className="text-2xl text-amber-600 mt-2">{skill.map((item) => item)}</p>
//             <div className="flex space-x-4"> 
//              <a href="mailto:akashmaduraik@gmail.com" > <img src={gmail} alt="gmail" className="w-6 h-6 ml-2 mt-4" /> </a>
//              <a href="https://github.com/Akash-madurai" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" className="w-6 h-6 ml-2 mt-4"/></a> 
//               <a href="https://www.linkedin.com/in/akash-mk-25629b31b/" target="_blank" rel="noopener noreferrer"> <img src={linkedin} alt="github" className="w-6 h-6 ml-2 mt-4"/> </a>
//             </div>
//           </div>
//          <div className="ml-100 mt-20 ">
//             <img src={profile} alt="Akash's profile picture"  className="rounded-full w-96 h-96 object-cover shadow-2xl border-6 border-white"/>         
//          </div>
//       </div>
//        <div className="bg-amber-600 text-white rounded-full shadow-xl hover:shadow-2xl w-32 h-8 text-center pt-1 justify-self-center mr-225 mb-4">
//          <a 
//             href="/AKASH_RESUME.pdf"
//             download='Akash_resume.pdf'
//             className="flex pl-4 gap-2"
//          > 
//          Resume/cv <div className="mt-1"><Download size={18}/></div>
//          </a>
//        </div>
//       <div className="bg-amber-100 p-38"></div>
//       </div>
//     </>
//   )
// }

// export default LandingPage


