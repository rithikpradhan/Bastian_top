import React, { useLayoutEffect, useRef, useState, useEffect, use } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/bastian_name.png";
import img2 from "../assets/bastian_2010.png";
import img4 from "../assets/bastian-top-2.jpg";
import img5 from "../assets/bastian--garden.png"
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);


export default function Ourstory() {

   const containerRef = useRef(null);
   const [index, setIndex] = useState(0);
   const progressRef = useRef(null);

   const yearRef = useRef([]);
   const leftImgRef = useRef(null);
   const rightImgRef = useRef(null);
   const textRef = useRef(null);

   const data = [
    {
      year: "2010",
      title: "Foundation",
      text: "Allia Hospitality (the hospitality group's erstwhile name) is established.",
      leftImg : img1,
      rightImg : img2,
    },
    {
      year: "2016",
      title: "Evolution",
      text: "The Group revamps its roster to offer patrons a variety of stylish bar and restaurant brands with Bastian Bandra as the crown jewel.",
      leftImg : img5,
      rightImg : img4,
    },
    {
      year: "2019",
      title: "Forward Move",
      text: "Allia Hospitality joins forces with Shilpa Shetty-Kundra to form Bastian Hospitlity Private Limited (BHPL) to further expand the brand portfolio.",
      leftImg : img5,
      rightImg : img1,
    },
    {
      year: "2020",
      title: "South Launch",
      text: "Bastian Worli, the second outpost of the wildly successful brand, launches in South Mumbai.",
      leftImg : img2,
      rightImg : img4,
    },

    {
      year: "2023",
      title: "Rooftop Rise",
      text: "Bastian Worli relocates to an iconic rooftop location. Bastian Bandra gets a fantastic facelift!",
      leftImg : img2,
      rightImg : img4,
    },
    {
      year: "2024",
      title: "Beyond Mumbai",
      text: "Bastian opens its doors in Bengaluru, at Garden City.",
      leftImg : img1,
      rightImg : img2,
    },
   ]

  //  Animate Year

  useEffect(()=>{
    const  tl = gsap.timeline();

    tl.fromTo(
      yearRef.current,
      {opacity: 0, y: 50, scale: 0.9},
      {opacity: 1, y: 0, scale: 1, duration: 0.5}

    )

    .fromTo(
      rightImgRef.current,
      {opacity: 0, x: 80, rotate: 10},
      {opacity: 1, x: 0, rotate: -4, duration: 0.5},
      "-=0.5"
    )
    .fromTo(
      leftImgRef.current,
      {opacity: 0, x: -80, rotate: 10},
      {opacity: 1, x: 0, rotate: 4, duration: 0.5},
      "-=0.4"
    )

    .fromTo(
      textRef.current,
      {opacity: 0, y: 30},
      {opacity: 1, y: 0, duration: 0.5},
      "-=0.4"
    
    );


    const progress = progressRef.current;

    const percentage = (index / (data.length - 1)) * 100;

    gsap.to(progress, {
      width: `${percentage}%`,
      duration: 0.5,
      ease: "power3.out",
    });

   

   
    
  },[index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  }

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      // ============================================
      // 🚀 1. OUR STORY SECTION — ON PAGE LOAD
      // ============================================

      gsap.from(".main_text h1, .story_text p", {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 1.5,
        stagger: 0.25,
        ease: "power4.out",
      });

       gsap.from(".story_image img", {
        opacity: 0,
        scale: 1.12,
        filter: "blur(10px)",
        duration: 1.3,
        delay: 0.6,
        ease: "power3.out",
      });

      // ============================================
      // 🚀 2. VISION TITLE — SCROLL TRIGGER
      // ============================================

      gsap.from(".vision h1", {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 1.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".vision",
          start: "top 75%",
        }
      });

        // ============================================
      // 🚀 3. VISIONARIES IMAGES — SCROLL TRIGGER
      // ============================================

      gsap.from(".vision_card", {
        opacity: 0,
        y: 60,
        scale: 1.1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".visionaries",
          start: "top 40%",
          toggleActions: "play none none reverse",
          scrub: false,
        }
      });

    }, containerRef);

    return () => ctx.revert();

  }, []);




  return (
    <div className="ourstory" ref={containerRef}>

      <div className="main_text">

        <h1>Our Story</h1>

        <div className="story_container">
          <div className="story_text">
            <p>Founded in 2014 by Ranjit Bindra, Bastian Hospitality has built a strong brand portfolio including A Bar Called Life, Arth, One Street, Binge, and its iconic Bastian.
               The brand has now expanded pan-India with Bastian Garden City in Bangalore and Bastian Empire in Pune. 
               Further, Bastian also launched its second Bastian Mumbai outlet - At The Top, which is an iconic & unmissable rooftop location in the middle of Mumbai, 
               on the 48th floor, with a restaurant, lounge, club and pool, which has quickly become the most coveted dining and nightlife spot in the city. Future projects include Inka by Bastian and a casual coffee concept - Blondie.
            </p>

            <p>Exquisite elegance and culinary mastery define us. Each chapter of our journey showcases extraordinary dining experiences that elevate luxury.</p>
          </div>
          <div className="story_image">
            <img src={img1} alt="" />
          </div>

        </div>


      </div>

      <div className="vision">

        <h1>Our Visionaries</h1>

        <div className="visionaries">

          <div className="vision_card">

            <div className="card_title">

              <h4>Ranjit Bindra</h4>
              <p>Founder & CEO</p>

            </div>

            <div className="card_info">

              <p>Bastian Hospitality (formerly Aalia Hospitality) was established by Ranjit Bindra in 2014, and has several strong brands (past and present) under its banner, including A Bar Called Life, Arth, One Street, Binge and its iconic Bastian brand. With Ranjit's vision, the brand has expanded pan-India to Bangalore & Pune with upcoming projects in Goa, among other Indian metros. Additionally, Ranjit is focusing on new culinary concepts, including a Peruvian Asian luxury dining experience - Inka.</p>
                
            </div>
             

          </div>

          <div className="vision_card vision_card2">

            <div className="card_title">

              <h4>Shilpa Shetty </h4>
              <p>Co-Founder</p>

            </div>

            <div className="card_info">
                 <p>Shilpa Shetty Kundra is a multifaceted personality, renowned as an actor, India’s pioneering celebrity YouTuber, wellness influencer, author, yoga practitioner, health and fitness icon, and entrepreneur. With an illustrious career spanning over 29 years in the Indian film industry, she has left an indelible mark on television, radio, and OTT platforms. Notably, she made history as the first Indian to triumph on Celebrity Big Brother UK. Beyond her global fame, Shilpa has made significant strides in the health and fitness realm, introducing Yoga DVDs and her Her literary endeavors include two bestselling books, ‘The Great Indian Diet’ and ‘The Diary of a Domestic Diva,’ while her ‘Shilpa Shetty channel’ on YouTube showcases nutritious yet delectable recipes. A true epicurean, her culinary adventures harmonize seamlessly with her zest for exploring global cuisines.</p>
                
            </div>
             

          </div>

          <div className="vision_card vision_card3">

            <div className="card_title">

              <h4>Kunal Jani</h4>
              <p>Co-Founder</p>

            </div>

            <div className="card_info">

              <p>Bastian Hospitality (formerly Aalia Hospitality) was established by Ranjit Bindra in 2014, and has several strong brands (past and present) under its banner, including A Bar Called Life, Arth, One Street, Binge and its iconic Bastian brand. With Ranjit's vision, the brand has expanded pan-India to Bangalore & Pune with upcoming projects in Goa, among other Indian metros. Additionally, Ranjit is focusing on new culinary concepts, including a Peruvian Asian luxury dining experience - Inka.</p>
                
            </div>
             

          </div>


        </div>

      </div>



    <div className="timeline_card">

      <h2>Our Legacy</h2>

      {/* YEAR + IMAGES */}
      <div className="year_section">
        <img ref={leftImgRef} src={data[index].leftImg} className="float_img left" />
        <h1 ref={yearRef} className="big_year">{data[index].year}</h1>
        <img ref={rightImgRef} src={data[index].rightImg} className="float_img right" />
      </div>

      {/* TEXT */}
      <div ref={textRef} className="content_section">
        <h3>{data[index].title}</h3>
        <p>{data[index].text}</p>

        <div className="nav_arrows">
          <button onClick={prevSlide}>←</button>
          <button onClick={nextSlide}>→</button>
        </div>
      </div>

      {/* TIMELINE */}

      <div className="timeline_bar">
        
        {/* BACK LINE */}
        <div className="timeline_track"></div>

        {/* PROGRESS LINE */}
        <div className="timeline_progress" ref={progressRef}></div>

        {data.map((item, i) => (
          <span
            key={i}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
          >
            {item.year}
          </span>
        ))}
      </div>

    </div>








    </div>
  );
}
