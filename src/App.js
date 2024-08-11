import {
  AboutMeSection,
  ContactsSection,
  Header,
  SkillsSection,
  WorksSection,
} from "./components";
import React from "react";
import { Grid } from "./components/grid";

export const sectionIds = ["about-me", "skills", "works", "contacts"];

function App() {
  const [activeId, setActiveId] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id));
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);
  return (
    <>
      <Grid />
      <Header activeId={activeId} setActiveId={setActiveId} />
      <AboutMeSection />
      <SkillsSection />
      <WorksSection />
      <ContactsSection />
    </>
  );
}

export default App;
