import HeroSection from '../sections/HeroSection';
import HowItWorksSection from '../sections/HowItWorksSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import CalculatorSection from '../sections/CalculatorSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import UseCasesSection from '../sections/UseCasesSection';
import SecuritySection from '../sections/SecuritySection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';

export default function HomePage() {
  return (
    <main className="w-full">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <CalculatorSection />
      <TestimonialsSection />
      <UseCasesSection />
      <SecuritySection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
