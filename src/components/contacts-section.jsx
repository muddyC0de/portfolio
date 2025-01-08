import React from "react";
import { Container } from "./container";
import { SectionTitle } from "./section-title";
import { Contact } from "lucide-react";

export const ContactsSection = ({ className }) => {
  return (
    <section id="contacts">
      <Container className={"min-h-screen flex justify-center flex-col"}>
        <SectionTitle title={"CONTACTS"} Icon={Contact} />

        <div className="text-[21px] flex flex-col space-y-2">
          <p>
            <span className="underline underline-offset-4 decoration-[3px] decoration-[#14DF9B]">
              Email:
            </span>{" "}
            <b>vladliubchenko.dev@gmail.com</b>
          </p>
          <p>
            <span className="underline underline-offset-4 decoration-[3px] decoration-[#14DF9B]">
              Telegram:
            </span>{" "}
            <b>@gryazyyy</b>
          </p>
          <p>
            <span className="underline underline-offset-4 decoration-[3px] decoration-[#14DF9B]">
              Linkedin:
            </span>{" "}
            <a href="https://www.linkedin.com/in/vlad-l-65a836311">
              <b> www.linkedin.com/in/vlad-l-65a836311</b>
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};
