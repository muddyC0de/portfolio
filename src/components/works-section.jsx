import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";
import { Container } from "./container";
import { WorkItem } from "./work-item";
import { MobileWorkItem } from "./mobile-work-item";
import { BriefcaseBusiness } from "lucide-react";

export const WorksSection = ({ className }) => {
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

  const itemVariants = (isReflected) => ({
    hidden: { opacity: 0, x: isReflected ? 100 : -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  });

  return (
    <section id="works" className={className}>
      <Container className="flex flex-col justify-center min-h-screen">
        <SectionTitle title="WORKS" Icon={BriefcaseBusiness} />
        <div>
          {/* Mobile version */}
          <div className="md:hidden flex flex-col gap-8">
            <motion.div
              id="about-me"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
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
            </motion.div>
            <motion.div
              id="about-me"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {" "}
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
            </motion.div>
            <motion.div
              id="about-me"
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              {" "}
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
            </motion.div>
          </div>

          {/* Desktop version */}
          <div className="hidden md:flex flex-col gap-10">
            <motion.div
              variants={itemVariants(false)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              variants={itemVariants(true)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
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
            </motion.div>

            <motion.div
              variants={itemVariants(false)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <WorkItem
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
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};
