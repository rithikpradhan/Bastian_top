import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "./Header.jsx";
import Booking from "./Booking.jsx";

import banner from "../assets/banner.webp";
import gardenImg from "../assets/bastian_garden_last.webp";
import empire from "../assets/bastian-empire-2.webp";

const Hero = ({ branch, setBranch }) => {
  const heroRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  // Scroll trigger on hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  // Background parallax + fade
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  // Text fade + slide UP
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const branchData = {
    main: {
      title: "Bastian",
      subtitle: "At the Top",
      desc: "Experience fine dining at Bastian Restaurant — where flavor, elegance, and service create unforgettable moments.",
      bgImage: banner,
    },
    garden: {
      title: "Bastian",
      subtitle: "Garden City",
      desc: "Experience the lush greenery and fine dining at our Garden City branch — where nature meets flavor.",
      bgImage: gardenImg,
    },
    empire: {
      title: "Bastian",
      subtitle: "Empire",
      desc: "Step into the heart of luxury dining at Bastian Empire — elegant ambience, unforgettable taste.",
      bgImage: empire,
    },
  };

  const current = branchData[branch];

  return (
    <motion.section
      ref={heroRef}
      className="hero"
      style={{
        backgroundImage: `url(${current.bgImage})`,
        y: bgY,
      }}
    >
      <div className="hero-overlay">
        <Header onBookClick={() => setIsOpen(true)} />
        <Booking isOpen={isOpen} onClose={() => setIsOpen(false)} />

        {/* TEXT */}
        <motion.div
          className="hero-content"
          style={{
            y: textY, // your scroll based animation
          }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {current.title}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {current.subtitle}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {current.desc}
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p>Visit Our Restaurant's</p>

            <motion.div
              className="hero-btn"
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.button
                className={`branch-btn ${branch === "garden" ? "active" : ""}`}
                onClick={() => setBranch("garden")}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                Bastian Garden City
              </motion.button>

              <motion.button
                className={`branch-btn ${branch === "empire" ? "active" : ""}`}
                onClick={() => setBranch("empire")}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                Bastian Empire
              </motion.button>

              <motion.button
                className={`branch-btn ${branch === "main" ? "active" : ""}`}
                onClick={() => setBranch("main")}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                Bastian at the Top
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
