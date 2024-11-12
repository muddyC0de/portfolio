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
        <div>
          <div className="md:hidden flex flex-col gap-8">
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

            <MobileWorkItem
              title="React Pizza"
              description="Next Pizza's predecessor. Still the same online pizza shop with the ability to add items to basket, checkout, filtering."
              techStack={[
                "TypeScript",
                "ReactJS",
                "SCSS modules",
                "mockAPI",
                "React Hook Form",
                "Redux Toolkit",
                "React Router",
              ]}
              link="https://github.com/muddyC0de/react-pizza"
              imageUrl="images/works/react-pizza.png"
            />

            <MobileWorkItem
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

            <MobileWorkItem
              title="Next Blog"
              description="An app for personal blogging."
              techStack={[
                "NextJS",
                "TypeScript",
                "ReactJS",
                "TailwindCSS",
                "Prisma / PostgreSQL",
                "NextAuth",
                "React Hook Form",
                "Zod",
              ]}
              link="https://github.com/muddyC0de/next-blog"
              imageUrl="images/works/next-blog.png"
            />
          </div>
          <div className="hidden md:flex flex-col gap-10 ">
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

            <WorkItem
              title="Next Blog"
              description="An app for personal blogging."
              techStack={[
                "NextJS",
                "TypeScript",
                "ReactJS",
                "TailwindCSS",
                "Prisma / PostgreSQL",
                "NextAuth",
                "React Hook Form",
                "Zod",
              ]}
              link="https://github.com/muddyC0de/next-blog"
              imageUrl="images/works/next-blog.png"
            />

            <WorkItem
              isReflected={true}
              title="React Pizza"
              description="Next Pizza's predecessor. Still the same online pizza shop with the ability to add items to basket, checkout, filtering."
              techStack={[
                "TypeScript",
                "ReactJS",
                "SCSS modules",
                "mockAPI",
                "React Hook Form",
                "Redux Toolkit",
                "React Router",
              ]}
              link="https://github.com/muddyC0de/react-pizza"
              imageUrl="images/works/react-pizza.png"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
