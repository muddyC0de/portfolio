import React from "react";
import { Container } from "./container";
import { SkillsItem } from "./skills-item";
import { SectionTitle } from "./section-title";

export const SkillsSection = ({ className }) => {
  return (
    <section id="skills" className={className}>
      <Container className={"min-h-screen flex justify-center flex-col"}>
        <SectionTitle
          width={35}
          title="SKILLS"
          imageUrl="images/skills-icon.svg"
        />

        <div className="grid grid-rows-[1fr] gap-x-[5px]  gap-y-[10px] grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))]">
          <SkillsItem title="HTML5" imageUrl="images/HTML5-icon.svg" />
          <SkillsItem title="CSS3" imageUrl="images/CSS3-icon.svg" />
          <SkillsItem title="JS" imageUrl="images/JS-icon.svg" />
          <SkillsItem title="TS" imageUrl="images/typescript-icon.svg" />
          <SkillsItem title="ReactJS" imageUrl="images/React-icon.svg" />
          <SkillsItem title="NextJS" imageUrl="images/next-js.svg" />
          <SkillsItem title="Redux" imageUrl="images/redux-icon.svg" />
          <SkillsItem title="Zustand" imageUrl="images/zustand-icon.svg" />
          <SkillsItem title="SCSS" imageUrl="images/scss-icon.svg" />
          <SkillsItem title="Tailwind" imageUrl="images/tailwind-icon.svg" />
          <SkillsItem title="Prisma" imageUrl="images/prisma-icon.svg" />
        </div>
      </Container>
    </section>
  );
};
