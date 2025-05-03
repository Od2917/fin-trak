import React, { useState } from 'react';
import axios from 'axios';
import './BookingForm.css';
const BookingForm = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    package: selectedPackage
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', formData);
      alert("Booking successful!");
      setFormData({ name: '', email: '', package: selectedPackage, date: '',phonenumber:''});
    } catch (error) {
      alert("Booking failed");
      console.error(error);
    }
  };

  return (
    <div className="booking-page">
    <form onSubmit={handleSubmit} className="form">
      <h2>Booking: {selectedPackage}</h2>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <input name="phonenumber" placeholder="phonenumber" value={formData.phonenumber} onChange={handleChange} required />
      <button type="submit">Submit Booking</button>
    </form>
    </div>
  );
};

export default BookingForm;
