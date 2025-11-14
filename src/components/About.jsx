import React, { useRef, useState, useLayoutEffect } from "react";
import img1 from "../assets/asset 4.png";
import img2 from "../assets/asset 5.png";
import img3 from "../assets/asset 6.jpeg";
import img4 from "../assets/asset 2.png";
import img5 from "../assets/asset 13.png";
import img6 from "../assets/asset 10.png";
import img7 from "../assets/bastian-top-2.jpg";
import img8 from "../assets/asset 11.png";



import img10 from "../assets/bastian-empire-2.jpg";
import img11 from "../assets/bastianempire.jpg";
import gardenImg from '../assets/garden_main.png';
import gardenFood from '../assets/garden-food.png';
import food1 from '../assets/food-1.png';
import food2 from '../assets/food-2.png';
import food3 from '../assets/food-3.png';
import food4 from '../assets/food-4.png';
import food5 from '../assets/food-5.png';
import food6 from '../assets/food-6.png';
import food7 from '../assets/food-7.png';
import food8 from '../assets/food-8.png';
import food9 from '../assets/food-9.png';


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = ({branch}) => {

  // const aboutRef= useRef(null);

  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const paraRef = useRef(null);
  const mainImgRef = useRef(null);

  const images = [img1, img2, img3, img4, img5, img6,img7, img8];
  const subImages = [food1, food2, food3, food4, food5, food6, food7, food8, food9];
  const [index, setIndex] = useState(0);

  const animateMainImage = (newImage) => {
    const mainImage = mainImgRef.current;

    // Timeline for smooth fade + slide + scale
    const tl = gsap.timeline();
    tl.to(mainImage, {
      opacity: 0,
      x: -40,
      scale: 0.95,
      duration: 0.4,
      ease: "power2.inOut",
    })
      .add(() => {
        mainImage.src = newImage;
      })
      .to(mainImage, {
        opacity: 1,
        x: 0,
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
    animateMainImage(images[newIndex]);

    const container = containerRef.current;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    const el = sectionRef.current;
    const para = paraRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      para,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    ScrollTrigger.refresh();
  }, []);


  if(branch === "main"){

    return (
      <section id="about" className="about_us">
        <div className="about_us_picture" ref={sectionRef}>
          {/* Main Image with GSAP animation */}
          <div className="image-container">
            <img ref={mainImgRef} src={images[index]} alt="Main" />
          </div>

          {/* Thumbnails */}
          <div className="image-sub-container" ref={containerRef}>
            {subImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumbnail ${i}`}
                onClick={() => {
                  setIndex(i);
                  animateMainImage(img);
                }}
                style={{
                  border: i === index ? "3px solid white" : "none",
                  transform: i === index ? "scale(1.05)" : "scale(0.8)",
                  cursor: "pointer",
                  opacity: i === index ? 1 : 0.7,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="slide-btn-grp">

            <button className="slide-btn left" onClick={() => scroll("left")}>
            &#10094;
          </button>
          <button className="slide-btn right" onClick={() => scroll("right")}>
            &#10095;
          </button>

          </div>

        </div>

        {/* Text Section */}
        <div className="about_us_des" ref={paraRef}>
          <h3>About Us</h3>
          <h1>Bastian at the top</h1>
          <div className="para">
            <p>

              Opened in 2023 in Mumbai, Bastian At The Top redefines indulgence, offering an elevated dining experience you never knew you needed. This incredible luxury dining destination in Dadar, offers a first of its kind experience to the locals — with an unparalleled skyline view, unmatched ambience & an F&B experience like no other.
            </p>
            <p>
              Perched on the 48th floor of Kohinoor Square in Dadar, Bastian At
              The Top features a stunning rooftop dining area with breathtaking
              city views and a serene swimming pool.
            </p>
          </div>
          <button className="read_more_btn">Read More</button>
        </div>
      </section>
  );

  }

  if(branch === "garden"){

    return (
      <section className="about-garden">
        <div className="about-garden-hero">
          <h1>Dine with us</h1>
          <p>From classic favorites to modern culinary creations, our menu is designed to tantalize your taset buds.
            Every dish made with the freshest ingredients and an extra dash of love.
          </p>

          <div className="garden-section">

            <div className="garden_container">

                <div className="container-1">
                  <img src={gardenFood} alt="Garden" className="garden-img" />
                  <img src={gardenImg} alt="Pool"  className="pool-img"/>
                </div>

                <div className="container-2">
                  <h2>Bastian Garden City</h2>
                  <p>Bastian Garden City brings a chic, holiday-inspired vibe with stunning décor influenced by top travel destinations. Set in an opulent city-center bungalow, it combines global trends with local flair — making it one of the most sought-after fine dining restaurants in Bangalore.</p>
                  <button className="bookbtn">Read More</button>
                </div>

            </div>

          </div>
        </div>
      </section>
    );

  }

    if (branch === "empire") {

            return(
              <section className = "indulgence">
      
                <h1>Destination for </h1>
                <span>Indulgence</span>
      
                <div className="indulgence_card">
      
                  <div className="indulegnce_img"><img src={img10} alt="" /></div>
                  <div className="indulgence_text">
                    <h2>Unique Dining & F&B Experience</h2>
                    <p> With an extensive wine selection, curated coffee program, and standout offerings like an innovative vegan menu and a one-of-a-kind bakery, Bastian Garden City offers an F&B experience unlike any other in the city. Our Sunday brunch is a crowd favorite—designed to transport you to your favorite international holiday destination, all from the heart of the city.</p>
      
                  </div>
      
                </div>
                <div className="indulgence_card card-reverse">
      
                  <div className="indulegnce_img">
      
                    <h2>Destination for Indulgence</h2>
                    <p>Looking for a fine dine experience in Bangalore that brings together the best food, cocktails & nightlife? Housed in a luxurious Bengaluru bungalow, Bastian Garden City feels like a chic holiday spot. Inspired by global trends and tailored to local tastes, Bastian Garden City blends our signature vibe with regional ingredients. Every visit offers a unique yet familiar Bastian experience, the perfect city escape.</p>
                    
                  </div>
                  <div className="indulgence_text">
      
                    <img src={img11} alt="" />
       
      
                  </div>
      
                </div>
      
              </section>
            )

  }

    return null;


};

export default About;
