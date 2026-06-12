import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoansPage from './pages/LoansPage';
import CalculatorPage from './pages/CalculatorPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import FeesPage from './pages/FeesPage';
import ResponsibleLendingPage from './pages/ResponsibleLendingPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#F6F8FE] flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/responsible-lending" element={<ResponsibleLendingPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
