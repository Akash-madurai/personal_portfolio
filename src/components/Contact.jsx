import { motion } from "framer-motion";
import { Mail, Phone, MapPin,Linkedin,Github } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const currentYear = new Date().getFullYear();

  const [formData , setFormData] = useState({
    name:"",
    email:"",
    message:""
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs
  .send( 
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
  .then(() => {
    setStatus("success");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
    
    setTimeout(() => {
      setStatus('')
    },2000)

  })
  .catch(() => {
    setStatus("error");
  });

  }
  
  return (
    <section className="relative py-16 bg-gradient-to-br from-amber-100 via-white to-amber-100 overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10 mt-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 animate-pulse">
         Get in Touch.
        </h2>
        <p className="text-amber-700 text-xl mt-3">I’d love to hear from you 🚀</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/70 backdrop-blur-xl rounded-2xl shadow-lg p-8 flex flex-col justify-center"
        >
          <h3 className="text-2xl font-semibold text-amber-800 mb-6 ml-5">Contact Info</h3>
          <ul className="space-y-4 text-lg text-gray-700 ml-5">
            <li className="flex items-center gap-3">
              <Phone className="text-orange-300" /> +91 93613 09117
            </li>
            <a className="flex items-center gap-3" href="mailto:akashmaduraik@gmail.com">
              <Mail className="text-orange-300" /> akashmaduraik@gmail.com
            </a>
            <li>
            <a className="flex items-center gap-3" href="https://www.linkedin.com/in/akash-mk-25629b31b/">
              <Linkedin className="text-orange-300" /> Akash Mk
            </a>
            </li>
            <li>
            <a className="flex items-center gap-3" href = 'https://github.com/Akash-madurai'>
              <Github className="text-orange-300" /> Akash-madurai
            </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-orange-300" /> Bangalore, India
            </li>
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-amber-800 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-amber-800 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-amber-800 font-medium mb-1">Message</label>
              <textarea
                placeholder="Leave a message"
                name="message"
                rows="4"
                value={formData.message}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 bg-white/60 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                onChange={handleChange}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-32 md:w-32 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-600 text-white font-semibold shadow-lg hover:shadow-2xl transition"
            >
              Send 
            </motion.button>
            
          </form>
        </motion.div>
      </div>
       <div className="mx-auto mt-10 flex justify-center">
          {status === "success" && ( <p className="text-lg ml-3 text-green-600 bg-white p-2 rounded-2xl "> Message Sent ✅</p>)}
          {status === 'error' && (<p className="text-lg text-red-600  bg-white p-2 rounded-2xl"> Something went wrong</p>) }
        </div>      
      <div className="text-center font-medium text-amber-700 mt-14 relative z-10">
        &copy; {currentYear} rights reserved by Akash
      </div>
    </section>
  );
};

export default Contact;




