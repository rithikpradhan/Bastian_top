import React from "react";
import img1 from "../assets/bastian-top-1.png";
import img2 from "../assets/bastian-top-2.jpg";
import img3 from "../assets/bastian-top-3.jpg";
import img4 from "../assets/asset 6.jpeg";
import img5 from "../assets/asset 5.png";
import img6 from "../assets/asset 13.png";
import img7 from "../assets/asset 11.png";
import img8 from "../assets/asset 10.png";
import img10 from "../assets/bastian-empire-2.jpg";
import img11 from "../assets/bastianempire.jpg";




const Gallery = ({branch}) => {

      if(branch === "main"){
      return (
        <section className="gallery">
          <div className="gallery-content">
            <h2>Dine with the view?</h2>
              <span>Perched on the 48th floor of Kohinoor Square in Dadar, Bastian At The Top features a stunning rooftop dining area with breathtaking city views. Bastian At The Top presents an unparalleled fusion of bold, captivating interiors and breathtaking 360-degree vistas, delectable cuisine and tantalising libations, and the unmistakable Bastian ambiance</span>


            <div class="parent">
                <div class="div1"><img src={img2} alt="" /></div>
                <div class="div3"><img src={img3} alt="" /></div>
                <div class="div4"><img src={img1} alt="" /></div>
                <div class="div5"><img src={img5} alt="" /></div>              
                <div class="div6"><img src={img7} alt="" /></div>
                <div class="div7"><img src={img8} alt="" /></div>
                <div class="div7"><img src={img10} alt="" /></div>
                
                <div class="div8"><img src={img4} alt="" /></div>
                
            </div>
        

          </div>
        </section>
      );
    };

    if(branch === "garden"){

      return(
        <section></section>
      )
 
    }
}

export default Gallery;
