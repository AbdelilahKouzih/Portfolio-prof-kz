import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import StatsSection from './sections/StatsSection';
import AboutSection from './sections/AboutSection';
import FormationSection from './sections/FormationSection';
import ExperiencesSection from './sections/ExperiencesSection';
import SkillsSection from './sections/SkillsSection';
import TeachingSection from './sections/TeachingSection';
import VieScolaireSection from './sections/VieScolaireSection';
import ProjectSection from './sections/ProjectSection';
import ControlesSection from './sections/ControlesSection';
import DocumentsSection from './sections/DocumentsSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <FormationSection />
        <ExperiencesSection />
        <SkillsSection />
        <TeachingSection />
        <VieScolaireSection />
        <ProjectSection />
        <ControlesSection />
        <DocumentsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
