import github from "../../images/Contacts/github.svg";
import instagram from "../../images/Contacts/instagram.svg";
import linkedin from "../../images/Contacts/linkedin.svg";
import dribble from "../../images/Contacts/dribble.svg";
import discord from "../../images/Contacts/discord.svg";
import "./Footer.module.scss";

export function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/jr-salimov">
          <img src={github} alt="github" />
        </a>
        <a href="https://github.com/jr-salimov">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://github.com/jr-salimov">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/jr-salimov">
          <img src={dribble} alt="dribble" />
        </a>
        <a href="https://github.com/jr-salimov">
          <img src={discord} alt="discord" />
        </a>
      </div>
      <div>&copy; 2023. Atoullo Salimov</div>
    </footer>
  );
}
