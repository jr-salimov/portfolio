import { LOCALES } from './locales';

type MessageKeys = {
  home: string;
  about: string;
  skills: string;
  projects: string;
  contacts: string;
  title1: string;
  title2_1: string;
  title2_2: string;
  title3: string;
  title4: string;
  title5: string;
  description1: string;
  aboutMe: string;
  smallText1: string;
  description2: string;
  smallText2: string;
  description3: string;
  description3_1: string;
  description4: string;
  seeProjects: string;
  description5: string;
  languages: string;
};

export const messages: {
  [key in typeof LOCALES[keyof typeof LOCALES]]: MessageKeys;
}; 