import React from "react";
import { SectionTitle } from "./section-title";
import { Container } from "./container";
import { WorkItem } from "./work-item";
import { MobileWorkItem } from "./mobile-work-item";
export const WorksSection = ({ className }) => {
  return (
    <section id="works" className={className}>
      <Container className="flex flex-col justify-center min-h-screen">
        <SectionTitle
          width={35}
          title="WORKS"
          imageUrl="images/works-icon.svg"
        />
        <div className="space-y-10">
          <div className="md:hidden">
            <MobileWorkItem
              title="Next Pizza"
              description="A full-service grocery shop specialising in pizza. The site features a variety of filtering, authorisation, modal windows for pizzas, shopping cart and checkout"
              techStack={[
                "NextJS",
                "TypeScript",
                "ReactJS",
                "TailwindCSS",
                "Prisma / PostgreSQL",
                "NextAuth",
                "React Hook Form",
                "Zod",
                "Zustand",
              ]}
              link="https://github.com/muddyC0de/next-pizza"
              imageUrl="images/works/next-pizza.png"
            />
          </div>
          <div className="hidden md:block">
            <WorkItem
              title="Next Pizza"
              description="A full-service grocery shop specialising in pizza..."
              techStack={[
                "NextJS",
                "TypeScript",
                "ReactJS",
                "TailwindCSS",
                "Prisma / PostgreSQL",
                "NextAuth",
                "React Hook Form",
                "Zod",
                "Zustand",
              ]}
              link="https://github.com/muddyC0de/next-pizza"
              imageUrl="images/works/next-pizza.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
