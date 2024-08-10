import React from "react";
import { SectionTitle } from "./section-title";
import { Container } from "./container";
import { WorkItem } from "./work-item";

export const WorksSection = ({ className }) => {
  return (
    <section className={className}>
      <Container className="flex flex-col justify-center min-h-screen">
        <SectionTitle title="WORKS" imageUrl="/images/works-icon.svg" />
        <div className="">
          <WorkItem
            title="Work 1"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

"
            techStack={["Tech 1", "Tech 2"]}
            link="#"
            imageUrl="/images/works/next-pizza.png"
          />
        </div>
      </Container>
    </section>
  );
};
