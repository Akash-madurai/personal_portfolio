import { motion } from "framer-motion";
import react from "../assets/react.png";
import python from "../assets/python.png";
import js from "../assets/js.png";
import html from "../assets/html.png";
import social from "../assets/social.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import uiux from "../assets/uiux.png";
import mongodb from "../assets/mongodb.png";
import Express from "../assets/Express.png";
import nodejs from "../assets/nodejs.png";

const Resume = () => {
  return (
    <section className="bg-gradient-to-tr from-amber-100 via-white to-amber-100 py-16 px-6 md:px-16 ">
      {/* Education*/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10 mb-12 mt-16"
      >
        <h2 className="text-3xl font-bold text-amber-800 mb-10">🎓 Education</h2>
        <div className="relative border-l-4 border-amber-400 pl-6">
          {/* MCA */}
          <motion.div
            className="mb-10 ml-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -left-5 w-8 h-8 bg-amber-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-amber-700">
              Master of Computer Application
            </h3>
            <p className="text-sm text-gray-500">AMC Engineering College</p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Completed MCA with <span className="font-semibold">8.5 CGPA</span>.
              Gained advanced knowledge in programming, problem-solving, and
              software engineering practices.
            </p>
          </motion.div>

          {/* BCA */}
          <motion.div
            className="ml-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute -left-5 w-8 h-8 bg-amber-400 rounded-full border-4 border-white"></div>
            <h3 className="text-xl font-semibold text-amber-700">
              Bachelor of Computer Application
            </h3>
            <p className="text-sm text-gray-500">
              B.S. Abdur Rahman Crescent Institute of Science and Technology
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Graduated with <span className="font-semibold">8.0 CGPA</span>.
              Built a strong foundation in computer science and application
              development.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Skills*/}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10 mb-12"
      >
        <h2 className="text-3xl font-bold text-amber-800 mb-8">🛠 Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {[
            { src: python, name: "Python" },
            { src: js, name: "JavaScript" },
            { src: html, name: "HTML" },
            { src: css, name: "CSS" },
            { src: react, name: "React JS" },
            {src : redux, name:'Redux'},
            { src: tailwind, name: "Tailwind" },
            {src: mongodb, name: "MongoDB"},
            {src: nodejs, name: "Node Js"},
            {src: Express, name: "Express js"},
            {src : uiux, name: 'uiux'},
            { src: social, name: "Git" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              className="flex flex-col items-center bg-amber-50 rounded-xl shadow-md p-6 hover:bg-amber-100 transition transform"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <p className="mt-3 font-semibold text-amber-700">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-lg hover:shadow-2xl p-10"
      >
        <h2 className="text-3xl font-bold text-amber-800 mb-10">🏅 Certifications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border-l-4 border-amber-500 pl-6 bg-amber-50 rounded-xl shadow-md p-6 hover:bg-amber-100"
          >
            <h3 className="text-xl font-bold text-amber-700">
              JavaScript for Web Development
            </h3>
            <p className="text-sm text-gray-500">Insight Tech Hub Pvt Ltd</p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Built interactive and dynamic web apps using JavaScript, DOM
              manipulation, and event-driven functionality.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="border-l-4 border-amber-500 pl-6 bg-amber-50 rounded-xl shadow-md p-6 hover:bg-blue-100"
          >
            <h3 className="text-xl font-bold text-amber-700">Python Programming</h3>
            <p className="text-sm text-gray-500">
              Motion Cut Crafting Futures Pvt Ltd
            </p>
            <p className="mt-2 text-gray-700 leading-relaxed">
              Hands-on experience with Python for scripting, data manipulation,
              debugging, and Git version control. Used Pandas, Numpy, and API
              integrations effectively.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;






// import react from '../assets/react.png';
// import python from '../assets/python.png';
// import js from '../assets/js.png';
// import html from '../assets/html.png';
// import social from '../assets/social.png';
// import css from '../assets/css.png';
// import tailwind from '../assets/tailwind.png';


// const Resume = () => {
//     return (
//         <>
//         <div className= "justify-items-center bg-gradient-to-r from-amber-100 to-white pt-14 mt-3">
//              <div className='text-amber-900 font-semibold justify-items-start bg-white rounded-3xl p-10 w-4xl h-full shadow-xl hover:shadow-2xl'>
//             <p className="font-bold text-3xl text-amber-700 pl-5">Education.</p> 
//             <h1 className='p-6 text-xl font-semibold text-amber-600 pr-118 mt-5'> Bachelor of Computer Application. </h1>  
//             <p className='size-4/4 p-2 pl-7 leading-relaxed'>I hold a Bachelor's in Computer Applications with an 8.0 CGPA from B.S. Abdur Rahman Crescent Institute of Science and Technology, where I gained a strong foundation in computer science.</p> 
//             <h1 className='p-6 text-xl font-semibold text-amber-600 pr-118 pt-8'>Master of Computer Application.</h1>                                         
//             <p className='size-4/4 p-2 pl-8'> I hold a Master's in Computer Applications with an 8.5 CGPA from AMC Engineering College, where I gained a strong foundation in computer science, programming, and problem-solving skills.</p>
//         </div>
       
//         <div className='text-amber-900 justify-items-center bg-white rounded-3xl p-10 w-4xl h-135 shadow-xl hover:shadow-2xl mt-10'>
//             <p className="font-bold text-3xl p-6 text-amber-700 pt-3 pb-8">Skills</p>
//            <div className="grid grid-cols-3 justify-evenly gap-8 space-x-20 p-6 ml-18">
//             <div>
//                 <img src = {python} alt='python logo' className='w-16 h-16 rounded-full object-cover'/>
//                 <p className='text-amber-800 text-center mt-2 font-semibold'>Python</p>
//             </div>
//             <div>
//                 <img src={js} alt="javascript logo" className='w-16 h-16 rounded-full object-cover' />
//                 <p className='text-amber-800 text-center mt-2 font-semibold'> Javascript</p>
//             </div>
//             <div>
//                 <img src={html} alt="html logo" className='w-16 h-16  ' />
//                 <p className='text-amber-800 mt-2 text-center font-semibold'> Html</p>
//             </div>
//             <div>
//                 <img src={css} alt="css logo" className='w-16 h-16' />
//                 <p className='text-amber-800 text-center mt-2 font-semibold'>Css</p>
//             </div>
//             <div>
//                 <img src={react} alt="react logo" className='w-16 h-16'/>
//                 <p className='text-amber-800 text-center mt-2 font-semibold'>React Js</p>
//             </div>
//             <div>
//                 <img src={tailwind} alt="tailwind logo" className='w-16 h-16' />
//                 <p className='text-amber-800 text-center mt-2 font-semibold'>Tailwind</p>
//             </div>
//             <div>
//                 <img src={social} alt="git logo" className='w-16 h-16'/>
//                 <p className='text-amber-800 text-center mt-2 font-semibold pr-20'> Git</p>
//             </div>
//           </div> 
//         </div>

//         <div className='text-amber-900 font-semibold justify-items-center bg-white rounded-3xl p-10 w-4xl h-full shadow-xl hover:shadow-2xl mt-10'>
//             <p className="font-bold text-3xl text-blue-400 p-6">Certifications</p>
//             <div className=' p-2 mt-2 space-y-5'>
//                 <div className='justify-items-center leading-relaxed'>
//                     <p className='font-bold text-xl text-blue-800 pr-102'> JavaScript for Web Development. </p>
//                     <p className='pr-132 mt-1 text-blue-500 text-lg'>Insight tech hub Pvt Ltd</p>
//                     <p className='size-4/4 pr-10 pl-10 mt-2'> Assisted in building interactive and dynamic web applications using JavaScript.
//  Developed and maintained user interface components using vanilla
//  JavaScript and modern frameworks.
//  Implemented event-driven functionality and DOM manipulation for
//  dynamic page behavior.
//  </p>
//                </div>
//                 <div className='justify-items-center leading-relaxed '>
//                     <p className='font-bold text-amber-700 pr-137'> Python Programming. </p>
//                     <p className='pr-115 text-amber-600'>Motion Cut Crafting Futures Pvt ltd</p>
//                     <p className='size-4/4 pr-10 pl-11 mt-2'> Assisted in developing, testing, Gained experience in debugging, code optimization, and version control
//  using Git.
//  Utilized libraries such as pandas, numpy, and requests for data manipulation
//  and API integration.</p>
//                </div>
//             </div>
//         </div>
//          </div>
//         </>
//     )
// }
// export default Resume;