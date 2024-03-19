import React from 'react';

interface AboutUsProps {
  imageSrc: string;
  content: string;
}

const AboutUs: React.FC<AboutUsProps> = ({ imageSrc, content }) => {
  return (
    <div className="bg about-us-section">
      <img src={imageSrc} alt="About Us" className="about-us-image" />
      <div className="about-us-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutUs;
