import { useState, useEffect } from 'react'
import Header from './components/Header'
import About from './components/About'
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import Languages from './components/Languages'
import Education from './components/Education'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  // 1. СТАН ТЕМИ
  const [theme, setTheme] = useState('light')

// 2. АВТОМАТИЧНА ТЕМА
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour >= 7 && currentHour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, []);// Порожній масив,перевірка відбудеться 1 раз

  // 3. РУЧНЕ ПЕРЕМИКАННЯ
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme === 'dark' ? "dark-mode" : ""}>
      <div className="app-container">
        
        <header className="header-section">
          <Header />
          <button onClick={toggleTheme} className="theme-toggle-button">
            {theme === 'dark' ? "Світлий режим" : "Темний режим"}
          </button>
        </header>
        
        <main className="main-grid">
          <div className="column">
            <Contacts />
            <Skills />
            <Education />
          </div>
          
          <div className="column">
            <About /> 
            <Languages />
          </div>

          <div className="full-row">
            <Reviews />
          </div>
        </main>

        <div className="footer-container">
           <Footer />
        </div>

        <ContactForm />
      </div>
    </div>
  )
}

export default App