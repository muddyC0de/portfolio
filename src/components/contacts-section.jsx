import React from "react";
import { Container } from "./container";
import { SectionTitle } from "./section-title";

export const ContactsSection = ({ className }) => {
  return (
    <section id="contacts">
      <Container className={"min-h-screen flex justify-center flex-col"}>
        <SectionTitle
          title={"CONTACTS"}
          imageUrl={"/images/contacts-icon.svg"}
          width={30}
        />

        <div className="text-[21px] flex flex-col space-y-2">
          <p>
            Email: <b>vladlubchenko0@gmail.com</b>
          </p>
          <p>
            Telegram: <b>@gryazyyy</b>
          </p>
          <p>
            Linkedin:
            <a href="https://www.linkedin.com/in/vlad-l-65a836311">
              <b> www.linkedin.com/in/vlad-l-65a836311</b>
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
};
