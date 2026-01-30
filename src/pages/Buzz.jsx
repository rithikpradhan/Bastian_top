import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Placeholder images - replace with your actual images
const images = {
  hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
  food1: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600",
  food2: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600",
  food3: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600",
  ambiance1:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
  ambiance2: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600",
  nightlife1:
    "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=600",
  nightlife2:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600",
};

export default function BuzzPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedPost, setSelectedPost] = useState(null);

  const buzzPosts = [
    {
      id: 1,
      category: "food",
      image: images.food1,
      title: "Lobster Thermidor Perfection",
      description:
        "Our signature dish that's stealing hearts and taste buds across Mumbai!",
      likes: 2847,
      comments: 143,
      date: "2 days ago",
    },
    {
      id: 2,
      category: "nightlife",
      image: images.nightlife1,
      title: "Saturday Night Fever",
      description: "When the DJ drops the beat and the crowd goes wild! 🎵✨",
      likes: 3921,
      comments: 287,
      date: "3 days ago",
    },
    {
      id: 3,
      category: "ambiance",
      image: images.ambiance1,
      title: "48th Floor Magic",
      description: "Sunset views that make every moment Instagram-worthy 🌆",
      likes: 4156,
      comments: 321,
      date: "5 days ago",
    },
    {
      id: 4,
      category: "food",
      image: images.food2,
      title: "Sushi Artistry",
      description:
        "Handcrafted perfection meets fresh flavors. Our sushi bar is calling! 🍣",
      likes: 2234,
      comments: 167,
      date: "1 week ago",
    },
    {
      id: 5,
      category: "ambiance",
      image: images.ambiance2,
      title: "Rooftop Paradise",
      description:
        "Where luxury meets the sky. Pool, lounge, and endless vibes.",
      likes: 5012,
      comments: 412,
      date: "1 week ago",
    },
    {
      id: 6,
      category: "nightlife",
      image: images.nightlife2,
      title: "Mixology Masters",
      description:
        "Cocktails that are pure art. Our bartenders are wizards! 🍸",
      likes: 3567,
      comments: 245,
      date: "2 weeks ago",
    },
    {
      id: 7,
      category: "food",
      image: images.food3,
      title: "Wagyu Delight",
      description:
        "Melt-in-your-mouth perfection. This is what dreams are made of! 🥩",
      likes: 4821,
      comments: 389,
      date: "2 weeks ago",
    },
    {
      id: 8,
      category: "ambiance",
      image: images.hero,
      title: "Golden Hour Dining",
      description: "When the city lights up and the magic begins... ✨",
      likes: 6234,
      comments: 521,
      date: "3 weeks ago",
    },
  ];

  const filteredPosts =
    activeTab === "all"
      ? buzzPosts
      : buzzPosts.filter((post) => post.category === activeTab);

  return (
    <div className="buzz-page">
      {/* Hero Section */}
      <section className="buzz-hero">
        <motion.div
          className="buzz-hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.div
          className="buzz-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1>The Buzz</h1>
          <p>Where Every Moment Becomes a Story</p>
          <div className="buzz-stats">
            <div className="buzz-stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="buzz-stat">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Posts Tagged</span>
            </div>
            <div className="stat-divider"></div>
            <div className="buzz-stat">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="buzz-filter">
        <div className="filter-container">
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {["all", "food", "ambiance", "nightlife"].map((tab) => (
              <button
                key={tab}
                className={`filter-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "all"
                  ? "All"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Buzz Grid */}
      <section className="buzz-grid-section">
        <div className="buzz-grid">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="buzz-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="buzz-card-image">
                <img src={post.image} alt={post.title} />
                <div className="buzz-card-overlay">
                  <div className="buzz-card-badge">{post.category}</div>
                </div>
              </div>
              <div className="buzz-card-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <div className="buzz-card-meta">
                  <div className="buzz-meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="buzz-meta-item">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                    <span>{post.comments}</span>
                  </div>
                  <span className="buzz-date">{post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Social Section */}
      <section className="buzz-social">
        <motion.div
          className="social-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2>Join The Conversation</h2>
          <p>Share your Bastian moments with us</p>
          <div className="social-hashtag">#BastianMoments</div>
          <div className="social-icons">
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Modal */}
      {selectedPost && (
        <motion.div
          className="buzz-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPost(null)}
        >
          <motion.div
            className="buzz-modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={() => setSelectedPost(null)}
            >
              ×
            </button>
            <img src={selectedPost.image} alt={selectedPost.title} />
            <div className="modal-info">
              <div className="modal-badge">{selectedPost.category}</div>
              <h3>{selectedPost.title}</h3>
              <p>{selectedPost.description}</p>
              <div className="modal-meta">
                <span>❤️ {selectedPost.likes.toLocaleString()}</span>
                <span>💬 {selectedPost.comments}</span>
                <span>🕐 {selectedPost.date}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
