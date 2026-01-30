import React, { useRef, useState, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img10 from "../assets/bastian_name.webp";
import img20 from "../assets/bastian_2010.webp";
import img40 from "../assets/bastian-top-2.webp";
import img50 from "../assets/bastian--garden.webp";
import kunal from "../assets/kunal_jani.webp";
import ranjit from "../assets/ranjit_bindra.webp";
import shilpa from "../assets/shilpa_shetty.webp";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Ourstory() {
  const containerRef = useRef(null);
  const [activeYear, setActiveYear] = useState(0);

  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      text: "Allia Hospitality (the hospitality group's erstwhile name) is established.",
      image: img10,
    },
    {
      year: "2016",
      title: "Evolution",
      text: "The Group revamps its roster to offer patrons a variety of stylish bar and restaurant brands with Bastian Bandra as the crown jewel.",
      image: img20,
    },
    {
      year: "2019",
      title: "Forward Move",
      text: "Allia Hospitality joins forces with Shilpa Shetty-Kundra to form Bastian Hospitlity Private Limited (BHPL) to further expand the brand portfolio.",
      image: img50,
    },
    {
      year: "2020",
      title: "South Launch",
      text: "Bastian Worli, the second outpost of the wildly successful brand, launches in South Mumbai.",
      image: img40,
    },
    {
      year: "2023",
      title: "Rooftop Rise",
      text: "Bastian Worli relocates to an iconic rooftop location. Bastian Bandra gets a fantastic facelift!",
      image: img20,
    },
    {
      year: "2024",
      title: "Beyond Mumbai",
      text: "Bastian opens its doors in Bengaluru, at Garden City.",
      image: img10,
    },
  ];

  const visionaries = [
    {
      name: "Ranjit Bindra",
      role: "Founder & CEO",
      image: ranjit,
      bio: "Bastian Hospitality (formerly Aalia Hospitality) was established by Ranjit Bindra in 2014, and has several strong brands under its banner. With Ranjit's vision, the brand has expanded pan-India to Bangalore & Pune with upcoming projects in Goa.",
    },
    {
      name: "Shilpa Shetty",
      role: "Co-Founder",
      image: shilpa,
      bio: "Shilpa Shetty Kundra is a multifaceted personality, renowned as an actor, India's pioneering celebrity YouTuber, wellness influencer, and entrepreneur with 29 years in the Indian film industry.",
    },
    {
      name: "Kunal Jani",
      role: "Co-Founder",
      image: kunal,
      bio: "A visionary leader driving innovation and excellence in hospitality, bringing world-class dining experiences to life with passion and dedication.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      // Story content animation
      gsap.from(".story-content", {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 70%",
        },
      });

      // Visionaries cards
      gsap.from(".visionary-card", {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".visionaries-grid",
          start: "top 70%",
        },
      });

      // Timeline items
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            once: true, // 🔥 IMPORTANT
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // existing animations...

      // 🔥 FIX: refresh after images load
      const handleLoad = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("load", handleLoad);

      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="ourstory-redesign" ref={containerRef}>
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">Our Story</h1>
        <p className="hero-subtitle">A Journey of Culinary Excellence</p>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-content">
            <h2>The Beginning</h2>
            <p>
              Founded in 2014 by Ranjit Bindra, Bastian Hospitality has built a
              strong brand portfolio including A Bar Called Life, Arth, One
              Street, Binge, and its iconic Bastian. The brand has now expanded
              pan-India with Bastian Garden City in Bangalore and Bastian Empire
              in Pune.
            </p>
            <p>
              Bastian also launched its second Mumbai outlet - At The Top, an
              iconic rooftop location on the 48th floor, featuring a restaurant,
              lounge, club and pool, which has quickly become the most coveted
              dining and nightlife spot in the city.
            </p>
            <div className="story-highlight">
              <span className="highlight-text">
                Exquisite elegance and culinary mastery define us. Each chapter
                of our journey showcases extraordinary dining experiences that
                elevate luxury.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visionaries Section */}
      <section className="visionaries-section">
        <h2 className="section-title">Our Visionaries</h2>
        <div className="visionaries-grid">
          {visionaries.map((person, index) => (
            <div key={index} className="visionary-card">
              <div className="visionary-image-wrapper">
                <img src={person.image} alt={person.name} />
                <div className="visionary-overlay"></div>
              </div>
              <div className="visionary-content">
                <h3>{person.name}</h3>
                <span className="visionary-role">{person.role}</span>
                <p>{person.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <h2 className="section-title">Our Legacy</h2>
        <div className="timeline-container">
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${activeYear === index ? "active" : ""}`}
              onClick={() => setActiveYear(index)}
            >
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-line"></div>
              </div>
              <div className="timeline-content">
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-details">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {activeYear === index && (
                    <div className="timeline-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
