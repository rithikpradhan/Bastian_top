const Footer = () => {
  return (
    <footer className="footer">
      <h3> Experience fine dining at its best in the heart of Bastian.</h3>
      <h1>Bastian</h1>

      <div className="footer_links">
        <div className="contact">
          <h4>Contact</h4>
          <p>
            237 Bedford Avenue <br /> Brooklyn, NY 11211 <br />
            +1(718)555-0123
          </p>
        </div>
        <div className="Hours">
          <h4>Hours</h4>
          <p>Mon-Thu 11.30 AM - 10.00 PM</p>
          <p>Fri-Sat 11.30 AM - 11.00 PM</p>
          <p>Sun 11.00 AM - 9.00 PM</p>
        </div>
        <div className="follow_us">
          <h4>Follow Us</h4>
          <a href="">Facebook</a>
          <a href="">Instagram</a>
          <a href="">Twitter</a>
        </div>
      </div>

      <p>@ 2025PunDIsh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
