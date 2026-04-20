import { useState, useEffect } from 'react';

export default function ContactForm() {
  // СТАН ВІДКРИТТЯ
  const [isOpen, setIsOpen] = useState(false);

// ЛОГІКА ПОЯВИ ВІКНА
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('react_modal_closed')) {
        setIsOpen(true);
      }
    }, 500); // Поява через 1 хвилину
    // ОЧИЩЕННЯ ТАЙМЕРА
    return () => clearTimeout(timer);
  }, []);

// ФУНКЦІЯ ЗАКРИТТЯ
  const closePortal = () => {
    setIsOpen(false);
    // ЗБЕРЕЖЕННЯ СТАНУ
    sessionStorage.setItem('react_modal_closed', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-btn" onClick={closePortal}>&times;</span>
        
        <h2 className="modal-title">Зворотній зв'язок</h2>
        
        <form action="https://formspree.io/f/mlgobzdz" method="POST" className="modal-form">
          <input type="text" name="name" placeholder="Ім'я" required />
          
          <input type="email" name="email" placeholder="Email" required />
          
          <input type="tel" name="phone" placeholder="Номер телефону" required />
          
          <textarea name="message" placeholder="Повідомлення" rows="4"></textarea>
          
          <button type="submit" className="send-btn">Відправити</button>
        </form>
      </div>
    </div>
  );
}