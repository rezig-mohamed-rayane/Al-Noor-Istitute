import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import EnrollForm from './components/EnrollForm';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <WhyUs />
      <Testimonials />
      <EnrollForm />
      <Footer />
    </LanguageProvider>
  );
}

export default App;
