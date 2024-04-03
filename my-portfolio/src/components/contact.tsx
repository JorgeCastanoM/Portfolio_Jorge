import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp";
import { IconCurrentLocation, 
        IconMail, 
        IconBrandLinkedin, 
        IconBrandGithub } from '@tabler/icons-react';


export function ContactSection() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl" id="contact"
      >
        Let's Work Together
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-white text-lg" 
      >
        <li className="flex mt-4"><IconCurrentLocation className=""/>&nbsp;&nbsp;Location: Ontario, Canada</li>
        <li className="flex mt-4"><IconMail className=""/>&nbsp;&nbsp;<a href="mailto:jorge.c838@gmail.com">jorge.c838@gmail.com</a></li>
        <li className="flex mt-4"><IconBrandLinkedin className=""/>&nbsp;&nbsp;<a href="https://www.linkedin.com/in/jorge-castaño-mejia-950456156" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
        <li className="flex mt-4"><IconBrandGithub className=""/>&nbsp;&nbsp;<a href="https://github.com/JorgeCastanoM" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </motion.ul>
    </LampContainer>
  );
}

export default ContactSection