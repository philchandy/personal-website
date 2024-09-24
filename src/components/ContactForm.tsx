

import { useState } from 'react';
import emailjs from 'emailjs-com';
import { format } from 'path';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // EmailJS API call
    emailjs.send(
      'portfolio',       // Replace with your EmailJS service ID
      'contact_form',
      formData,
      'aeMc8-Bk6NZqamIzm'
    ).then(() => {
      setLoading(false);
      setEmailSent(true);
    }).catch((error) => {
      console.error('Error sending email:', error);
      setLoading(false);
    });
  };
    return (
        <div className="container">
            <div className="flex flex-col items-center justify-center">
                {!emailSent ? (
                    <form className="w-full" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="font-sans text-md md:text-md">Name</label>
                        <input 
                            type="text" 
                            id="user_name" 
                            value={formData.user_name}
                            onChange={handleChange}
                            className="border border-gray-900/30 p-2 w-full rounded-xl bg-gray-400/50" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="font-sans text-md md:text-md">Email</label>
                        <input 
                            type="email" 
                            id="user_email" 
                            value={formData.user_email}
                            onChange={handleChange}
                            className="border border-gray-900/30 p-2 w-full rounded-xl bg-gray-400/50" 
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="font-sans text- md:text-md">Message</label>
                        <textarea 
                            id="message" 
                            value={formData.message}
                            onChange={handleChange}
                            className="border border-gray-900/30 p-2 w-full rounded-xl bg-gray-400/50"
                            required
                        >
                        </textarea>
                    </div>
                    <div className="flex items-center justify-center">
                        <button 
                            type="submit" 
                            className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 md:w-auto px-6"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>
                    </div>
                    
                    </form>
                ) : (
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">Thank you for reaching out!</h2>
                        <p>I will get back to you soon.</p>
                    </div>
                )}
            </div>
        </div>
    );
}