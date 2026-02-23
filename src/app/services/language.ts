import { Injectable, signal } from '@angular/core';

export type Language = 'en' | 'hi' | 'gu';

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    gu: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  currentLanguage = signal<Language>('gu');

  translations: Translations = {
    title: {
      en: 'Live Darshan Portal',
      hi: 'लाइव दर्शन पोर्टल',
      gu: 'લાઇવ દર્શન પોર્ટલ'
    },
    jyotirlingas: {
      en: '12 Jyotirlingas',
      hi: '12 ज्योतिर्लिंग',
      gu: '12 જ્યોતિર્લિંગ'
    },
    localTemples: {
      en: 'Local Temples',
      hi: 'स्थानीय मंदिर',
      gu: 'સ્થાનિક મંદિરો'
    },
    devotionalVideos: {
      en: 'Devotional Videos',
      hi: 'भक्ति वीडियो',
      gu: 'ભક્તિ વીડિયો'
    },
    location: {
      en: 'Location',
      hi: 'स्थान',
      gu: 'સ્થાન'
    },
    deity: {
      en: 'Deity',
      hi: 'देवता',
      gu: 'દેવતા'
    },
    liveNow: {
      en: 'LIVE NOW',
      hi: 'लाइव अभी',
      gu: 'લાઇવ હમણાં'
    },
    offlineMessage: {
      en: 'Live darshan will resume shortly',
      hi: 'लाइव दर्शन शीघ्र ही फिर से शुरू होगा',
      gu: 'લાઇવ દર્શન ટૂંક સમયમાં ફરી શરૂ થશે'
    },
    loading: {
      en: 'Loading...',
      hi: 'लोड हो रहा है...',
      gu: 'લોડ થઈ રહ્યું છે...'
    }
  };

  setLanguage(lang: Language) {
    this.currentLanguage.set(lang);
  }

  translate(key: string): string {
    const translation = this.translations[key];
    if (!translation) return key;
    return translation[this.currentLanguage()];
  }
}
