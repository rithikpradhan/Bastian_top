import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
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

const About = ({ branch }) => {
  const containerRef = useRef(null);
  const mainImgRef = useRef(null);

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

  const changeImage = (newImage, newIndex) => {
    const mainImage = mainImgRef.current;

    const tl = gsap.timeline();
    tl.to(mainImage, {
      opacity: 0.6,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.inOut",
    })
      .add(() => (mainImage.src = newImage))
      .to(mainImage, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });

    setIndex(newIndex);
  };

  const scroll = (direction) => {
    let newIndex = direction === "left" ? index - 1 : index + 1;
    if (newIndex < 0) newIndex = subImages.length - 1;
    if (newIndex >= subImages.length) newIndex = 0;

    changeImage(subImages[newIndex], newIndex);

    const container = containerRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  if (branch === "main") {
    return (
      <section id="about" className="about-redesign">
        <div className="about-container">
          {/* Gallery Section - Right */}
          <motion.div
            className="about-gallery"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-badge">About Us</div>
            <h1 className="about-title">Bastian at the Top</h1>
            {/* Main Image */}
            <div className="gallery-main">
              <img
                ref={mainImgRef}
                src={subImages[index]}
                alt="Bastian dining"
                className="main-image"
              />
              <div className="image-overlay"></div>
            </div>

            {/* Thumbnails */}
            <div className="gallery-thumbnails-wrapper">
              <button
                className="gallery-nav gallery-nav-left"
                onClick={() => scroll("left")}
                aria-label="Previous image"
              >
                ‹
              </button>

              <div className="gallery-thumbnails" ref={containerRef}>
                {subImages.map((img, i) => (
                  <div
                    key={i}
                    className={`thumbnail ${i === index ? "active" : ""}`}
                    onClick={() => changeImage(img, i)}
                  >
                    <img src={img} alt={`Gallery ${i + 1}`} />
                    <div className="thumbnail-overlay"></div>
                  </div>
                ))}
              </div>

              <button
                className="gallery-nav gallery-nav-right"
                onClick={() => scroll("right")}
                aria-label="Next image"
              >
                ›
              </button>
            </div>
          </motion.div>
          {/* Text Section - Left */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about_txt_content">
              <p className="about-text">
                Opened in 2023 in Mumbai, Bastian At The Top redefines
                indulgence, offering an elevated dining experience you never
                knew you needed. This incredible luxury dining destination in
                Dadar offers a first of its kind experience to the locals — with
                an unparalleled skyline view, unmatched ambience & an F&B
                experience like no other.
              </p>

              <p className="about-text">
                Perched on the 48th floor of Kohinoor Square in Dadar, Bastian
                At The Top features a stunning rooftop dining area with
                breathtaking city views and a serene swimming pool.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">48th</span>
                <span className="stat-label">Floor</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">360°</span>
                <span className="stat-label">Views</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-number">2023</span>
                <span className="stat-label">Opened</span>
              </div>
            </div>

            <Link to="/ourstory" className="about-cta">
              <span>Discover Our Story</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>
    );
  }

  if (branch === "garden") {
    return (
      <section className="about-garden-redesign">
        <div className="garden-grid">
          {/* Video Section */}
          <motion.div
            className="garden-media"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <video src={video1} autoPlay loop muted playsInline></video>
            <div className="media-overlay"></div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="garden-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="garden-badge">Bengaluru</div>
            <h2 className="garden-title">Bastian Garden City</h2>
            <p className="garden-text">
              You've just entered Bastian Garden City — where every corner tells
              a story, and every detail is designed to dazzle. From the plush
              interiors to the ambient lighting, this is more than a dining
              experience; it's a journey into luxury. 🌿🍽️
            </p>
            <p className="garden-text">
              Set in a stunning space with décor inspired by chic holiday
              destinations across the world, Bastian Garden City is designed to
              impress. The al fresco sets the mood for an unforgettable night
              out, making it one of the best restaurants in Bangalore for
              romantic evenings, celebrations, and everything in between.
            </p>
            <button className="garden-cta">
              Explore More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14m-7-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (branch === "empire") {
    return (
      <section className="about-empire-redesign">
        <motion.div
          className="empire-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="empire-badge">Pune</div>
          <h1 className="empire-title">Bastian Empire</h1>

          <div className="empire-text-grid">
            <p>
              Our latest launch in Pune, Bastian Empire depicts the inimitable
              blend of everything that the Bastian brand is known for: bold,
              striking interiors, glorious F&B offerings, and a distinctive vibe
              that feels exciting yet comfortable at the same time.
            </p>
            <p>
              Located in a high-rise, our 220-seater venue is one of Pune's best
              restaurants, taking inspiration from contemporary caves, boasting
              a Cappadocia-inspired entrance, rustic cobblestone flooring, and a
              wabi-sabi aesthetic that seamlessly blends polished and raw
              elements for a truly global aesthetic and experience.
            </p>
            <p>
              The interiors create a chic yet relaxed vibe—perfect for
              Instagram-worthy moments. Unparalleled nightlife elevates the
              energy of the space which seamlessly blend party, perfectly
              crafted cocktails and dining vibes for a great, world-class
              experience.
            </p>
          </div>

          <button className="empire-cta">
            Learn More
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12h14m-7-7l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </section>
    );
  }
};

export default About;
