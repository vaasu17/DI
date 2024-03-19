"use client"
import { useState, useEffect } from 'react';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import axios from 'axios';
import supabase from '../utils/supabase';

interface FormData {
  Name: string;
  Email: string;
  Number: string; 
}

const PopupForm: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Email: '',
    Number: ''
  });

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Check if either Email or Number is provided
    if (!formData.Email && !formData.Number) {
      alert('Please provide either Email or Number.');
      return;
    }
  
    console.log(formData);
  
    const { data, error }: PostgrestSingleResponse<any> = await supabase
      .from('form1')
      .insert([
        {
          Name: formData.Name,
          Email: formData.Email,
          Number: formData.Number
        }]
      ).select();
      if (error) {
        console.error('Error submitting form:', error.message);
        alert('An error occurred while submitting your request. Please try again later.');
      } else {
        console.log('Form submission successful:', data);   
        setFormData({ Name: '', Email: '', Number: '' });
        setIsOpen(false); 
      }
  };
  
  return (
    <>
      {isOpen && (
        <div className="popup open poppins-semibold">
          <div className="popupcard">
           <img src='/favicon.png' alt="Image" className="left-image" /> 
            <button className="close-btn" onClick={togglePopup}>
              &times;
            </button>
            <p style={{fontSize: '30px' }}>Request a Call Back!</p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  placeholder="Enter your name"
                  value={formData.Name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email:</label>
                <input
                  type="text"
                  id="Email"
                  name="Email"
                  placeholder="Enter your email"
                  value={formData.Email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Number">Number:</label>
                <input
                  type="text" // Use type "number" for numeric input
                  id="Number"
                  name="Number"
                  placeholder="Enter your phone number"
                  value={formData.Number.toString()}
                  onChange={handleChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupForm;
