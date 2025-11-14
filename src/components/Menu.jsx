import React, { useLayoutEffect, useRef } from "react";

import eco from "../assets/eco.png";
import luxury from "../assets/luxury.png";
import service from "../assets/services.png";
import arrow from "../assets/asset 18.svg";
import menuBg from "../assets/asset 23.png"
import imgA from "../assets/asset 8.png";
import imgB from "../assets/asset 9.png";
import imgC from "../assets/img7-dW175K5d.png";
import imgD from "../assets/img8-BqXhpjWU.png";
import imgE from "../assets/img5-0epl5QK5.png";
import imgF from "../assets/img17-Cptd8pNE.png";
import imgG from "../assets/img13-BEemWp3p.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MenuSection = ({branch}) => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".menu_cards img");

      gsap.from(cards, {
        y: 40,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "middle center",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".menu_section .heading , .menu_para > *", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    // Refresh after render to ensure correct trigger positions
    ScrollTrigger.refresh();

    // Cleanup when component unmounts
    return () => ctx.revert();
  }, []);


  if(branch === "main"){

    return (
    <section id="menu" className="menu" ref={sectionRef}>

      <div className="banner_img" style={{backgroundImage: `url(${menuBg})`}}>


      </div>


      <div className="menu_section">
        <div className="heading">
          <p>Our Menu</p>
          <h1>Explore Bastian</h1>
          <a href="#">
            Bastian at the top <img src={arrow} alt="" style={{ width: 16 }} />
          </a>
        </div>

        <div className="menu_para">
          <p>
            Bastian At The Top presents an unparalleled fusion of bold, captivating interiors and breathtaking 360-degree vistas, delectable cuisine and tantalising libations, and the unmistakable Bastian ambiance — simultaneously thrilling and inviting.
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
        </div>
      </div>

      <div className="menu_cards" ref={cardsRef}>
        <img src={imgA} alt="" className="image_class-2" />
        <img src={imgB} alt="" className="image_class-1" />
        <img src={imgC} alt="" className="image_class-2" />
        <img src={imgD} alt="" className="image_class-1" />
        <img src={imgE} alt="" className="image_class-2" />
        <img src={imgF} alt="" className="image_class-1" />
        <img src={imgG} alt="" className="image_class-2" />
      </div>
    </section>
  );

  }


};

export default MenuSection;
