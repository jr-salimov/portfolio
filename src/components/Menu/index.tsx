import { useIntl } from 'react-intl';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import DesktopMenu from './DesktopMenu/index.jsx';
import MobileMenu from './MobileMenu/index.jsx';

interface MenuItem {
  link: string;
  title: string;
}

export function Menu(): React.ReactElement {
  const intl = useIntl();

  const menuItems: MenuItem[] = [
    { link: '#home', title: intl.formatMessage({ id: 'home' }) },
    { link: '#about', title: intl.formatMessage({ id: 'about' }) },
    { link: '#skills', title: intl.formatMessage({ id: 'skills' }) },
    { link: '#projects', title: intl.formatMessage({ id: 'projects' }) },
    { link: '#contacts', title: intl.formatMessage({ id: 'contacts' }) },
  ];
  const { isMobileOrTablet } = useWindowDimensions();
  const MenuView : any = isMobileOrTablet ? MobileMenu : DesktopMenu;

  return <MenuView items={menuItems} />;
}
