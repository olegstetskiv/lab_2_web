import Header from './components/Header';
import Contacts from './components/Contacts';
import About from './components/About';
import Skills from './components/Skills';
import Languages from './components/Languages'; // Додали цей рядок
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header />
      <main>
        <Contacts />
        <About />
        <Skills />
        <Languages /> {/* Додали цей рядок */}
        
        <section>
          <h2>Освіта</h2>
          <h3>Бакалавр 2023 - 2027</h3>
          <p>Національний університет "Львівська Політехніка"</p>
          <ul>
            <li>Кібербезпека</li>
            <li>Управління інформаційною безпекою</li>
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;