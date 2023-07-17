import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a href="https://api.whatsapp.com/send/?phone=5511963651434" target="_blank" rel="noopener noreferrer" className="whatsapp-button">
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-button-icon" />
    </a>
  );
};

export default WhatsAppButton;
