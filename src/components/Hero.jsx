import React, { useLayoutEffect, useRef } from "react";
import Header from "./Header.jsx";
import banner from '../assets/banner.png'
import gardenImg from '../assets/bastian_garden_last.png';
import empire from '../assets/bastian-empire-2.jpg';
import gsap from "gsap";

const Hero = ({branch, setBranch}) => {
  const contentRef = useRef(null);

  // Data for both branches
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

  // Animate text and image when branch changes

  useLayoutEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, [branch]);


  return (
    <section
      className="hero"
      style={{backgroundImage: `url(${current.bgImage})`}}>

      <div className="hero-overlay">
        <Header />
        <div className="hero-content" ref={contentRef}>
          <h1>{current.title}</h1>
          <h2>{current.subtitle}</h2>
          <p>{current.desc}</p>
          <div className="hero-buttons">
            <p>Visit Our Restaurant's</p>

            <div className="hero-btn">

            <button
              className={`branch-btn ${branch === "garden" ? "active" : ""}`}
              onClick={() => setBranch("garden")}
            >
              Bastian Garden City
            </button>
            <button
              className={`branch-btn ${branch === "empire" ? "active" : ""}`}
              onClick={() => setBranch("empire")}
            >
              Bastian Empire
            </button>
            <button
              className={`branch-btn ${branch === "main" ? "active" : ""}`}
              onClick={() => setBranch("main")}
            >
              Bastian at the top
            </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
