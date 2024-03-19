"use client"
import React, { useState } from 'react';
import PopupForm from './PopupForm';

interface CallBackProps {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}

const CallBack: React.FC<CallBackProps> = ({ title, text, buttonText, buttonLink }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div id="CallBack" className="poppins-semibold CallBack">
      <div className="CallBack-content">
        <h1>{title}</h1>
        <p>{text}</p>
        <button className='btn_blue' type="button" onClick={togglePopup}>{buttonText}</button>
        {showPopup && <PopupForm />}
      </div>
    </div>
  );
};

export default CallBack;
