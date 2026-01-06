import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/asset 4.webp";
import img2 from "../assets/asset 5.webp";
import img3 from "../assets/asset 6.webp";
import img4 from "../assets/asset 2.webp";
import img5 from "../assets/asset 13.webp";
import img6 from "../assets/asset 10.webp";
import img7 from "../assets/bastian-top-2.webp";
import img8 from "../assets/asset 11.webp";

import food1 from "../assets/food-1.webp";
import food2 from "../assets/food-2.webp";
import food3 from "../assets/food-3.webp";
import food4 from "../assets/food-4.webp";
import food5 from "../assets/food-5.webp";
import food6 from "../assets/food-6.webp";
import food7 from "../assets/food-7.webp";
import food8 from "../assets/food-8.webp";
import food9 from "../assets/food-9.webp";
import video1 from "../assets/garden_video.mp4";
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const About = ({ branch }) => {
  const containerRef = useRef(null);
  const mainImgRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const subImages = [
    food1,
    food2,
    food3,
    food4,
    food5,
    food6,
    food7,
    food8,
    food9,
  ];

  const [index, setIndex] = useState(0);

  const Image = (newImage) => {
    const mainImage = mainImgRef.current;

    const tl = gsap.timeline();
    tl.to(mainImage, {
      duration: 0.4,
      ease: "power2.inOut",
    })
      .add(() => (mainImage.src = newImage))
      .to(mainImage, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power3.out",
      });
  };

  const scroll = (direction) => {
    let newIndex = direction === "left" ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = images.length - 1;
    if (newIndex >= images.length) newIndex = 0;

    setIndex(newIndex);
    Image(images[newIndex]);

    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (branch === "main") {
    return (
      <motion.section
        id="about"
        className="about_us"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.4 }}
      >
        <div className="container-abt">
          <div className="about_us_picture">
            {/* Main Image */}
            <div className="image-container">
              <img
                ref={mainImgRef}
                src={images[index]}
                alt="Main"
                className="main_img"
              />

              {/* Shine layer */}
              <div className="image-shine"></div>
            </div>

            {/* Sub Images */}
            <div className="image-sub-container" ref={containerRef}>
              {subImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="thumb"
                  onClick={() => {
                    setIndex(i);
                    Image(img);
                  }}
                  style={{
                    cursor: "pointer",
                    opacity: i === index ? 0.7 : 1,
                  }}
                />
              ))}
            </div>

            <div className="slide-btn-grp">
              <button className="slide-btn left" onClick={() => scroll("left")}>
                &#10094;
              </button>
              <button
                className="slide-btn right"
                onClick={() => scroll("right")}
              >
                &#10095;
              </button>
            </div>
          </div>

          {/* Text Section */}
          <div className="about_us_des">
            <h3>About Us</h3>
            <h1>Bastian at the Top</h1>

            <p>
              Opened in 2023 in Mumbai, Bastian At The Top redefines indulgence,
              offering an elevated dining experience you never knew you needed.
              This incredible luxury dining destination in Dadar, offers a first
              of its kind experience to the locals — with an unparalleled
              skyline view, unmatched ambience & an F&B experience like no
              other.
            </p>

            <p>
              Perched on the 48th floor of Kohinoor Square in Dadar, Bastian At
              The Top features a stunning rooftop dining area with breathtaking
              city views and a serene swimming pool.
            </p>
            <button className="read_more_btn">
              <Link to="/ourstory" className="link">
                Read More
              </Link>
            </button>
          </div>
        </div>
      </motion.section>
    );
  }

  if (branch === "garden") {
    return (
      <motion.section
        className="about-garden"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.4 }}
      >
        <div className="garden-section">
          <div className="garden_container">
            <div className="container-1">
              <motion.video
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 1 }}
                viewport={{ once: true }}
                src={video1}
                autoPlay
                loop
                muted
              ></motion.video>
            </div>

            <div className="container-2">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                viewport={{ once: true }}
                className=" "
              >
                Bastian Garden City{" "}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                viewport={{ once: true }}
              >
                You’ve just entered Bastian Garden City — where every corner
                tells a story, and every detail is designed to dazzle. From the
                plush interiors to the ambient lighting, this is more than a
                dining experience; it’s a journey into luxury. 🌿🍽️ Set in a
                stunning space with décor inspired by chic holiday destinations
                across the world, Bastian Garden City is designed to impress.
                The al fresco sets the mood for an unforgettable night out,
                making it one of the best restaurants in Bangalore for romantic
                evenings, celebrations, and everything in between.
              </motion.p>
              <motion.button
                className="bookbtn"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.7 }}
                viewport={{ once: true }}
              >
                Read More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  if (branch === "empire") {
    return (
      <motion.section
        className="indulgence"
        initial={{ opacity: 0, y: 120 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ amount: 0.4 }}
      >
        <div className="indulgence_about">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Bastian Empire
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Our latest launch in Pune, Bastian Empire depicts the inimitable
            blend of everything that the Bastian brand is known for: bold,
            striking interiors, glorious F&B offerings, and a distinctive vibe
            that feels exciting yet comfortable at the same time.Located in a
            high-rise, our 220-seater venue is one of Pune’s best restaurants,
            taking inspiration from contemporary caves, boasting a
            Cappadocia-inspired entrance, rustic cobblestone flooring, and a
            wabi-sabi aesthetic that seamlessly blends polished and raw elements
            for a truly global aesthetic and experience.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            viewport={{ once: true }}
          >
            The interiors create a chic yet relaxed vibe—perfect for
            Instagram-worthy moments. Unparalleled nightlife elevates the energy
            of the space which seamlessly blend party, perfectly crafted
            cocktails and dining vibes for a great, world-class experience.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            viewport={{ once: true }}
            className="read_more_btn"
          >
            Read More
          </motion.button>
        </div>
      </motion.section>
    );
  }
};

export default About;
