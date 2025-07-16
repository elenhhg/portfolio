"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-black">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 className="font-['Syncopate'] text-2xl md:text-3xl font-bold mb-3">
            GET IN TOUCH
          </h2>
          <div className="w-16 h-1 mx-auto bg-turquoise"></div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Αριστερή πλευρά */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="font-['Rajdhani'] text-xl font-bold text-turquoise">Let's Connect</h3>
            <p className="font-['Rajdhani'] text-sm text-gray-300">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-turquoise" />
                <span className="font-['Rajdhani'] text-sm">e.elenhgewrgiou@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-4 h-4 text-turquoise">📍</div>
                <span className="font-['Rajdhani'] text-sm">Kiato, Korinthias</span>
              </div>
            </div>
            <div className="flex pt-2 space-x-3">
              <motion.a
                whileHover={{ y: -3, color: "#00FFFF" }}
                href="#"
                className="text-gray-300 transition-colors hover:text-turquoise"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#00FFFF" }}
                href="#"
                className="text-gray-300 transition-colors hover:text-turquoise"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3, color: "#00FFFF" }}
                href="#"
                className="text-gray-300 transition-colors hover:text-turquoise"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Δεξιά πλευρά */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 focus:border-turquoise rounded-lg px-3 py-2 font-['Rajdhani'] text-sm outline-none transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-800 focus:border-turquoise rounded-lg px-3 py-2 font-['Rajdhani'] text-sm outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 focus:border-turquoise rounded-lg px-3 py-2 font-['Rajdhani'] text-sm outline-none transition-colors"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-800 focus:border-turquoise rounded-lg px-3 py-2 font-['Rajdhani'] text-sm outline-none transition-colors resize-none"
              ></textarea>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-turquoise text-red font-['Rajdhani'] font-bold py-2 px-6 rounded-lg text-sm"
              >
                Send Message
              </motion.button>

              {/* Εμφάνιση κατάστασης */}
              {status === "sending" && <p className="text-gray-400">Sending...</p>}
              {status === "success" && <p className="text-green-500">Message sent successfully!</p>}
              {status === "error" && <p className="text-red-500">Something went wrong. Try again.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
