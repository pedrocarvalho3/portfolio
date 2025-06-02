import Social from '@/components/commons/Social';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import AboutSection from '@/components/sections/HomeSections/AboutSection';
import ContactSection from '@/components/sections/HomeSections/ContactSection';
import ExperienceSection from '@/components/sections/HomeSections/ExperienceSection';
import IntroSection from '@/components/sections/HomeSections/IntroSection';
import ProjectSection from '@/components/sections/HomeSections/ProjectSection';
import SkillSection from '@/components/sections/HomeSections/SkillSection';

export default function HomeTemplate() {
  return (
    <main>
      <div>
        <Social />
        <section className="default-container">
          <Header />
        </section>

        <section id="home" className="default-container">
          <IntroSection />
        </section>

        <section
          id="about"
          className="bg-[url('/bg-about.jpg')] bg-cover bg-center"
        >
          <AboutSection />
        </section>

        <section id="skills" className="default-container">
          <SkillSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section>
          <Footer />
        </section>
      </div>
    </main>
  );
}
