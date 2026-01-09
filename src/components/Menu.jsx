import React, { useRef, useState, useEffect } from "react";
import eco from "../assets/eco.png";
import luxury from "../assets/luxury.webp";
import service from "../assets/services.webp";
import arrow from "../assets/asset 18.svg";
import menuBg from "../assets/asset 23.webp";
import imgA from "../assets/asset 8.webp";
import imgB from "../assets/asset 9.webp";
import imgC from "../assets/img7-dW175K5d.webp";
import imgD from "../assets/img8-BqXhpjWU.webp";
import imgE from "../assets/img5-0epl5QK5.webp";
import imgF from "../assets/img17-Cptd8pNE.webp";
import imgG from "../assets/img13-BEemWp3p.webp";
import imgH from "../assets/post-16.jpg";
import imgI from "../assets/post-15.jpg";
import imgJ from "../assets/post-17.jpg";
import imgK from "../assets/post-13.jpg";
import imgL from "../assets/post-14.jpg";

import video1 from "../assets/video_6.mp4";
import video2 from "../assets/video_7.mp4";
import video3 from "../assets/video_8.mp4";
import { motion, AnimatePresence } from "framer-motion";
const MenuSection = ({ branch }) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const images = [imgH, imgI, imgJ, imgK, imgL];

  const [index, setIndex] = useState(0);

  // Auto-slide with pause
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // 2 sec pause + 0.5s transition

    return () => clearTimeout(timer);
  }, [index]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1], // premium easing
      },
    },
  };

  if (branch === "main") {
    return (
      <section id="menu" className="menu" ref={sectionRef}>
        <motion.div
          className="banner_img"
          style={{ backgroundImage: `url(${menuBg})` }}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.4 }}
        ></motion.div>

        <div className="menu_section">
          <motion.div
            className="heading"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ amount: 0.4 }}
            delay={100}
          >
            <p>Our Menu</p>
            <h1>Explore Bastian</h1>
            <a href="#">
              Bastian at the top{" "}
              <img src={arrow} alt="" style={{ width: 16 }} />
            </a>
          </motion.div>

          <motion.div
            className="menu_para"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ amount: 0.4 }}
          >
            <p>
              Bastian At The Top presents an unparalleled fusion of bold,
              captivating interiors and breathtaking 360-degree vistas,
              delectable cuisine and tantalising libations, and the unmistakable
              Bastian ambiance — simultaneously thrilling and inviting.
            </p>
            <div className="mini_des">
              <span>
                <img src={eco} alt="" /> Seasonal Ingredients
              </span>
              <span>
                <img src={luxury} alt="" /> Warm Service
              </span>
              <span>
                <img src={service} alt="" /> Luxurious Atmosphere
              </span>
            </div>
          </motion.div>
        </div>

        <motion.div className="menu_cards">
          {[imgA, imgB, imgC, imgD, imgE, imgF, imgG].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              className={i % 2 === 0 ? "image_class-2" : "image_class-1"}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: true }}
            />
          ))}
        </motion.div>
      </section>
    );
  }

  if (branch === "garden") {
    return (
      <section id="menu" className="garden_menu">
        <video src={video1} autoPlay loop muted className="bg-video"></video>
        <video src={video2} autoPlay loop muted className="bg-video"></video>
        <video src={video3} autoPlay loop muted className="bg-video"></video>

        <div className="overlay"></div>

        <div className="content">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Follow us & Stay Connected
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ delay: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Get the latest updates , special offers , and mouthwatering food
            photos
          </motion.p>
        </div>
      </section>
    );
  }

  // --------------------
  // EMPIRE SECTION (FIXED)
  // --------------------

  if (branch === "empire") {
    return (
      <section id="empire-menu" className="empire-menu">
        <div className="empire_menu_content">
          {/* Animated Text Section */}
          <motion.div
            className="menu_content_text"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our Food
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem,
              provident recusandae praesentium magnam quidem, ab ipsa nulla
              officia iure placeat libero dolore, maxime maiores? Ipsam earum
              est repellendus obcaecati minus? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Sequi officia ullam accusantium,
              nihil voluptates rerum impedit hic non quasi vel totam ducimus,
              maiores velit maxime dolorum dicta unde. Placeat, nostrum? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia
              odit vitae voluptatibus iste commodi possimus necessitatibus
              doloribus labore quod recusandae quam mollitia, soluta tempore,
              earum blanditiis, accusamus perferendis. Animi!
            </motion.p>

            <motion.button
              className="read_more_btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Explore Menu
            </motion.button>
          </motion.div>

          {/* Slider */}
          <motion.div
            className="menu_content_photo"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="slider_container">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={images[index]}
                  className="slider_img"
                  initial={{ opacity: 0, scale: 0.3, x: 250 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.2, x: -500 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                />
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }
};

export default MenuSection;
