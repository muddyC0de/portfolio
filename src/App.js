import React from "react";
import { motion } from "framer-motion";
import {
  AboutMeSection,
  ContactsSection,
  Header,
  SkillsSection,
  WorksSection,
} from "./components";
import { Grid } from "./components/grid";

export const sectionIds = ["about-me", "skills", "works", "contacts"];

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};

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
      {" "}
      <div className="flex  flex-col gap-[23.5rem] mb-7">
        <Grid />
        <Header activeId={activeId} setActiveId={setActiveId} />
        {/* Секции с анимацией при скролле */}
        <motion.div
          id="about-me"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <AboutMeSection />
        </motion.div>
        <motion.div
          id="skills"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <SkillsSection />
        </motion.div>
        <motion.div
          id="works"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <WorksSection />
        </motion.div>
        <motion.div
          id="contacts"
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <ContactsSection />
        </motion.div>
      </div>
    </>
  );
}

export default App;
