import React from 'react';
import Button from './Button';
import PopupForm from './PopupForm';

const Footer: React.FC = () => {
  const phoneNumber = '+91 6283205418'; // Replace with your phone number
  const emailAddress = 'vaasubansal1712@gmail.com'; // Replace with your email address

  return (
    <footer className="poppins-semibold footer">
      <div className="footer-contact">
        <p className="footer-info">
          <img src="/phone.png" alt="Phone Icon" className="icon" />
          Phone: {phoneNumber}
        </p>
        <p className="footer-info">
          <img src="/email.png" alt="Email Icon" className="icon" />
          Email: {emailAddress}
        </p>
      </div>
      <div className="footer-buttons">
        <Button
          type="button"
          title="Contact Us"
          icon="/whatsapp.png"
          variant="btn_dark_green"
          href="https://wa.me/6283205418
          "
        />
      </div>
    </footer>
  );
};

export default Footer;
