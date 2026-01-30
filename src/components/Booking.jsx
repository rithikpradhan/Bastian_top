// BookingPopup.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const BookingPopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);
  const overlayRef = useRef(null);
  const [selectedBranch, setSelectedBranch] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const branches = [
    {
      id: "brooklyn",
      name: "Brooklyn",
      address: "237 Bedford Avenue, Brooklyn, NY 11211",
    },
    {
      id: "manhattan",
      name: "Manhattan",
      address: "456 Madison Avenue, Manhattan, NY 10022",
    },
    {
      id: "queens",
      name: "Queens",
      address: "789 Queens Boulevard, Queens, NY 11374",
    },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" },
      );

      gsap.fromTo(
        popupRef.current,
        { scale: 0.8, opacity: 0, y: 50 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(1.2)",
          delay: 0.1,
        },
      );
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted:", { ...formData, branch: selectedBranch });
    // Handle form submission
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="booking-overlay" ref={overlayRef}>
      <div className="booking-container" ref={popupRef}>
        {/* Close Button */}
        <button className="booking-close" onClick={onClose} aria-label="Close">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Header */}
        <div className="booking-header">
          <h2 className="booking-logo">Bastian</h2>
          <div className="booking-divider"></div>
          <p className="booking-subtitle">Reserve Your Table</p>
        </div>

        {/* Main Content */}
        <div className="booking-content">
          {/* Branch Selection */}
          <div className="booking-section">
            <h3 className="booking-section-title">Select Location</h3>
            <div className="branch-grid">
              {branches.map((branch) => (
                <div
                  key={branch.id}
                  className={`branch-card ${selectedBranch === branch.id ? "branch-card-active" : ""}`}
                  onClick={() => setSelectedBranch(branch.id)}
                >
                  <div className="branch-radio">
                    {selectedBranch === branch.id && (
                      <div className="branch-radio-dot"></div>
                    )}
                  </div>
                  <div className="branch-info">
                    <h4>{branch.name}</h4>
                    <p>{branch.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Form */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3 className="booking-section-title">Reservation Details</h3>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="guests">Number of Guests</label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select guests</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7+">7+ Guests</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="time">Time</label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Special Requests (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Any dietary requirements or special occasions?"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="booking-submit"
              disabled={!selectedBranch}
            >
              Confirm Reservation
            </button>
          </form>

          {/* Terms & Conditions */}
          <div className="booking-terms">
            <h4>Restaurant Policies</h4>
            <ul>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  <strong>Dress Code:</strong> Smart Casual. No open
                  sandals/shoes for men. Shorts permitted during brunch.
                </span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  <strong>Cancellation:</strong> Please notify us 24 hours in
                  advance for cancellations.
                </span>
              </li>
              <li>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>
                  <strong>Children:</strong> No deposit required for children
                  under 15 years.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;
