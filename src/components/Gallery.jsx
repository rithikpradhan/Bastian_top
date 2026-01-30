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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
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
              <img src={img10} alt="Bastian dining" />
            </div>
            <div className="div3">
              <img src={img3} alt="Bastian interior" />
            </div>
            <div className="div4">
              <img src={img1} alt="Bastian view" />
            </div>
            <div className="div5">
              <img src={img5} alt="Bastian ambiance" />
            </div>
            <div className="div6">
              <img src={img6} alt="Bastian atmosphere" />
            </div>
            <div className="div7">
              <img src={img8} alt="Bastian experience" />
            </div>
            <div className="div7">
              <img src={img2} alt="Bastian rooftop" />
            </div>
            <div className="div8">
              <img src={img4} alt="Bastian cuisine" />
            </div>
          </div>
        </motion.div>
      </section>
    );
  }

  if (branch === "garden") {
    return (
      <section className="gallery_garden">
        <motion.div
          className="gallery_garden_title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1>Don't Wait Book now!</h1>
          <p>Sunday Brunch confirmed as the cure for Saturday nights 🧇🍳</p>
        </motion.div>

        <div className="gallery_container">
          <motion.div
            className="img_1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <img src={food1} alt="Brunch dish" />
          </motion.div>
          <motion.div
            className="img_2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <img src={img12} alt="Garden dining" />
          </motion.div>
          <motion.div
            className="img_3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <img src={food6} alt="Signature dish" />
            <p>
              Whether you're planning a proposal, a celebration, or a private
              event, Cascades offers bespoke experience tailored to your desires
              in an unforgettable setting.
            </p>
            <a className="explore_menu" href="#">
              Explore Menu
            </a>
          </motion.div>
        </div>
      </section>
    );
  }

  if (branch === "empire") {
    return (
      <section className="video-section">
        <video
          src={video4}
          autoPlay
          loop
          muted
          playsInline
          className="bg-video"
        ></video>

        <div className="overlay"></div>

        <motion.div
          className="content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="content_text">
            <h1>Sip Club Best Bar — Nightlife</h1>
            <p>
              Known for its impeccable bar program, our mixologists surpass
              expectations, setting a new standard in cocktail craft, as the
              city knows it.
            </p>
          </div>
        </motion.div>
      </section>
    );
  }
};

export default Gallery;
