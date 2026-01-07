import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Initialize EmailJS when component mounts
  // Note: We don't need explicit init() if we pass the public key to send()
  useEffect(() => {
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    if (!publicKey || publicKey === 'YOUR_PUBLIC_KEY_HERE') {
      console.warn('⚠️ EmailJS environment variables are missing! Please update your .env file with your actual EmailJS credentials.');
    }
  }, []);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const sanitizeInput = (input) => {
    if (typeof input !== 'string') return input;
    // Remove script tags and encode special characters to prevent XSS
    return input
      .replace(/<script.*?>.*?<\/script>/gi, '')
      .replace(/[&<>"]/g, (c) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[c]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(false);

      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        alert('Configuration Error: Missing EmailJS environment variables. Please restart your server.');
        setIsSubmitting(false);
        return;
      }
  
      // Direct email configuration with template variables matching EmailJS template
      const templateParams = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        subject: sanitizeInput(formData.subject),
        message: sanitizeInput(formData.message),
        // Fallbacks for common EmailJS naming conventions
        from_name: sanitizeInput(formData.name),
        reply_to: sanitizeInput(formData.email),
        user_subject: sanitizeInput(formData.subject),
        user_message: sanitizeInput(formData.message),
        title: sanitizeInput(formData.subject), // Added 'title' as a fallback
      };
      
      // Using emailjs.send directly with form data
      emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
        .then((response) => {
          console.log('✅ Email sent successfully!', response);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });

          // Reset success message after 5 seconds
          setTimeout(() => setSubmitSuccess(false), 5000);
        })
        .catch((error) => {
          console.error('❌ Failed to send email:', error);
          setIsSubmitting(false);
          setSubmitError(true);
          
          const errorMessage = error?.text || error?.message || 'Unknown error';
          if (errorMessage.includes('Failed to fetch')) {
             alert('Network Error: "Failed to fetch". This is often caused by an Ad Blocker or security policy. Please disable ad blockers and try again.');
          } else {
             alert(`Failed to send: ${errorMessage}`);
          }

          // Reset error message after 5 seconds
          setTimeout(() => setSubmitError(false), 5000);
        });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subtitle">Let's Talk</h3>
            <p>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <FaEnvelope className="icon" />
                </div>
                <div className="text">
                  <h4>Email</h4>
                  <p>khanal.aryan60@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <FaPhone className="icon" />
                </div>
                <div className="text">
                  <h4>Phone</h4>
                  <p>+977 9864478471</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="icon-wrapper glass">
                  <FaMapMarkerAlt className="icon" />
                </div>
                <div className="text">
                  <h4>Location</h4>
                  <p>Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container glass"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button className="btn primary-btn" onClick={() => setSubmitSuccess(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={errors.subject ? 'error' : ''}
                  />
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn primary-btn ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
