import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BookingPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      gsap.fromTo(
        popupRef.current,
        { scale: 0.7, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="popup_overlay" ref={overlayRef}>
      <div className="form_title">
        <h2 className="popup_title">Bastian</h2>

        <p className="popup_subtext">
          Welcome to Bastian — Please fill out your reservation details.
        </p>
      </div>

      <div className="form-container" ref={popupRef}>
        <form className="popup_form">
          <input type="text" placeholder="Full Name" required />
          <select id="myDropdown" className="dropdown" name="myDropdownName">
            <option value="option1_value">1</option>
            <option value="option2_value">2</option>
            <option value="option3_value">3</option>
            <option value="option1_value">4</option>
            <option value="option2_value">5</option>
            <option value="option3_value">6</option>
          </select>
          <input type="date" required />
          <input type="time" required />
          <textarea placeholder="Special Message" required></textarea>
          <button type="submit" className="submit_btn">
            Confirm Booking
          </button>

          <h1>Restaurant Terms & Conditions</h1>
          <li>
            <b>Dress Code:</b> Smart Casual. Men, please note regrettably no
            open sandals/shoes. Shorts may be worn on the occasion of Brunch.
          </li>
          <li>
            <b>Details:</b> Deposit/Cover Charge is not required for the
            children below 15 years of age.
          </li>
        </form>
      </div>

      <button className="close_btn" onClick={onClose}>
        ×
      </button>
      {/* </div> */}
    </div>
  );
};

export default BookingPopup;
