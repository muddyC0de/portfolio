import React from "react";
import { Container } from "./container";

export const AboutMeSection = ({ className }) => {
  return (
    <section id="about-me" className={className}>
      <Container className={"min-h-screen flex justify-center flex-col"}>
        <h2 className={"text-[60px] text-[#646464]"}>Hello World! I'm</h2>
        <h1 className={"text-[120px] font-extrabold mr-14 text-primary"}>
          VLAD
        </h1>

        <p className="text-[25px] leading-[50px]">
          Hi, my fullname is <b>Lubchenko Vlad</b>. <br />
          I'm a frontend developer. I write code in JavaScript. <br /> My love
          is{" "}
          <img
            src="https://em-content.zobj.net/source/apple/391/red-heart_2764-fe0f.png"
            width={24}
            alt="heart"
            className="inline relative bottom-1 mr-3"
          />
          ReactJS{" "}
          <img
            src="	https://em-content.zobj.net/source/apple/391/atom-symbol_269b-fe0f.png"
            width={24}
            alt="atom"
            className="inline relative bottom-1"
          />{" "}
          Redux Toolkit
        </p>
      </Container>
    </section>
  );
};
