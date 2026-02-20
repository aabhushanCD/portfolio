import profile from "../assets/whatshero.jpg";
import cv from "../assets/aabhuCv.pdf";
// import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-125 h-125 bg-amber-500/20 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <a
        href={cv}
        target="_blank"
        className="absolute top-0 right-0 text-2xl text-yellow-300 p-2 border-4 border-yellow-400 "
      >
        Curriculum Vitae
      </a>
      {/* Heading */}

      <h1 className="text-5xl md:text-7xl font-extrabold bg-linear-to-r from-amber-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
        Hi I'm Aabhushan
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-xl text-gray-300 max-w-2xl">
        Backend-focused Full Stack Developer building scalable systems, secure
        architectures, and modern interactive web experiences.
      </p>

      {/* 3D Image Card */}
      <div className="mt-12 group perspective">
        <div className="relative w-72 h-72 transition-transform duration-700 transform group-hover:rotate-3 group-hover:scale-105">
          {/* Glow Border */}
          <div className="absolute inset-0 bg-linear-to-br from-amber-400 to-blue-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition"></div>

          {/* Image Card */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-md shadow-2xl">
            <img
              src={profile}
              alt="Aabhushan"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-6">
        <a
          href="#projects"
          className="bg-amber-400 text-black px-6 py-3 rounded-full font-semibold hover:scale-110 transition duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
