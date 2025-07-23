// src/components/Contact/Contact.js
import React, { useState } from 'react';
import styles from './Contact.module.css'; // Importa o CSS Module

function Contact({ id }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário (ex: para uma API, emailjs, etc.)
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', message: '' }); // Limpa o formulário
  };

  return (
    <section id={id} className={`container ${styles['contact-section']}`}>
      <h3 className={styles['section-title']}>Entre em Contato</h3> {/* */}
      <p>Para shows, parcerias ou mais informações, sinta-se à vontade para entrar em contato:</p> {/* */}
      <form className={styles['contact-form']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="name">Nome:</label> {/* */}
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} /> {/* */}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="email">Email:</label> {/* */}
          <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} /> {/* */}
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="message">Mensagem:</label> {/* */}
          <textarea id="message" name="message" rows="5" required placeholder="Olá, gostaria de fazer uma parceria (mensagem exemplo)" value={formData.message} onChange={handleChange}></textarea> {/* */}
        </div>
        <button type="submit" className={`${styles.btn} ${styles['primary-btn']}`}>
          Enviar Mensagem {/* */}
        </button>
      </form>

      <div className={styles['social-links']}>
        <p>Siga Clariá nas redes sociais:</p> {/* */}
        {/* Instagram Icon */}
        <a href="https://www.instagram.com/aclariclaria" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Instagram da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M12 2.163c3.204 0 3.584.012 4.85.071 1.17.06 1.74.24 2.227.427.52.2.98.47 1.417.907.437.436.707.9.907 1.417.187.487.367 1.057.427 2.227.06.866.071 1.146.071 4.85s-.012 3.584-.071 4.85c-.06 1.17-.24 1.74-.427 2.227-.2.52-.47.98-.907 1.417-.436.437-.9.707-1.417.907-.487.187-1.057.367-2.227.427-.866.06-1.146.071-4.85.071s-3.584-.012-4.85-.071c-1.17-.06-1.74-.24-2.227-.427-.52-.2-.98-.47-.907-1.417-.437-.436-.707-.9-.907-1.417-.187-.487-.367-1.057-.427-2.227-.06-.866-.071-1.146-.071-4.85s.012-3.584.071-4.85c.06-1.17.24-1.74.427-2.227.2-.52.47-.98.907-1.417.436-.437.9-.707 1.417-.907.487-.187 1.057-.367 2.227-.427.866-.06 1.146-.071 4.85-.071zm0-2.163c-3.259 0-3.667.014-4.947.072-1.37.064-2.313.29-3.115.593-.8.303-1.46.73-2.114 1.384-.654.654-1.08 1.314-1.384 2.114-.303.802-.529 1.745-.593 3.115-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.064 1.37.29 2.313.593 3.115.303.8.73 1.46 1.384 2.114.654.654 1.314 1.08 2.114 1.384.802.303 1.745.529 3.115.593 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.37-.064 2.313-.29 3.115-.593.8-.303 1.46-.73 2.114-1.384.654-.654 1.314-1.08 1.384-2.114.303-.802.529-1.745.593-3.115.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.064-1.37-.29-2.313-.593-3.115-.303-.8-.73-1.46-1.384-2.114-.654-.654-1.314-1.08-2.114-1.384-.802-.303-1.745-.529-3.115-.593-1.28-.058-1.688-.072-4.947-.072zM12 6.865c-2.83 0-5.135 2.305-5.135 5.135s2.305 5.135 5.135 5.135 5.135-2.305 5.135-5.135-2.305-5.135-5.135-5.135zM12 15.135c-1.734 0-3.135-1.401-3.135-3.135s1.401-3.135 3.135-3.135 3.135 1.401 3.135 3.135-1.401 3.135-3.135 3.135zm6.807-9.646c-.643 0-1.163.52-1.163 1.163s.52 1.163 1.163 1.163 1.163-.52 1.163-1.163-.52-1.163-1.163-1.163z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>Instagram</span> {/* */}
        </a>
        {/* TikTok Icon */}
        <a href="https://www.tiktok.com/@aclariclaria" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Tiktok da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M12.75 2c1.25 0 2.437.53 3.25 1.437.49.531.916 1.168 1.531 1.437.645.285 1.418.392 2.469.392v2.344c-1.323 0-2.363-.176-3.25-.5v7.39c0 3.605-2.385 6.75-6.125 6.75-2.156 0-4.063-1.27-4.875-3.187-.25-.583-.437-1.25-.437-2.031 0-2.584 2.01-4.625 4.625-4.625.458 0 .916.083 1.344.25v2.407c-.406-.156-.833-.25-1.344-.25-1.208 0-2.25 1.063-2.25 2.438 0 .573.125 1.031.281 1.375.438.99 1.49 1.687 2.594 1.687 2.167 0 3.625-1.833 3.625-3.938v-9.719c-.771-.104-1.479-.458-2.063-1-.698-.657-1.135-1.531-1.219-2.563h2.469z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>TikTok</span> {/* */}
        </a>
        {/* Email Icon */}
        <a href="mailto:contato.aclaria@gmail.com" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Email da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>Email</span> {/* */}
        </a>
        {/* Youtube Icon */}
        <a href="https://www.youtube.com/channel/aclariclaria" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Youtube da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>Youtube</span> {/* */}
        </a>
        {/* Spotify Icon */}
        <a href="https://open.spotify.com/intl-pt/album/7sNlDAVnqTf44AsqzYvGc0" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Spotify da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>Spotify</span> {/* */}
        </a>
        {/* Hyperddit Icon */}
        <a href="https://hyperddit.com/jc5rhf" target="_blank" rel="noopener noreferrer" className={styles['icon-item']} aria-label="Hyperddit da Clariá"> {/* */}
          <div className={styles['icon-wrapper']}>
            <svg viewBox="0 0 24 24" className={styles['instagram-icon']}> {/* */}
              <path d="M0 0v24h24V0H0zm4.602 4.025h2.244c.509 0 .716.215.716.717v5.64h8.883v-5.64c0-.509.215-.717.717-.717h2.229c.5 0 .71.23.724.717v14.516c0 .509-.215.717-.717.717h-2.23c-.51 0-.717-.215-.717-.717v-5.735H7.562v5.735c0 .516-.215.717-.716.717H4.602c-.51 0-.717-.208-.717-.717V4.742c0-.509.207-.717.717-.717z" />
            </svg>
          </div>
          <span className={styles['icon-label']}>Hyperddit</span> {/* */}
        </a>
      </div>
    </section>
  );
}

export default Contact;