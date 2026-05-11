import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import FormationSection from './sections/FormationSection';
import ExperiencesSection from './sections/ExperiencesSection';
import SkillsSection from './sections/SkillsSection';
import TeachingSection from './sections/TeachingSection';
import ControlesSection from './sections/ControlesSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <FormationSection />
        <ExperiencesSection />
        <SkillsSection />
        <TeachingSection />
        <ControlesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
