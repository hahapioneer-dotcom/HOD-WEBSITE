'use client';

import { useState } from 'react';
import './page.css';

export default function Contact() {
    const [formData, setFormData] = useState({
        subject: '',
        name: '',
        email: '',
        city: '',
        country: '',
        source: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        alert('Thank you for your enquiry! We will get back to you soon.');
    };

    return (
        <div className="contact-page">
            {/* Page Header */}
            <section className="page-header">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p className="page-subtitle">
                        Ready to bring your vision to life? Share your project details and we&apos;ll
                        get back to you with a tailored proposal.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section contact-form-section">
                <div className="container">
                    <div className="form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            {/* Subject */}
                            <div className="form-group">
                                <label htmlFor="subject">Subject *</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a subject</option>
                                    <option value="brand-film">Brand Film</option>
                                    <option value="event-coverage">Event Coverage</option>
                                    <option value="social-media">Social Media Content</option>
                                    <option value="corporate-video">Corporate Video</option>
                                    <option value="general-enquiry">General Enquiry</option>
                                </select>
                            </div>

                            {/* Name */}
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* City and Country */}
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="country">Country *</label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        value={formData.country}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* How did you hear about us */}
                            <div className="form-group">
                                <label htmlFor="source">How did you hear about us? *</label>
                                <select
                                    id="source"
                                    name="source"
                                    value={formData.source}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select an option</option>
                                    <option value="google">Google Search</option>
                                    <option value="social-media">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="website">Website</option>
                                    <option value="event">Event</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    required
                                />
                            </div>

                            {/* Submit Button */}
                            <button type="submit" className="button button-black">
                                Send Enquiry
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
