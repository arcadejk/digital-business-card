import React from 'react';
import './BusinessCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faInstagram, faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const openLink = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

const BusinessCard = () => {
  return (
    <div className="card">
      <div className="card-header">
        <img src={`${process.env.PUBLIC_URL}/arcade.jpg`}  alt="Arcade Kakpo" className="profile-image" />
        <h1>Arcade Kakpo</h1>
        <h2>Full Stack Developer</h2>
      </div>
      <div className="card-body">
        <button className="contact-button" onClick={() => openLink('mailto:arcadej@hotmail.fr')}>
          <FontAwesomeIcon icon={faEnvelope} /> Email
        </button>
        <button className="contact-button" onClick={() => openLink('https://www.linkedin.com/in/johannes-cutt-aa122a311/')}>
          <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        </button>
        <h3>About</h3>
        <p>I am a passionate full stack developer with experience in building dynamic web applications using modern technologies. I enjoy solving complex problems and learning new things.</p>
        <h3>Interests</h3>
        <p>In my free time, I love to explore new programming languages, contribute to open source projects, and play video games. I am also an avid reader and enjoy hiking.</p>
      </div>
      <div className="card-footer">
        <a href="https://www.instagram.com/arcadejkakpo/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/kakpo.johannes/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://github.com/arcadejk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://x.com/Seera2227236656" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </div>
  );
}

export default BusinessCard;
