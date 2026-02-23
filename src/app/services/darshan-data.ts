import { Injectable, signal } from '@angular/core';
import { DarshanItem } from '../models/darshan.model';

@Injectable({
  providedIn: 'root',
})
export class DarshanDataService {
  /**
   * Live Darshan Portal - YouTube Live Stream Channels
   *
   * These channels provide continuous live darshan streams.
   * The youtubeId stores the YouTube channel handle (e.g., @channelName).
   * These are embedded as: https://www.youtube.com/embed/@channelHandle/live
   */
  private allItems: DarshanItem[] = [
    // 12 Jyotirlingas
    {
      id: 'somnath',
      name: {
        en: 'Somnath Temple',
        hi: 'सोमनाथ मंदिर',
        gu: 'સોમનાથ મંદિર'
      },
      category: 'jyotirlinga',
      youtubeId: '@SomnathTempleOfficialChannel',
      location: {
        en: 'Prabhas Patan, Gujarat',
        hi: 'प्रभास पाटन, गुजरात',
        gu: 'પ્રભાસ પાટણ, ગુજરાત'
      },
      deity: {
        en: 'Somnath Jyotirlinga',
        hi: 'सोमनाथ ज्योतिर्लिंग',
        gu: 'સોમનાથ જ્યોતિર્લિંગ'
      },
      isLive: true
    },
    {
      id: 'mahakaleshwar',
      name: {
        en: 'Mahakaleshwar Temple',
        hi: 'महाकालेश्वर मंदिर',
        gu: 'મહાકાલેશ્વર મંદિર'
      },
      category: 'jyotirlinga',
      youtubeId: '@mahakaleshwar_live',
      location: {
        en: 'Ujjain, Madhya Pradesh',
        hi: 'उज्जैन, मध्य प्रदेश',
        gu: 'ઉજ્જૈન, મધ્ય પ્રદેશ'
      },
      deity: {
        en: 'Mahakaleshwar Jyotirlinga',
        hi: 'महाकालेश्वर ज्योतिर्लिंग',
        gu: 'મહાકાલેશ્વર જ્યોતિર્લિંગ'
      },
      isLive: true
    },
    {
      id: 'omkareshwar',
      name: {
        en: 'Omkareshwar Temple',
        hi: 'ओंकारेश्वर मंदिर',
        gu: 'ઓંકારેશ્વર મંદિર'
      },
      category: 'jyotirlinga',
      youtubeId: '@ShriOmkarOfficial',
      location: {
        en: 'Khandwa, Madhya Pradesh',
        hi: 'खंडवा, मध्य प्रदेश',
        gu: 'ખાંડવા, મધ્ય પ્રદેશ'
      },
      deity: {
        en: 'Omkareshwar Jyotirlinga',
        hi: 'ओंकारेश्वर ज्योतिर्लिंग',
        gu: 'ઓંકારેશ્વર જ્યોતિર્લિંગ'
      },
      isLive: true
    },
    {
      id: 'kashi-vishwanath',
      name: {
        en: 'Kashi Vishwanath Temple',
        hi: 'काशी विश्वनाथ मंदिर',
        gu: 'કાશી વિશ્વનાથ મંદિર'
      },
      category: 'jyotirlinga',
      youtubeId: '@ShreeKashiVishwanathMandir',
      location: {
        en: 'Varanasi, Uttar Pradesh',
        hi: 'वाराणसी, उत्तर प्रदेश',
        gu: 'વારાણસી, ઉત્તર પ્રદેશ'
      },
      deity: {
        en: 'Kashi Vishwanath Jyotirlinga',
        hi: 'काशी विश्वनाथ ज्योतिर्लिंग',
        gu: 'કાશી વિશ્વનાથ જ્યોતિર્લિંગ'
      },
      isLive: true
    },
    {
      id: 'nageshwar',
      name: {
        en: 'Nageshwar Jyotirlinga',
        hi: 'नागेश्वर ज्योतिर्लिंग',
        gu: 'નાગેશ્વર જ્યોતિર્લિંગ'
      },
      category: 'jyotirlinga',
      youtubeId: '@nageshwarjyotirlingadwarik9968',
      location: {
        en: 'Dwarka, Gujarat',
        hi: 'द्वारका, गुजरात',
        gu: 'દ્વારકા, ગુજરાત'
      },
      deity: {
        en: 'Nageshwar Jyotirlinga',
        hi: 'नागेश्वर ज्योतिर्लिंग',
        gu: 'નાગેશ્વર જ્યોતિર્લિંગ'
      },
      isLive: true
    },

    // Local Temples (Gujarat)
    {
      id: 'umiya-mata-unjha',
      name: {
        en: 'Umiya Mata Temple Unjha',
        hi: 'उमिया माता मंदिर उंझा',
        gu: 'ઉમિયા માતા મંદિર ઉંઝા'
      },
      category: 'local-temple',
      youtubeId: '@umiyamatajiunjha',
      location: {
        en: 'Unjha, Gujarat',
        hi: 'उंझा, गुजरात',
        gu: 'ઉંઝા, ગુજરાત'
      },
      deity: {
        en: 'Umiya Mata',
        hi: 'उमिया माता',
        gu: 'ઉમિયા માતા'
      },
      isLive: true
    },
    {
      id: 'ambaji-temple',
      name: {
        en: 'Ambaji Temple',
        hi: 'अंबाजी मंदिर',
        gu: 'અંબાજી મંદિર'
      },
      category: 'local-temple',
      youtubeId: '@officialambajitemple',
      location: {
        en: 'Ambaji, Gujarat',
        hi: 'अंबाजी, गुजरात',
        gu: 'અંબાજી, ગુજરાત'
      },
      deity: {
        en: 'Ambaji Mata',
        hi: 'अंबाजी माता',
        gu: 'અંબાજી માતા'
      },
      isLive: true
    },
    {
      id: 'salangpur-hanuman',
      name: {
        en: 'Salangpur Hanuman Temple',
        hi: 'सलंगपुर हनुमान मंदिर',
        gu: 'સલંગપુર હનુમાન મંદિર'
      },
      category: 'local-temple',
      youtubeId: '@salangpurhanumanji',
      location: {
        en: 'Salangpur, Gujarat',
        hi: 'सलंगपुर, गुजरात',
        gu: 'સલંગપુર, ગુજરાત'
      },
      deity: {
        en: 'Kashtabhanjan Hanumanji',
        hi: 'कष्टभंजन हनुमानजी',
        gu: 'કષ્ટભંજન હનુમાનજી'
      },
      isLive: true
    },
    {
      id: 'dwarkadhish-temple',
      name: {
        en: 'Dwarkadhish Temple',
        hi: 'द्वारकाधीश मंदिर',
        gu: 'દ્વારકાધીશ મંદિર'
      },
      category: 'local-temple',
      youtubeId: '@shridwarkadhishmandirofficial',
      location: {
        en: 'Dwarka, Gujarat',
        hi: 'द्वारका, गुजरात',
        gu: 'દ્વારકા, ગુજરાત'
      },
      deity: {
        en: 'Dwarkadhish (Lord Krishna)',
        hi: 'द्वारकाधीश (भगवान कृष्ण)',
        gu: 'દ્વારકાધીશ (ભગવાન કૃષ્ણ)'
      },
      isLive: true
    },
    {
      id: 'ranchhodrai-dakor',
      name: {
        en: 'Ranchhodrai Temple Dakor',
        hi: 'रणछोड़राय मंदिर डाकोर',
        gu: 'રણછોડરાય મંદિર ડાકોર'
      },
      category: 'local-temple',
      youtubeId: '@RanchhodraijiLiveDarshanDakor',
      location: {
        en: 'Dakor, Gujarat',
        hi: 'डाकोर, गुजरात',
        gu: 'ડાકોર, ગુજરાત'
      },
      deity: {
        en: 'Ranchhodraiji (Lord Krishna)',
        hi: 'रणछोड़राय (भगवान कृष्ण)',
        gu: 'રણછોડરાય (ભગવાન કૃષ્ણ)'
      },
      isLive: true
    },

    // Devotional Videos
    {
      id: 'hanuman-chalisa',
      name: {
        en: 'Hanuman Chalisa',
        hi: 'हनुमान चालीसा',
        gu: 'હનુમાન ચાલીસા'
      },
      category: 'devotional-video',
      youtubeId: 'AETFvQonfV8',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Sacred hymn dedicated to Lord Hanuman',
        hi: 'भगवान हनुमान को समर्पित पवित्र भजन',
        gu: 'ભગવાન હનુમાનને સમર્પિત પવિત્ર સ્તોત્ર'
      }
    },
    {
      id: 'hanuman-chalisa-fast',
      name: {
        en: 'Hanuman Chalisa (Fast)',
        hi: 'हनुमान चालीसा (तेज)',
        gu: 'હનુમાન ચાલીસા (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'xJ3vatsNQDU',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred hymn dedicated to Lord Hanuman',
        hi: 'भगवान हनुमान को समर्पित पवित्र भजन (तेज संस्करण)',
        gu: 'ભગવાન હનુમાનને સમર્પિત પવિત્ર સ્તોત્ર (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'shani-chalisa',
      name: {
        en: 'Shani Chalisa',
        hi: 'शनि चालीसा',
        gu: 'શનિ ચાલીસા'
      },
      category: 'devotional-video',
      youtubeId: 'MJ14wONWjWg',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Sacred hymn dedicated to Lord Shani',
        hi: 'भगवान शनि को समर्पित पवित्र भजन',
        gu: 'ભગવાન શનિને સમર્પિત પવિત્ર સ્તોત્ર'
      }
    },
    {
      id: 'shani-chalisa-fast',
      name: {
        en: 'Shani Chalisa (Fast)',
        hi: 'शनि चालीसा (तेज)',
        gu: 'શનિ ચાલીસા (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'qOkS17u0bFA',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred hymn dedicated to Lord Shani',
        hi: 'भगवान शनि को समर्पित पवित्र भजन (तेज संस्करण)',
        gu: 'ભગવાન શનિને સમર્પિત પવિત્ર સ્તોત્ર (ઝડપી સંસ્કરણ)'
      }
    }
  ];

  items = signal<DarshanItem[]>(this.allItems);

  getItemsByCategory(category: string) {
    return this.allItems.filter(item => item.category === category);
  }

  getAllItems() {
    return this.allItems;
  }
}
