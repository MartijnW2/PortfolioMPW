import React, { useState, useEffect, useRef } from 'react';
import './Footer.scss';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

const Footer = () => {
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);

  const [formData, setFromData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isformSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  // Store interim transcript for live display
  const [interimTranscript, setInterimTranscript] = useState('');

  // Initialize recognition only once
  useEffect(() => {
    if ('webkitSpeechRecognition' in window) {
      recognitionRef.current = new window.webkitSpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';
    }
  }, []);

  const handleMicClick = () => {
    const recognition = recognitionRef.current;
    if (!recognition) return;
    if (!listening) {
      setInterimTranscript('');
      recognition.start();
      setListening(true);
    } else {
      recognition.stop();
      setListening(false);
    }
  };

  useEffect(() => {
    const recognition = recognitionRef.current;
    if (!recognition) return;

    recognition.onresult = (event) => {
      let interim = '';
      let final = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          final += transcript + ' ';
        } else {
          interim += transcript;
        }
      }
      setInterimTranscript(interim);
      if (final) {
        setFromData((prev) => ({
          ...prev,
          message: prev.message ? prev.message + ' ' + final.trim() : final.trim(),
        }));
        setInterimTranscript('');
      }
    };

    recognition.onend = () => {
      setListening(false);
      setInterimTranscript('');
    };

    return () => {
      if (recognition) {
        recognition.onresult = null;
        recognition.onend = null;
      }
    };
  }, []);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFromData({ ...formData, [name]: value });
    if (name === 'message') setInterimTranscript('');
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };

  return (
    <>
      <h2 className="head-text">Get in touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:martijn.w3@gmail.com" className="p-text">martijn.w3@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+34611444638" className="p-text">+34 6 11444638</a>
        </div>
      </div>

      {!isformSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              value={name}
              name="name"
              placeholder="Your Name"
              onChange={handleChangeInput}
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              value={email}
              name="email"
              placeholder="Your Email"
              onChange={handleChangeInput}
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <textarea
              className="p-text"
              value={message + (interimTranscript ? ' ' + interimTranscript : '')}
              name="message"
              placeholder="Your Message"
              onChange={handleChangeInput}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={handleMicClick}
              style={{
                marginLeft: 8,
                background: listening ? '#eee' : '#fff',
                border: '1px solid #ccc',
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer'
              }}
              title={listening ? "Listening..." : "Speak"}
            >
              🎤
            </button>
          </div>
          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
          >
            {loading ? 'Sending' : 'Send Message'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(
    Footer, 'app__footer'),
  'contact',
  'app__primarybg'
);