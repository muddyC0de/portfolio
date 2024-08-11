import React from "react";
import { SectionTitle } from "./section-title";
import { Container } from "./container";
import { WorkItem } from "./work-item";
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
          <WorkItem
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

          <WorkItem
            isReflected={true}
            title="React Sneakers"
            description="This is a online sneakers ordering store. The site has the ability to add sneakers to cart, place an order, order history."
            techStack={[
              "JavaScript",
              "ReactJS",
              "React Router",
              "React Context",
              "AXIOS",
              "SCSS",
            ]}
            link="https://github.com/muddyC0de/react-sneakers"
            imageUrl="images/works/react-sneakers.png"
          />
        </div>
      </Container>
    </section>
  );
};
