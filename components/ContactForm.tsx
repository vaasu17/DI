"use client"
import React, { useState } from 'react';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import supabase from '../utils/supabase'; // Import the Supabase client

interface FormData {
  Name: string;
  Email: string;
  Number: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    Name: '',
    Email: '',
    Number: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  console.log(formData);

  // Check if either Email or Number is provided
  if (!formData.Email  && !formData.Number) {
    alert('Please provide either Email or Number.');
    return;
  }

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
  }
};

const isSubmitDisabled = !(formData.Email || formData.Number);

  return (
    <div id="form" className="poppins-semibold bg1">
    <h2 style={{ fontSize: '60px', textAlign: 'center' }} className='poppins-semibold'>GET DETAILS</h2>
    <form className="contactForm_form" onSubmit={handleSubmit}>
      <div className="contactForm_group">
        <label className="contactForm_label" htmlFor="name">Name:</label>
        <input
          className="contactForm_input"
          type="text"
          id="name"
          name="Name"  // Corrected to match state key
          placeholder="Enter your name"
          value={formData.Name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contactForm_group">
        <label className="contactForm_label" htmlFor="email">Email:</label>
        <input
          className="contactForm_input"
          type="text"
          id="email"
          name="Email"  // Corrected to match state key
          placeholder="Enter your email"
          value={formData.Email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="contactForm_group">
        <label className="contactForm_label" htmlFor="number">Number:</label>
        <input
          className="contactForm_input"
          type="text"
          id="number"
          name="Number"  // Corrected to match state key
          placeholder="Enter your phone number"
          value={formData.Number}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" disabled={isSubmitDisabled}>Submit</button>
    </form>
    </div>
  );
};

export default ContactForm;
