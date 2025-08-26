
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import profile from '../assets/profile.png';
import {motion} from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-white to-amber-100 flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        <div className="flex flex-col items-center text-center md:text-left md:mt-0 mt-32">
          <motion.div
           initial ={{opacity:0 ,y:24}}
           animate = {{opacity:1,y:0}}
           transition = {{duration:0.6}}
           >
          <img
            src={profile}
            alt="Akash M"
            className="w-48 h-48 rounded-full shadow-lg object-cover mb-6  border-4 border-white"
          />
          <h2 className="text-3xl font-bold text-gray-800">Akash M</h2>
          <p className="text-orange-600 font-medium"> Web Developer</p>
          
          <div className="mt-6 space-y-3 text-gray-700">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <Phone size={18} /> (+91) 9361309117
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <Mail size={18} /> akashmaduraik@gmail.com
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <Globe size={18} /> Indian
            </p>
            <p className="flex items-center gap-2 justify-center md:justify-start">
              <MapPin size={18} /> Bangalore
            </p>
          </div>
          </motion.div>
        </div>

         <motion.div
           initial = {{opacity:0,y:24}}
           animate = {{opacity:1,y:0}}
           transition = {{duration:0.6}}
          >
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300">
          
          <h3 className="text-2xl font-semibold text-orange-600 mb-4 ">About Me.</h3>
          <p className="text-gray-700 leading-relaxed">
            Hello! I am a passionate <span className="font-semibold"> Web Developer </span> 
             with a solid foundation in front-end technologies. I specialize in building 
            dynamic, responsive, and user-friendly web applications. My expertise lies in 
            creating clean, maintainable code, and I am committed to continuous learning 
            and staying updated with the latest industry trends. I am eager to apply my 
            skills to create impactful and innovative digital experiences.
          </p>
        </div>
        </motion.div>

      </div>
    </section>
  );
}