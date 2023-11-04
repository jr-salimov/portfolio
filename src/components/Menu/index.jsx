import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { useAtom } from "jotai";
import { langAtom } from "../../atom";

export function Menu() {
  const [chosenLang, setChosenLang] = useAtom(langAtom);
  const menuItems = [
    { link: "#home", title: chosenLang.home.defaultMessage },
    { link: "#about", title: chosenLang.about.defaultMessage },
    { link: "#skills", title: chosenLang.skills.defaultMessage },
    { link: "#projects", title: chosenLang.projects.defaultMessage },
    { link: "#contacts", title: chosenLang.contacts.defaultMessage },
  ];
  const { isMobileOrTablet } = useWindowDimensions();
  const MenuView = isMobileOrTablet ? MobileMenu : DesktopMenu;

  return <MenuView items={menuItems} />;
}
