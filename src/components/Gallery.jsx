import React, { useRef } from "react";
import img1 from "../assets/bastian-top-1.webp";
import img2 from "../assets/bastian-top-2.webp";
import img3 from "../assets/bastian-top-3.webp";
import img4 from "../assets/asset 6.webp";
import img5 from "../assets/asset 5.webp";
import img6 from "../assets/asset 12.webp";
import img8 from "../assets/asset 10.webp";
import img10 from "../assets/bastian_top_card.webp";
import food1 from "../assets/post-18.jpg";
import food6 from "../assets/post-19.jpg";
// import img11 from "../assets/bastian_garden_last.webp";
import img12 from "../assets/post-20.jpg";
import video4 from "../assets/video_5.mp4";
import { motion } from "framer-motion";

const Gallery = ({ branch }) => {
  const cardsRef = useRef(null);

  if (branch === "main") {
    return (
      <section className="gallery">
        <motion.div
          className="gallery-content"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ amount: 0.2 }}
        >
          <h2>Dine with the view?</h2>
          <span>
            Perched on the 48th floor of Kohinoor Square in Dadar, Bastian At
            The Top features a stunning rooftop dining area with breathtaking
            city views. Bastian At The Top presents an unparalleled fusion of
            bold, captivating interiors and breathtaking 360-degree vistas,
            delectable cuisine and tantalising libations, and the unmistakable
            Bastian ambiance
          </span>

          <div className="parent" ref={cardsRef}>
            <div className="div1">
              <img src={img10} alt="" />
            </div>
            <div className="div3">
              <img src={img3} alt="" />
            </div>
            <div className="div4">
              <img src={img1} alt="" />
            </div>
            <div className="div5">
              <img src={img5} alt="" />
            </div>
            <div className="div6">
              <img src={img6} alt="" />
            </div>
            <div className="div7">
              <img src={img8} alt="" />
            </div>
            <div className="div7">
              <img src={img2} alt="" />
            </div>

            <div className="div8">
              <img src={img4} alt="" />
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (branch === "garden") {
    return (
      <section className="gallery_garden ">
        <div className="gallery_garden_title">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Don't Wait Book now!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Sunday Brunch confirmed as the cure for Saturday nights 🧇🍳
          </motion.p>
        </div>

        <div className="gallery_container">
          <motion.div
            className="img_1"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img src={food1} alt="" />
          </motion.div>
          <motion.div
            className="img_2"
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <img src={img12} alt="" />
          </motion.div>
          <motion.div
            className="img_3"
            initial={{ opacity: 0, y: 50, scale: 0.6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          >
            <img src={food6} alt="" />
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
            >
              Whether you're planning a proposal, a celebration, or a private
              event , Cascades offers bespoke experience tailored to your
              desires in an unforgettable setting.
            </motion.p>
            <motion.a
              className="explore_menu"
              href=""
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </div>
      </section>
    );
  }

  if (branch === "empire") {
    return (
      <section className="video-section">
        <video src={video4} autoPlay loop muted className="bg-video"></video>

        <div className="overlay"></div>

        <div className="content">
          <div className="content_text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Sip Club Best Bar — Nightlife
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Known for its impeccable bar program, our mixologists surpass
              expectations, setting a new standard in cocktail craft, as the
              city knows it.
            </motion.p>
          </div>
        </div>
      </section>
    );
  }
};

export default Gallery;
