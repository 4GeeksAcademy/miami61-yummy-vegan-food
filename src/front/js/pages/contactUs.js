import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/main.css";


export const ContactUs = () => {
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', comment: '' });
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setErrMsg('');
  }, [contactInfo]);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateEmail(email) {
    return emailRegex.test(email);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, comment } = contactInfo;
    if (!email.trim() || !comment.trim()) {
      setErrMsg("Both email and comment are required.");
      return;
    }
    else if (!validateEmail(email)) {
      setErrMsg("Please try valid email.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(process.env.BACKEND_URL + "/api/contactUs", {
        method: "POST",
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify({ email, comment })
      });
      const data = await response.json();
      setIsLoading(false);
      if (response.ok) {
        console.log("comment sent to email successfully")
        setSuccessMsg('Thank you for your comment!');
        setTimeout(() => navigate('/'), 30 * 1000);
      } else {
        throw new Error(data.message || "An error occurred.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrMsg(error.message);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id == null || value == null) {
      console.error("Event target or value is null");
      return;
    }

    setContactInfo(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <section className="container">
      <form onSubmit={handleSubmit}>
        <h1>Contact Us</h1>
        {errMsg && <p className="text-danger">{errMsg}</p>}
        {successMsg && <p className="text-success">{successMsg}</p>}
        <div className="mb-3">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={contactInfo.name} onChange={handleChange} className="form-control" placeholder="Your Name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={contactInfo.email} onChange={handleChange} className="form-control" placeholder="Your Email" />
        </div>
        <div className="mb-3">
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" value={contactInfo.comment} onChange={handleChange} className="form-control" placeholder="Your Comment"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        {isLoading && <div className="spinner-border" role="status"><span className="visually-hidden">Loading...</span></div>}
      </form>
    </section>
  );
};
