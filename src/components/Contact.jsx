import React, { useState } from 'react';
import Typewriter from 'typewriter-effect'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setStatus('Message sent! (Not Actually)');
  };

  return (
    <div className="bg-gray-100 z-0">
      <div className="text-center">
        <form onSubmit={handleSubmit} className="space-y-4 w-[300px] sm:w-[600px] mx-auto p-3 bg-primary/60 rounded-lg shadow-lg">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-white font-semibold rounded-md">
            Send Message
          </button>
        </form>

        {status && <p className="mt-4 text-xl">{status}</p>}
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div id="contact" className='relative h-screen bg-gray-100 flex flex-col justify-center items-center'>

      <div className='flex flex-col justify-center items-center gap-4'>
        <h1 className="text-4xl font-bold">
            <Typewriter
              options={{
                strings: ['Wishing to join us?', 'Submit the form now!'],
                autoStart: true,
                loop: true,
                delay: 75, // Speed of typing
                deleteSpeed: 50, // Speed of deleting
              }}
            />
        </h1>
        <ContactForm />
      </div>
    </div>

  );
};

export default Contact;
