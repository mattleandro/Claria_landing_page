import React, { useState, useRef, useEffect } from 'react';
import styles from './WhatsAppButton.module.css';

function WhatsAppButton() {
  const [showMessageBox, setShowMessageBox] = useState(false);
  const messageBoxTimeoutRef = useRef(null);
  const buttonRef = useRef(null);
  const messageBoxRef = useRef(null);

  const handleMouseEnter = () => {
    if (messageBoxTimeoutRef.current) {
      clearTimeout(messageBoxTimeoutRef.current);
    }
    setShowMessageBox(true);
  };

  const handleMouseLeave = () => {
    messageBoxTimeoutRef.current = setTimeout(() => {
      setShowMessageBox(false);
    }, 10000);
  };

  const sendWhatsAppMessage = () => {
    const message = document.getElementById('whatsapp-message').value;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = '5521995067999';
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setShowMessageBox(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showMessageBox &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) &&
        messageBoxRef.current &&
        !messageBoxRef.current.contains(event.target)
      ) {
        setShowMessageBox(false);
        if (messageBoxTimeoutRef.current) {
          clearTimeout(messageBoxTimeoutRef.current);
        }
      }
    };

    if (showMessageBox) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showMessageBox]);

  return (
    <>
      <div
        id="whatsapp-btn"
        className={styles['whatsapp-button']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={buttonRef}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles['whatsapp-icon']}>
          <path fill="#fff" d="M380.9 97.1C339 55.1 283.3 32 224.5 32c-117.9 0-213.5 95.6-213.5 213.5 0 37.6 9.8 74.3 28.3 106.7L0 480l132.8-38.8c30.5 16.7 64.9 25.5 99.7 25.5 117.9 0 213.5-95.6 213.5-213.5 0-58.7-23.1-114.4-65.1-156.4zM224.5 439.6c-29.1 0-58.1-7.7-83.5-22.3l-5.9-3.5-78.8 23.1 23.4-76.7-3.8-6.2c-17.9-29.4-27.4-63.3-27.4-97.5 0-104.3 84.9-189.2 189.2-189.2 50.5 0 97.9 19.7 133.5 55.3 35.6 35.6 55.3 83 55.3 133.5 0 104.3-84.9 189.2-189.2 189.2zm101.6-138.1c-5.5-2.8-32.5-16-37.6-17.8-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.8-17.5 21.5-6.4 4.1-11.9 1.4c-32.5-16.3-53.7-29.1-75.1-66.1-5.7-9.8 5.7-9.1 16.3-30.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.2-17.1-41.3-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.5-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.5-19.5 19.1-19.5 46.6s20 54.1 22.8 57.8c2.8 3.7 39.4 60.2 95.6 84.4 13.4 5.8 23.9 9.2 32.1 11.8 13.5 4.3 25.8 3.7 35.5 2.3 10.8-1.6 32.5-13.3 37.1-26.1 4.6-12.8 4.6-23.8 3.2-26.1-1.3-2.3-5-3.7-10.5-6.5z" />
        </svg>
      </div>

      {showMessageBox && (
        <div id="message-box" className={styles['whatsapp-message-box']} ref={messageBoxRef}>
          <textarea id="whatsapp-message" placeholder="Digite sua mensagem..."></textarea>
          <button onClick={sendWhatsAppMessage}>Enviar</button>
        </div>
      )}
    </>
  );
}

export default WhatsAppButton;