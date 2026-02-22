import { atomWithStorage } from 'jotai/utils';
import { LOCALES } from './assets/i18n/locales';

// Atom for storing the current language locale
export const langAtom = atomWithStorage('locale', LOCALES.ENGLISH);
// Atom for storing the language name (e.g., 'EN', 'RU')
export const langName = atomWithStorage('language', 'EN');
