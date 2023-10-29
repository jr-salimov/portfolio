import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const menuItems = [
  { link: "#home", title: "Home" },
  { link: "#about", title: "About" },
  { link: "#skills", title: "Skills" },
  { link: "#projects", title: "Projects" },
  { link: "#contacts", title: "Contacts" },
];

export function Menu() {
  const { isMobileOrTablet } = useWindowDimensions();
  const MenuView = isMobileOrTablet ? MobileMenu : DesktopMenu;

  return <MenuView items={menuItems} />;
}
