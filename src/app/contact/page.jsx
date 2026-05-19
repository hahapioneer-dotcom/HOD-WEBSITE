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
            <section className="page-header border-b">
                <div className="container">
                    <span className="label-caps block mb-unit opacity-60">FIRM / CONTACT</span>
                    <h1 className="manifesto-heading">LET&apos;S BUILD<br/>SOMETHING<br/>PERMANENT</h1>
                    <p className="page-subtitle mt-gutter">
                        Ready to bring your vision to life? Share your project details and we&apos;ll
                        get back to you with a tailored proposal.
                    </p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="section contact-form-section">
                <div className="container">
                    <div className="grid grid-cols-4 md:grid-cols-12 gap-gutter">
                        <div className="col-span-4 md:col-span-4">
                            <h2 className="sticky-heading">Initiate</h2>
                        </div>
                        <div className="col-span-4 md:col-span-8">
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
                                        className="brutalist-input"
                                    >
                                        <option value="">SELECT A SUBJECT</option>
                                        <option value="brand-film">BRAND FILM</option>
                                        <option value="event-coverage">EVENT COVERAGE</option>
                                        <option value="social-media">SOCIAL MEDIA CONTENT</option>
                                        <option value="corporate-video">CORPORATE VIDEO</option>
                                        <option value="general-enquiry">GENERAL ENQUIRY</option>
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
                                        className="brutalist-input"
                                        placeholder="ENTER YOUR NAME"
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
                                        className="brutalist-input"
                                        placeholder="ENTER YOUR EMAIL"
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
                                            className="brutalist-input"
                                            placeholder="ENTER CITY"
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
                                            className="brutalist-input"
                                            placeholder="ENTER COUNTRY"
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
                                        className="brutalist-input"
                                    >
                                        <option value="">SELECT AN OPTION</option>
                                        <option value="google">GOOGLE SEARCH</option>
                                        <option value="social-media">SOCIAL MEDIA</option>
                                        <option value="referral">REFERRAL</option>
                                        <option value="website">WEBSITE</option>
                                        <option value="event">EVENT</option>
                                        <option value="other">OTHER</option>
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
                                        className="brutalist-input"
                                        placeholder="PROVIDE PROJECT DETAILS"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="button button-primary hover-invert w-full mt-gutter">
                                    SUBMIT ENQUIRY
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
