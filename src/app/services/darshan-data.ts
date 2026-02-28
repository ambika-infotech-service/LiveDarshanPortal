import { Injectable } from '@angular/core';
import { DarshanItem } from '../models/darshan.model';

@Injectable({
  providedIn: 'root',
})
export class DarshanDataService {
  /**
   * Live Darshan Portal - YouTube Live Stream Channels
   *
  * These channels provide continuous live darshan streams.
  * Use channelId for reliable live embeds: https://www.youtube.com/embed/live_stream?channel=CHANNEL_ID
  * The youtubeId still stores the channel handle (e.g., @channelName) for links when needed.
   */
  private jyotirlingaItems: DarshanItem[] = [
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
      channelId: 'UCT1egsvA08YcdMLiEu1DTRg',
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
      channelId: 'UCiH1r_BDhmHU4_CXX2mlcXw',
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
      channelId: 'UCsIZ3yYwCW4316fPX3V-4lg',
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
      channelId: 'UCdMj2twWfMHXrWgX5oVdoyA',
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
      channelId: 'UChehm1WKmChFGvnwhYurctg',
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
  ];

  private localTempleItems: DarshanItem[] = [
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
      channelId: 'UCJhH7NV0ArTSUA3r4uXnGCw',
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
      channelId: 'UCUge9PCf1By7w1DEP95xXoA',
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
        hi: 'सालंगपुर हनुमान मंदिर ()श्री कष्टभंजनदेव हनुमानजी मंदिर)',
        gu: 'સાળંગપુર હનુમાન મંદિર (શ્રી કષ્ટભંજનદેવ હનુમાનજી મંદિર)'
      },
      category: 'local-temple',
      youtubeId: '@salangpurhanumanji',
      channelId: 'UCI1r_MNxzyvUPHyTdWDe4NA',
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
      channelId: 'UCBAvMHZO3BIfMMhOK9LMOYQ',
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
      channelId: 'UCFJGjnmIvcZVNkOggfYKp3A',
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
    {
      id: 'khodiyar-mandir',
      name: {
        en: 'Khodiyar Mandir',
        hi: 'खोडियार मंदिर',
        gu: 'ખોડિયાર મંદિર'
      },
      category: 'local-temple',
      youtubeId: '@khodiyarmandirtrust',
      channelId: 'UCo7bpO8VR_DRB1E4GI5qswA',
      location: {
        en: 'Rajpara, Gujarat',
        hi: 'राजपारा, गुजरात',
        gu: 'રાજપારા, ગુજરાત'
      },
      deity: {
        en: 'Khodiyar Mata',
        hi: 'खोडियार माता',
        gu: 'ખોડિયાર માતા'
      },
      isLive: true
    },
    // TODO: Uncomment when ready
    // {
    //   id: 'swaminarayan-kalupur',
    //   name: {
    //     en: 'Shree Swaminarayan Mandir Kalupur',
    //     hi: 'श्री स्वामीनारायण मंदिर कालूपुर',
    //     gu: 'શ્રી સ્વામીનારાયણ મંદિર કાલૂપુર'
    //   },
    //   category: 'local-temple',
    //   youtubeId: '@SwaminarayanLiveDarshan',
    //   channelId: 'UCRit5-okD6Ry_l1Bc1fEAKg',
    //   location: {
    //     en: 'Kalupur, Ahmedabad, Gujarat',
    //     hi: 'कालूपुर, अहमदाबाद, गुजरात',
    //     gu: 'કાલૂપુર, અમદાવાદ, ગુજરાત'
    //   },
    //   deity: {
    //     en: 'Lord Swaminarayan',
    //     hi: 'भगवान स्वामीनारायण',
    //     gu: 'ભગવાન સ્વામીનારાયણ'
    //   },
    //   isLive: true
    // },
  ];

  private devotionalItems: DarshanItem[] = [
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
      id: 'bajrang-baan',
      name: {
        en: 'Bajrang Baan',
        hi: 'बजरंग बाण',
        gu: 'બજરંગ બાણ'
      },
      category: 'devotional-video',
      youtubeId: 'h1lT6cxwsPw',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Powerful hymn dedicated to Lord Hanuman',
        hi: 'भगवान हनुमान को समर्पित शक्तिशाली स्तोत्र',
        gu: 'ભગવાન હનુમાનને સમર્પિત શક્તિશાળી સ્તોત્ર'
      }
    },
    {
      id: 'bajrang-baan-fast',
      name: {
        en: 'Bajrang Baan (Fast)',
        hi: 'बजरंग बाण (तेज)',
        gu: 'બજરંગ બાણ (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'Fahq3LYQq88',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Fast version of powerful hymn dedicated to Lord Hanuman',
        hi: 'भगवान हनुमान को समर्पित शक्तिशाली स्तोत्र (तेज संस्करण)',
        gu: 'ભગવાન હનુમાનને સમર્પિત શક્તિશાળી સ્તોત્ર (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'sankat-mochan-ashtak',
      name: {
        en: 'Sankat Mochan Hanuman Ashtak',
        hi: 'संकट मोचन हनुमान अष्टक',
        gu: 'સંકટ મોચન હનુમાન અષ્ટક'
      },
      category: 'devotional-video',
      youtubeId: 'HH_a6aRO1TE',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Sacred Ashtak for removing obstacles, dedicated to Lord Hanuman',
        hi: 'संकट निवारण हेतु पवित्र अष्टक, भगवान हनुमान को समर्पित',
        gu: 'સંકટ નિવારણ માટે પવિત્ર અષ્ટક, ભગવાન હનુમાનને સમર્પિત'
      }
    },
    {
      id: 'sankat-mochan-ashtak-fast',
      name: {
        en: 'Sankat Mochan Hanuman Ashtak (Fast)',
        hi: 'संकट मोचन हनुमान अष्टक (तेज)',
        gu: 'સંકટ મોચન હનુમાન અષ્ટક (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'ZWLTsCqpCew',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred Ashtak for removing obstacles',
        hi: 'संकट निवारण हेतु पवित्र अष्टक (तेज संस्करण)',
        gu: 'સંકટ નિવારણ માટે પવિત્ર અષ્ટક (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'hanuman-aarti',
      name: {
        en: 'Hanuman Aarti',
        hi: 'हनुमान आरती',
        gu: 'હનુમાન આરતી'
      },
      category: 'devotional-video',
      youtubeId: 'r7GJ8GoGSD8',
      deity: {
        en: 'Lord Hanuman',
        hi: 'भगवान हनुमान',
        gu: 'ભગવાન હનુમાન'
      },
      isLive: false,
      description: {
        en: 'Sacred Aarti dedicated to Lord Hanuman',
        hi: 'भगवान हनुमान को समर्पित पवित्र आरती',
        gu: 'ભગવાન હનુમાનને સમર્પિત પવિત્ર આરતી'
      }
    },
    {
      id: 'shiv-tandav-stotram',
      name: {
        en: 'Shiv Tandav Stotram',
        hi: 'शिव तांडव स्तोत्रम',
        gu: 'શિવ તાંડવ સ્તોત્રમ'
      },
      category: 'devotional-video',
      youtubeId: 'hMBKmQEPNzI',
      deity: {
        en: 'Lord Shiva',
        hi: 'भगवान शिव',
        gu: 'ભગવાન શિવ'
      },
      isLive: false,
      description: {
        en: 'Powerful hymn describing the cosmic dance of Lord Shiva',
        hi: 'भगवान शिव के तांडव नृत्य का वर्णन करता शक्तिशाली स्तोत्र',
        gu: 'ભગવાન શિવના તાંડવ નૃત્યનું વર્ણન કરતું શક્તિશાળી સ્તોત્ર'
      }
    },
    {
      id: 'mahamrityunjaya-mantra',
      name: {
        en: 'Mahamrityunjaya Mantra (1008 times)',
        hi: 'महामृत्युंजय मंत्र (1008 बार)',
        gu: 'મહામૃત્યુંજય મંત્ર (1008 વખત)'
      },
      category: 'devotional-video',
      youtubeId: 'aIIQgz9wfEY',
      deity: {
        en: 'Lord Shiva',
        hi: 'भगवान शिव',
        gu: 'ભગવાન શિવ'
      },
      isLive: false,
      description: {
        en: 'Sacred mantra for health and victory over death, chanted 1008 times',
        hi: 'स्वास्थ्य और मृत्यु पर विजय का पवित्र मंत्र, 1008 बार जप',
        gu: 'આરોગ્ય અને મૃત્યુ પર વિજય માટે પવિત્ર મંત્ર, 1008 વખત જાપ'
      }
    },
    {
      id: 'om-namah-shivaya',
      name: {
        en: 'Om Namah Shivaya (1008 times)',
        hi: 'ॐ नमः शिवाय (1008 बार)',
        gu: 'ૐ નમઃ શિવાય (1008 વખત)'
      },
      category: 'devotional-video',
      youtubeId: 'azMzhU4EIg4',
      deity: {
        en: 'Lord Shiva',
        hi: 'भगवान शिव',
        gu: 'ભગવાન શિવ'
      },
      isLive: false,
      description: {
        en: 'Meditative chant of the sacred Shiva mantra, chanted 1008 times',
        hi: 'पवित्र शिव मंत्र का ध्यानात्मक जप, 1008 बार',
        gu: 'પવિત્ર શિવ મંત્રનો ધ્યાનાત્મક જાપ, 1008 વખત'
      }
    },
    {
      id: 'shiv-aarti',
      name: {
        en: 'Shiv Aarti',
        hi: 'शिव आरती',
        gu: 'શિવ આરતી'
      },
      category: 'devotional-video',
      youtubeId: 'BhwOproElxU',
      deity: {
        en: 'Lord Shiva',
        hi: 'भगवान शिव',
        gu: 'ભગવાન શિવ'
      },
      isLive: false,
      description: {
        en: 'Sacred Aarti dedicated to Lord Shiva',
        hi: 'भगवान शिव को समर्पित पवित्र आरती',
        gu: 'ભગવાન શિવને સમર્પિત પવિત્ર આરતી'
      }
    },
    {
      id: 'durga-chalisa',
      name: {
        en: 'Durga Chalisa',
        hi: 'दुर्गा चालीसा',
        gu: 'દુર્ગા ચાલીસા'
      },
      category: 'devotional-video',
      youtubeId: 'AXvmt88JLWg',
      deity: {
        en: 'Goddess Durga',
        hi: 'माता दुर्गा',
        gu: 'માતા દુર્ગા'
      },
      isLive: false,
      description: {
        en: 'Sacred hymn dedicated to Goddess Durga',
        hi: 'माता दुर्गा को समर्पित पवित्र चालीसा',
        gu: 'માતા દુર્ગાને સમર્પિત પવિત્ર ચાલીસા'
      }
    },
    {
      id: 'kali-chalisa',
      name: {
        en: 'Kali Chalisa',
        hi: 'काली चालीसा',
        gu: 'કાળી ચાલીસા'
      },
      category: 'devotional-video',
      youtubeId: 'G4vxc1GuqW4',
      deity: {
        en: 'Goddess Durga',
        hi: 'माता दुर्गा',
        gu: 'માતા દુર્ગા'
      },
      isLive: false,
      description: {
        en: 'Sacred hymn dedicated to Goddess Kali',
        hi: 'माता काली को समर्पित पवित्र चालीसा',
        gu: 'માતા કાળીને સમર્પિત પવિત્ર ચાલીસા'
      }
    },
    {
      id: 'lalita-sahasranama',
      name: {
        en: 'Lalita Sahasranama',
        hi: 'ललिता सहस्रनाम',
        gu: 'લલિતા સહસ્રનામ'
      },
      category: 'devotional-video',
      youtubeId: 'DtSBLpQStT4',
      deity: {
        en: 'Goddess Durga',
        hi: 'माता दुर्गा',
        gu: 'માતા દુર્ગા'
      },
      isLive: false,
      description: {
        en: 'Thousand names of Goddess Lalita',
        hi: 'माता ललिता के एक हजार नाम',
        gu: 'માતા લલિતાના હજાર નામ'
      }
    },
    {
      id: 'devi-kavach',
      name: {
        en: 'Devi Kavach / Argala Stotram',
        hi: 'देवी कवच / अर्गला स्तोत्रम',
        gu: 'દેવી કવચ / અર્ગલા સ્તોત્રમ'
      },
      category: 'devotional-video',
      youtubeId: 'T7BexXuePh8',
      deity: {
        en: 'Goddess Durga',
        hi: 'माता दुर्गा',
        gu: 'માતા દુર્ગા'
      },
      isLive: false,
      description: {
        en: 'Protective hymn and sacred verses dedicated to Goddess Durga',
        hi: 'माता दुर्गा को समर्पित सुरक्षा कवच और पवित्र स्तोत्र',
        gu: 'માતા દુર્ગાને સમર્પિત સુરક્ષા કવચ અને પવિત્ર સ્તોત્ર'
      }
    },
    {
      id: 'ganesh-chalisa',
      name: {
        en: 'Ganesh Chalisa',
        hi: 'गणेश चालीसा',
        gu: 'ગણેશ ચાલીસા'
      },
      category: 'devotional-video',
      youtubeId: 'WyHFSjN0miU',
      deity: {
        en: 'Lord Ganesh',
        hi: 'भगवान गणेश',
        gu: 'ભગવાન ગણેશ'
      },
      isLive: false,
      description: {
        en: 'Sacred hymn dedicated to Lord Ganesh',
        hi: 'भगवान गणेश को समर्पित पवित्र चालीसा',
        gu: 'ભગવાન ગણેશને સમર્પિત પવિત્ર ચાલીસા'
      }
    },
    {
      id: 'ganesh-chalisa-fast',
      name: {
        en: 'Ganesh Chalisa (Fast)',
        hi: 'गणेश चालीसा (तेज)',
        gu: 'ગણેશ ચાલીસા (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'tqbY8Mqy5pE',
      deity: {
        en: 'Lord Ganesh',
        hi: 'भगवान गणेश',
        gu: 'ભગવાન ગણેશ'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred hymn dedicated to Lord Ganesh',
        hi: 'भगवान गणेश को समर्पित पवित्र चालीसा (तेज संस्करण)',
        gu: 'ભગવાન ગણેશને સમર્પિત પવિત્ર ચાલીસા (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'ganesh-aarti',
      name: {
        en: 'Ganesh Aarti (Sukhkarta Dukhharta)',
        hi: 'गणेश आरती (सुखकर्ता दुःखहर्ता)',
        gu: 'ગણેશ આરતી (સુખકર્તા દુઃખહર્તા)'
      },
      category: 'devotional-video',
      youtubeId: 'dl-9SxjyUf0',
      deity: {
        en: 'Lord Ganesh',
        hi: 'भगवान गणेश',
        gu: 'ભગવાન ગણેશ'
      },
      isLive: false,
      description: {
        en: 'Sacred Aarti dedicated to Lord Ganesh',
        hi: 'भगवान गणेश को समर्पित पवित्र आरती',
        gu: 'ભગવાન ગણેશને સમર્પિત પવિત્ર આરતી'
      }
    },
    {
      id: 'vakratunda-mantra',
      name: {
        en: 'Vakratunda Mahakaya Mantra',
        hi: 'वक्रतुंड महाकाय मंत्र',
        gu: 'વક્રતુંડ મહાકાય મંત્ર'
      },
      category: 'devotional-video',
      youtubeId: 'kxxhO92X8ro',
      deity: {
        en: 'Lord Ganesh',
        hi: 'भगवान गणेश',
        gu: 'ભગવાન ગણેશ'
      },
      isLive: false,
      description: {
        en: 'Sacred mantra dedicated to Lord Ganesh',
        hi: 'भगवान गणेश को समर्पित पवित्र मंत्र',
        gu: 'ભગવાન ગણેશને સમર્પિત પવિત્ર મંત્ર'
      }
    },
    {
      id: 'ganpati-atharvashirsha',
      name: {
        en: 'Ganpati Atharvashirsha',
        hi: 'गणपति अथर्वशीर्ष',
        gu: 'ગણપતિ અથર્વશીર્ષ'
      },
      category: 'devotional-video',
      youtubeId: 'Tssx17scqO4',
      deity: {
        en: 'Lord Ganesh',
        hi: 'भगवान गणेश',
        gu: 'ભગવાન ગણેશ'
      },
      isLive: false,
      description: {
        en: 'Sacred Vedic text dedicated to Lord Ganesh',
        hi: 'भगवान गणेश को समर्पित पवित्र वैदिक ग्रंथ',
        gu: 'ભગવાન ગણેશને સમર્પિત પવિત્ર વૈદિક ગ્રંથ'
      }
    },
    {
      id: 'vishnu-sahasranama',
      name: {
        en: 'Vishnu Sahasranama',
        hi: 'विष्णु सहस्रनाम',
        gu: 'વિષ્ણુ સહસ્રનામ'
      },
      category: 'devotional-video',
      youtubeId: 'zKC17254flc',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Thousand names of Lord Vishnu',
        hi: 'भगवान विष्णु के एक हजार नाम',
        gu: 'ભગવાન વિષ્ણુના હજાર નામ'
      }
    },
    {
      id: 'ram-raksha-stotra',
      name: {
        en: 'Ram Raksha Stotra',
        hi: 'राम रक्षा स्तोत्र',
        gu: 'રામ રક્ષા સ્તોત્ર'
      },
      category: 'devotional-video',
      youtubeId: '-_axSlApc98',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Protective hymn dedicated to Lord Ram',
        hi: 'भगवान राम को समर्पित सुरक्षा स्तोत्र',
        gu: 'ભગવાન રામને સમર્પિત સુરક્ષા સ્તોત્ર'
      }
    },
    {
      id: 'ram-raksha-stotra-fast',
      name: {
        en: 'Ram Raksha Stotra (Fast)',
        hi: 'राम रक्षा स्तोत्र (तेज)',
        gu: 'રામ રક્ષા સ્તોત્ર (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'NYakpChmUb0',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Fast version of protective hymn dedicated to Lord Ram',
        hi: 'भगवान राम को समर्पित सुरक्षा स्तोत्र (तेज संस्करण)',
        gu: 'ભગવાન રામને સમર્પિત સુરક્ષા સ્તોત્ર (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'hare-krishna-mahamantra',
      name: {
        en: 'Hare Krishna Mahamantra',
        hi: 'हरे कृष्ण महामंत्र',
        gu: 'હરે કૃષ્ણ મહામંત્ર'
      },
      category: 'devotional-video',
      youtubeId: 'S2TfwCARhRA',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Sacred Mahamantra dedicated to Lord Krishna',
        hi: 'भगवान कृष्ण को समर्पित पवित्र महामंत्र',
        gu: 'ભગવાન કૃષ્ણને સમર્પિત પવિત્ર મહામંત્ર'
      }
    },
    {
      id: 'hare-krishna-mahamantra-fast',
      name: {
        en: 'Hare Krishna Mahamantra (Fast)',
        hi: 'हरे कृष्ण महामंत्र (तेज)',
        gu: 'હરે કૃષ્ણ મહામંત્ર (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'W0s94ygvpig',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred Mahamantra dedicated to Lord Krishna',
        hi: 'भगवान कृष्ण को समर्पित पवित्र महामंत्र (तेज संस्करण)',
        gu: 'ભગવાન કૃષ્ણને સમર્પિત પવિત્ર મહામંત્ર (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'govind-bolo-hari-gopal',
      name: {
        en: 'Govind Bolo Hari Gopal Bolo',
        hi: 'गोविंद बोलो हरि गोपाल बोलो',
        gu: 'ગોવિંદ બોલો હરિ ગોપાલ બોલો'
      },
      category: 'devotional-video',
      youtubeId: 'obppCkYGqI8',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Devotional chant dedicated to Lord Krishna',
        hi: 'भगवान कृष्ण को समर्पित भक्ति भजन',
        gu: 'ભગવાન કૃષ્ણને સમર્પિત ભક્તિ ભજન'
      }
    },
    {
      id: 'shri-ram-aarti',
      name: {
        en: 'Shri Ram Aarti',
        hi: 'श्री राम आरती',
        gu: 'શ્રી રામ આરતી'
      },
      category: 'devotional-video',
      youtubeId: 'J5cllhBiAV0',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Sacred Aarti dedicated to Lord Ram',
        hi: 'भगवान राम को समर्पित पवित्र आरती',
        gu: 'ભગવાન રામને સમર્પિત પવિત્ર આરતી'
      }
    },
    {
      id: 'ram-rameti-manorame',
      name: {
        en: 'Ram Rameti Rame Rame Manorame',
        hi: 'राम रामेति रमे रमे मनोरमे',
        gu: 'રામ રામેતિ રમે રમે મનોરમે'
      },
      category: 'devotional-video',
      youtubeId: '0coOlosyqlM',
      deity: {
        en: 'Lord Vishnu',
        hi: 'भगवान विष्णु',
        gu: 'ભગવાન વિષ્ણુ'
      },
      isLive: false,
      description: {
        en: 'Sacred chant from the Ramayana, dedicated to Lord Ram',
        hi: 'रामायण से पवित्र जप, भगवान राम को समर्पित',
        gu: 'રામાયણમાંથી પવિત્ર જાપ, ભગવાન રામને સમર્પિત'
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
    },
    {
      id: 'shani-aarti',
      name: {
        en: 'Shani Aarti',
        hi: 'शनि आरती',
        gu: 'શનિ આરતી'
      },
      category: 'devotional-video',
      youtubeId: 'sJ3Kg21bNrE',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Sacred Aarti dedicated to Lord Shani',
        hi: 'भगवान शनि को समर्पित पवित्र आरती',
        gu: 'ભગવાન શનિને સમર્પિત પવિત્ર આરતી'
      }
    },
    {
      id: 'shani-aarti-fast',
      name: {
        en: 'Shani Aarti (Fast)',
        hi: 'शनि आरती (तेज)',
        gu: 'શનિ આરતી (ઝડપી)'
      },
      category: 'devotional-video',
      youtubeId: 'FWmnyQglFkg',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Fast version of sacred Aarti dedicated to Lord Shani',
        hi: 'भगवान शनि को समर्पित पवित्र आरती (तेज संस्करण)',
        gu: 'ભગવાન શનિને સમર્પિત પવિત્ર આરતી (ઝડપી સંસ્કરણ)'
      }
    },
    {
      id: 'shani-beej-mantra',
      name: {
        en: 'Shani Beej Mantra (108 times)',
        hi: 'शनि बीज मंत्र (108 बार)',
        gu: 'શનિ બીજ મંત્ર (108 વખત)'
      },
      category: 'devotional-video',
      youtubeId: 'bylkLEiEHNQ',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Shani Beej Mantra chanted 108 times',
        hi: 'शनि बीज मंत्र 108 बार जप',
        gu: 'શનિ બીજ મંત્ર 108 વખત જાપ'
      }
    },
    {
      id: 'shani-mahamantra',
      name: {
        en: 'Shani Mahamantra',
        hi: 'शनि महामंत्र',
        gu: 'શનિ મહામંત્ર'
      },
      category: 'devotional-video',
      youtubeId: '4HNbwEiHPlg',
      deity: {
        en: 'Lord Shani',
        hi: 'भगवान शनि',
        gu: 'ભગવાન શનિ'
      },
      isLive: false,
      description: {
        en: 'Sacred Mahamantra dedicated to Lord Shani',
        hi: 'भगवान शनि को समर्पित पवित्र महामंत्र',
        gu: 'ભગવાન શનિને સમર્પિત પવિત્ર મહામંત્ર'
      }
    },

    // ── Ketu ─────────────────────────────────────────────────────────────────
    {
      id: 'ketu-mantra-108',
      name: { en: 'Ketu Mantra (108 Times)', hi: 'केतु मंत्र (108 बार)', gu: 'કેતુ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: '70V8anXPhBg',
      deity: { en: 'Ketu Grah', hi: 'केतु ग्रह', gu: 'કેતુ ગ્રહ' },
      isLive: false,
      description: { en: 'Ketu mantra chanted 108 times', hi: 'केतु मंत्र 108 बार जप', gu: 'કેતુ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'ketu-mantra-1008',
      name: { en: 'Ketu Mantra (1008 Times)', hi: 'केतु मंत्र (1008 बार)', gu: 'કેતુ મંત્ર (1008 વખત)' },
      category: 'devotional-video',
      youtubeId: 'I4m-NW46cZw',
      deity: { en: 'Ketu Grah', hi: 'केतु ग्रह', gu: 'કેતુ ગ્રહ' },
      isLive: false,
      description: { en: 'Ketu mantra chanted 1008 times', hi: 'केतु मंत्र 1008 बार जप', gu: 'કેતુ મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'ketu-kavacham',
      name: { en: 'Ketu Kavacham', hi: 'केतु कवचम', gu: 'કેતુ કવચ' },
      category: 'devotional-video',
      youtubeId: 'SeoAMLbg4OQ',
      deity: { en: 'Ketu Grah', hi: 'केतु ग्रह', gu: 'કેતુ ગ્રહ' },
      isLive: false,
      description: { en: 'Protective armor hymn dedicated to Ketu', hi: 'केतु को समर्पित सुरक्षा कवच स्तोत्र', gu: 'કેતુને સમર્પિત સુરક્ષા કવચ સ્તોત્ર' }
    },
    {
      id: 'ketu-tantrik-beej',
      name: { en: 'Ketu Tantrik Beej Mantra (108 Times)', hi: 'केतु तांत्रिक बीज मंत्र (108 बार)', gu: 'કેતુ તાંત્રિક બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: '4w0_Mx0NqC4',
      deity: { en: 'Ketu Grah', hi: 'केतु ग्रह', gu: 'કેતુ ગ્રહ' },
      isLive: false,
      description: { en: 'Tantrik Beej mantra of Ketu chanted 108 times', hi: 'केतु का तांत्रिक बीज मंत्र 108 बार जप', gu: 'કેતુ તાંત્રિક બીજ મંત્ર 108 વખત જાપ' }
    },

    // ── Rahu ─────────────────────────────────────────────────────────────────
    {
      id: 'rahu-mantra-108',
      name: { en: 'Rahu Mantra (108 Times)', hi: 'राहु मंत्र (108 बार)', gu: 'રાહુ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'jMYM2TYA-7Q',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Rahu mantra chanted 108 times', hi: 'राहु मंत्र 108 बार जप', gu: 'રાહુ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'rahu-beej-mantra-108',
      name: { en: 'Rahu Beej Mantra (108 Times)', hi: 'राहु बीज मंत्र (108 बार)', gu: 'રાહુ બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: '6v-ft5LM6-I',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Rahu Beej mantra chanted 108 times', hi: 'राहु बीज मंत्र 108 बार जप', gu: 'રાહુ બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'rahu-stotram',
      name: { en: 'Rahu Stotram', hi: 'राहु स्तोत्रम', gu: 'રાહુ સ્તોત્રમ' },
      category: 'devotional-video',
      youtubeId: 'eQgTzcRxo4k',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred hymn dedicated to Rahu', hi: 'राहु को समर्पित पवित्र स्तोत्र', gu: 'રાહુને સમર્પિત પવિત્ર સ્તોત્ર' }
    },
    {
      id: 'rahu-mantra-1008',
      name: { en: 'Rahu Mantra (1008 Times)', hi: 'राहु मंत्र (1008 बार)', gu: 'રાહુ મંત્ર (1008 વખત)' },
      category: 'devotional-video',
      youtubeId: '0v8ZkdOlpqE',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Rahu mantra chanted 1008 times', hi: 'राहु मंत्र 1008 बार जप', gu: 'રાહુ મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'rahu-chalisa',
      name: { en: 'Shree Rahu Chalisa', hi: 'श्री राहु चालीसा', gu: 'શ્રી રાહુ ચાલીસા' },
      category: 'devotional-video',
      youtubeId: '2MW7hKwjtpc',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred Chalisa dedicated to Rahu', hi: 'राहु को समर्पित पवित्र चालीसा', gu: 'રાહુને સમર્પિત પવિત્ર ચાલીસા' }
    },
    {
      id: 'rahu-kavacham',
      name: { en: 'Rahu Kavacham', hi: 'राहु कवचम', gu: 'રાહુ કવચ' },
      category: 'devotional-video',
      youtubeId: 'Y3qZH5nwhKU',
      deity: { en: 'Rahu Grah', hi: 'राहु ग्रह', gu: 'રાહુ ગ્રહ' },
      isLive: false,
      description: { en: 'Protective armor hymn dedicated to Rahu', hi: 'राहु को समर्पित सुरक्षा कवच स्तोत्र', gu: 'રાહુને સમર્પિત સુરક્ષા કવચ સ્તોત્ર' }
    },

    // ── Shukra ────────────────────────────────────────────────────────────────
    {
      id: 'shukra-mantra-108',
      name: { en: 'Shukra Mantra (108 Times)', hi: 'शुक्र मंत्र (108 बार)', gu: 'શુક્ર મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'Z6TA7xpxU14',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Shukra mantra chanted 108 times', hi: 'शुक्र मंत्र 108 बार जप', gu: 'શુક્ર મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'shukra-beej-mantra-108',
      name: { en: 'Shukra Beej Mantra (108 Times)', hi: 'शुक्र बीज मंत्र (108 बार)', gu: 'શુક્ર બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'H5b0tKzYTXE',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Shukra Beej mantra chanted 108 times', hi: 'शुक्र बीज मंत्र 108 बार जप', gu: 'શુક્ર બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'shukra-om-bharghavay-108',
      name: { en: 'Shukra Mantra - Om Bhargavay Namah (108 Times)', hi: 'शुक्र मंत्र - ॐ भार्गवाय नमः (108 बार)', gu: 'શુક્ર મંત્ર - ॐ ભાર્ગવાય નમઃ (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'IqOO22-4uH0',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Om Bhargavay Namah Shukra mantra chanted 108 times', hi: 'ॐ भार्गवाय नमः शुक्र मंत्र 108 बार जप', gu: 'ॐ ભાર્ગવાય નમઃ શુક્ર મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'shukra-kavacha-stotram',
      name: { en: 'Shukra Kavacha Stotram', hi: 'शुक्र कवच स्तोत्रम', gu: 'શુક્ર કવચ સ્તોત્રમ' },
      category: 'devotional-video',
      youtubeId: 'Wuxw797zbBU',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Protective armor hymn dedicated to Shukra', hi: 'शुक्र को समर्पित सुरक्षा कवच स्तोत्र', gu: 'શુક્રને સમર્પિત સુરક્ષા કવચ સ્તોત્ર' }
    },
    {
      id: 'shukra-mantra-1008',
      name: { en: 'Shukra Mantra (1008 Times)', hi: 'शुक्र मंत्र (1008 बार)', gu: 'શુક્ર મંત્ર (1008 વખત)' },
      category: 'devotional-video',
      youtubeId: 'mmb0lPUauYU',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Shukra mantra chanted 1008 times', hi: 'शुक्र मंत्र 1008 बार जप', gu: 'શુક્ર મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'shukra-mantra-108-v2',
      name: { en: 'Shukra Mantra 108 Times (Version 2)', hi: 'शुक्र मंत्र 108 बार (संस्करण 2)', gu: 'શુક્ર મંત્ર 108 વખત (આવૃત્તિ 2)' },
      category: 'devotional-video',
      youtubeId: 'nDZCQx7cJmY',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Shukra mantra chanted 108 times — alternate version', hi: 'शुक्र मंत्र 108 बार जप — वैकल्पिक संस्करण', gu: 'શુક્ર મંત્ર 108 વખત જાપ — વૈકલ્પિક આવૃત્તિ' }
    },
    {
      id: 'shri-shukra-kavacham',
      name: { en: 'Shri Shukra Kavacham', hi: 'श्री शुक्र कवचम', gu: 'શ્રી શુક્ર કવચમ' },
      category: 'devotional-video',
      youtubeId: 'Cvvt8e73vFU',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred Kavacham dedicated to Shukra', hi: 'शुक्र को समर्पित पवित्र कवचम', gu: 'શુક્રને સમર્પિત પવિત્ર કવચમ' }
    },
    {
      id: 'shukra-stotra',
      name: { en: 'Shree Shukra Stotra', hi: 'श्री शुक्र स्तोत्र', gu: 'શ્રી શુક્ર સ્તોત્ર' },
      category: 'devotional-video',
      youtubeId: 'oK5DrCO_OxY',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred hymn dedicated to Shukra', hi: 'शुक्र को समर्पित पवित्र स्तोत्र', gu: 'શુક્રને સમર્પિત પવિત્ર સ્તોત્ર' }
    },
    {
      id: 'shukra-tantrik-beej-108',
      name: { en: 'Shukra Tantrik Beej Mantra (108 Times)', hi: 'शुक्र तांत्रिक बीज मंत्र (108 बार)', gu: 'શુક્ર તાંત્રિક બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'x08TQBeGWuc',
      deity: { en: 'Shukra Grah', hi: 'शुक्र ग्रह', gu: 'શુક્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Tantrik Beej mantra of Shukra chanted 108 times', hi: 'शुक्र का तांत्रिक बीज मंत्र 108 बार जप', gu: 'શુક્ર તાંત્રિક બીજ મંત્ર 108 વખત જાપ' }
    },

    // ── Guru / Brihaspati ─────────────────────────────────────────────────────
    {
      id: 'guru-bij-mantra-108',
      name: { en: 'Guru Beej Mantra (108 Times)', hi: 'गुरु बीज मंत्र (108 बार)', gu: 'ગુરુ બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'C6pVgjYizb4',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Guru Beej mantra chanted 108 times', hi: 'गुरु बीज मंत्र 108 बार जप', gu: 'ગુરુ બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'brihaspati-mantra-108',
      name: { en: 'Brihaspati Mantra (108 Times)', hi: 'बृहस्पति मंत्र (108 बार)', gu: 'બૃહસ્પતિ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'JP1DEq2VGbI',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Brihaspati mantra chanted 108 times', hi: 'बृहस्पति मंत्र 108 बार जप', gu: 'બૃહસ્પતિ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'guru-gayatri-108',
      name: { en: 'Guru Gayatri Mantra (108 Times)', hi: 'गुरु गायत्री मंत्र (108 बार)', gu: 'ગુરુ ગાયત્રી મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'pHsuRN14rUc',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Guru Gayatri mantra chanted 108 times', hi: 'गुरु गायत्री मंत्र 108 बार जप', gu: 'ગુરુ ગાયત્રી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'guru-mantra-1008',
      name: { en: 'Guru Mantra (1008 Times)', hi: 'गुरु मंत्र (1008 बार)', gu: 'ગુરુ મંત્ર (1008 વખત)' },
      category: 'devotional-video',
      youtubeId: 'q2uBEg_ehA0',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Guru mantra chanted 1008 times', hi: 'गुरु मंत्र 1008 बार जप', gu: 'ગુરુ મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'guru-beej-mantra',
      name: { en: 'Guru Beej Mantra', hi: 'गुरु बीज मंत्र', gu: 'ગુરુ બીજ મંત્ર' },
      category: 'devotional-video',
      youtubeId: 'NzKh63ZSy54',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred Beej mantra dedicated to Guru', hi: 'गुरु को समर्पित पवित्र बीज मंत्र', gu: 'ગુરુને સમર્પિત પવિત્ર બીજ મંત્ર' }
    },
    {
      id: 'guru-beej-mantra-108',
      name: { en: 'Guru Beej Mantra (108 Times)', hi: 'गुरु बीज मंत्र (108 बार)', gu: 'ગુરુ બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: '33oYvb3E3jg',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Guru Beej mantra chanted 108 times — version 2', hi: 'गुरु बीज मंत्र 108 बार जप — संस्करण 2', gu: 'ગુરુ બીજ મંત્ર 108 વખત જાપ — આવૃત્તિ 2' }
    },
    {
      id: 'brihaspati-mantra-108-v2',
      name: { en: 'Brihaspati Mantra (108 Times) Version 2', hi: 'बृहस्पति मंत्र (108 बार) संस्करण 2', gu: 'બૃહસ્પતિ મંત્ર (108 વખત) આવૃત્તિ 2' },
      category: 'devotional-video',
      youtubeId: 'rziFD8DJUAA',
      deity: { en: 'Guru Grah', hi: 'गुरु ग्रह', gu: 'ગુરુ ગ્રહ' },
      isLive: false,
      description: { en: 'Brihaspati mantra chanted 108 times — alternate version', hi: 'बृहस्पति मंत्र 108 बार जप — वैकल्पिक संस्करण', gu: 'બૃહસ્પતિ મંત્ર 108 વખત જાપ — વૈકલ્પિક આવૃત્તિ' }
    },

    // ── Budh ─────────────────────────────────────────────────────────────────
    {
      id: 'budh-mantra-108',
      name: { en: 'Budh Mantra (108 Times)', hi: 'बुध मंत्र (108 बार)', gu: 'બુધ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'cG3JrHzTFUo',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Budh mantra chanted 108 times', hi: 'बुध मंत्र 108 बार जप', gu: 'બુધ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'budh-beej-mantra-108',
      name: { en: 'Budh Beej Mantra (108 Times)', hi: 'बुध बीज मंत्र (108 बार)', gu: 'બુધ બીજ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: '4B7TBhooCv0',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Budh Beej mantra chanted 108 times', hi: 'बुध बीज मंत्र 108 बार जप', gu: 'બુધ બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'budh-mantra-1008',
      name: { en: 'Budh Mantra (1008 Times)', hi: 'बुध मंत्र (1008 बार)', gu: 'બુધ મંત્ર (1008 વખત)' },
      category: 'devotional-video',
      youtubeId: 'Iv8iAXNd7a4',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Budh mantra chanted 1008 times', hi: 'बुध मंत्र 1008 बार जप', gu: 'બુધ મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'budh-shanti-mantra-108',
      name: { en: 'Budh Shanti Mantra (108 Times)', hi: 'बुध शांति मंत्र (108 बार)', gu: 'બુધ શાંતિ મંત્ર (108 વખત)' },
      category: 'devotional-video',
      youtubeId: 'a_a8eC6l4GE',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Budh Shanti mantra chanted 108 times', hi: 'बुध शांति मंत्र 108 बार जप', gu: 'બુધ શાંતિ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'budha-stotram',
      name: { en: 'Budha Stotram', hi: 'बुध स्तोत्रम', gu: 'બુધ સ્તોત્રમ' },
      category: 'devotional-video',
      youtubeId: 'lUqRs1ReVn8',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred hymn dedicated to Budh', hi: 'बुध को समर्पित पवित्र स्तोत्र', gu: 'બુધને સમર્પિત પવિત્ર સ્તોત્ર' }
    },
    {
      id: 'budh-kavach',
      name: { en: 'Budh Kavach (Fast)', hi: 'बुध कवच (तेज)', gu: 'બુધ કવચ (ઝડપી)' },
      category: 'devotional-video',
      youtubeId: 'LbwMyXkuRz8',
      deity: { en: 'Budh Grah', hi: 'बुध ग्रह', gu: 'બુધ ગ્રહ' },
      isLive: false,
      description: { en: 'Protective armor hymn dedicated to Budh', hi: 'बुध को समर्पित सुरक्षा कवच स्तोत्र', gu: 'બુધને સમર્પિત સુરક્ષા કવચ સ્તોત્ર' }
    },

    // ── Mangal (Mars) ───────────────────────────────────────────────────────
    {
      id: 'mangal-mantra-108',
      name: { en: 'Mangal Mantra 108 Times', hi: 'मंगल मंत्र 108 बार', gu: 'મંગળ મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: '7lMvz4W1HdE',
      deity: { en: 'Mangal Grah', hi: 'मंगल ग्रह', gu: 'મંગળ ગ્રહ' },
      isLive: false,
      description: { en: 'Mangal mantra chanted 108 times', hi: 'मंगल मंत्र 108 बार जाप', gu: 'મંગળ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'mangal-mantra-fast-108',
      name: { en: 'Mangal Mantra Fast 108 Times', hi: 'मंगल मंत्र तेज 108 बार', gu: 'મંગળ મંત્ર ઝડપી 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'XGFjzuVE74k',
      deity: { en: 'Mangal Grah', hi: 'मंगल ग्रह', gu: 'મંગળ ગ્રહ' },
      isLive: false,
      description: { en: 'Mangal mantra chanted fast 108 times', hi: 'मंगल मंत्र तेज गति से 108 बार जाप', gu: 'મંગળ મંત્ર ઝડપી ગતિએ 108 વખત જાપ' }
    },
    {
      id: 'mangal-beej-mantra-108',
      name: { en: 'Mangal Beej Mantra 108 Times', hi: 'मंगल बीज मंत्र 108 बार', gu: 'મંગળ બીજ મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: '8rdk_48pRsk',
      deity: { en: 'Mangal Grah', hi: 'मंगल ग्रह', gu: 'મંગળ ગ્રહ' },
      isLive: false,
      description: { en: 'Mangal beej mantra chanted 108 times', hi: 'मंगल बीज मंत्र 108 बार जाप', gu: 'મંગળ બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'mangal-stotra',
      name: { en: 'Mangal Stotra', hi: 'मंगल स्तोत्र', gu: 'મંગળ સ્તોત્ર' },
      category: 'devotional-video',
      youtubeId: 'kMIUdenmOr0',
      deity: { en: 'Mangal Grah', hi: 'मंगल ग्रह', gu: 'મંગળ ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred hymn dedicated to Mangal', hi: 'मंगल को समर्पित पवित्र स्तोत्र', gu: 'મંગળને સમર્પિત પવિત્ર સ્તોત્ર' }
    },

    // ── Chandra (Moon) ──────────────────────────────────────────────────────
    {
      id: 'chandra-beej-mantra-108',
      name: { en: 'Chandra Beej Mantra 108 Times', hi: 'चंद्र बीज मंत्र 108 बार', gu: 'ચંદ્ર બીજ મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'ogHGrB9DnWg',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Chandra beej mantra chanted 108 times', hi: 'चंद्र बीज मंत्र 108 बार जाप', gu: 'ચંદ્ર બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'chandra-beej-mantra-fast-108',
      name: { en: 'Chandra Beej Mantra Fast 108 Times', hi: 'चंद्र बीज मंत्र तेज 108 बार', gu: 'ચંદ્ર બીજ મંત્ર ઝડપી 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'OTDiShLPlUk',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Chandra beej mantra chanted fast 108 times', hi: 'चंद्र बीज मंत्र तेज गति से 108 बार जाप', gu: 'ચંદ્ર બીજ મંત્ર ઝડપી ગતિએ 108 વખત જાપ' }
    },
    {
      id: 'chandra-stotram',
      name: { en: 'Chandra Stotram', hi: 'चंद्र स्तोत्रम्', gu: 'ચંદ્ર સ્તોત્રમ્' },
      category: 'devotional-video',
      youtubeId: 'DDOCK7gjK_Q',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Sacred hymn dedicated to Chandra', hi: 'चंद्र को समर्पित पवित्र स्तोत्र', gu: 'ચંદ્રને સમર્પિત પવિત્ર સ્તોત્ર' }
    },
    {
      id: 'chandra-beej-mantra-fast-108-v2',
      name: { en: 'Chandra Beej Mantra Fast 108 Times (Version 2)', hi: 'चंद्र बीज मंत्र तेज 108 बार (संस्करण 2)', gu: 'ચંદ્ર બીજ મંત્ર ઝડપી 108 વખત (આવૃત્તિ 2)' },
      category: 'devotional-video',
      youtubeId: 'FC8aTgjVMzE',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Chandra beej mantra chanted fast 108 times (alternate version)', hi: 'चंद्र बीज मंत्र तेज 108 बार जाप (वैकल्पिक संस्करण)', gu: 'ચંદ્ર બીજ મંત્ર ઝડપી 108 વખત જાપ (વૈકલ્પિક આવૃત્તિ)' }
    },
    {
      id: 'purnima-stotram',
      name: { en: 'Purnima Stotram | Chandra Stotram', hi: 'पूर्णिमा स्तोत्र | चंद्र स्तोत्रम्', gu: 'પૂર્ણિમા સ્તોત્ર | ચંદ્ર સ્તોત્રમ્' },
      category: 'devotional-video',
      youtubeId: 'neY9YMNxCc8',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Purnima stotram and Chandra stotram', hi: 'पूर्णिमा स्तोत्र और चंद्र स्तोत्रम्', gu: 'પૂર્ણિમા સ્તોત્ર અને ચંદ્ર સ્તોત્રમ્' }
    },
    {
      id: 'chandra-gayatri-108',
      name: { en: 'Chandra Gayatri Mantra 108 Times', hi: 'चंद्र गायत्री मंत्र 108 बार', gu: 'ચંદ્ર ગાયત્રી મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'SJ6Muzqo4iY',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Chandra Gayatri mantra chanted 108 times', hi: 'चंद्र गायत्री मंत्र 108 बार जाप', gu: 'ચંદ્ર ગાયત્રી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'chandra-mantra-108',
      name: { en: 'Powerful Chandra Mantra 108 Times', hi: 'शक्तिशाली चंद्र मंत्र 108 बार', gu: 'શક્તિશાળી ચંદ્ર મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'wCH7SbfZPrQ',
      deity: { en: 'Chandra Grah', hi: 'चंद्र ग्रह', gu: 'ચંદ્ર ગ્રહ' },
      isLive: false,
      description: { en: 'Powerful Chandra (moon) mantra chanted 108 times', hi: 'शक्तिशाली चंद्र मंत्र 108 बार जाप', gu: 'શક્તિશાળી ચંદ્ર મંત્ર 108 વખત જાપ' }
    },

    // ── Surya (Sun) ──────────────────────────────────────────────────────────
    {
      id: 'surya-tantrik-beej-108',
      name: { en: 'Surya Tantrik Beej Mantra 108 Times', hi: 'सूर्य तांत्रिक बीज मंत्र 108 बार', gu: 'સૂર્ય તાંત્રિક બીજ મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'FOzo1SxVxAg',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Surya tantrik beej mantra chanted 108 times', hi: 'सूर्य तांत्रिक बीज मंत्र 108 बार जाप', gu: 'સૂર્ય તાંત્રિક બીજ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'om-sum-suryaya-108',
      name: { en: 'Om Sum Suryaya Namaha 108 Times', hi: 'ॐ सूं सूर्याय नमः 108 बार', gu: 'ॐ સૂં સૂર્યાય નમઃ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'aIQsdNJIIEQ',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Om Sum Suryaya Namaha mantra chanted 108 times', hi: 'ॐ सूं सूर्याय नमः मंत्र 108 बार जाप', gu: 'ॐ સૂં સૂર્યાય નમઃ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'om-ghrini-suryaya-108',
      name: { en: 'Om Ghrini Suryaya Namah 108 Times', hi: 'ॐ घ्रिणि सूर्याय नमः 108 बार', gu: 'ॐ ઘ્રિણિ સૂર્યાય નમઃ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'kOgaTaFcgjU',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Om Ghrini Suryaya Namah mantra chanted 108 times', hi: 'ॐ घ्रिणि सूर्याय नमः मंत्र 108 बार जाप', gu: 'ॐ ઘ્રિણિ સૂર્યાય નમઃ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'surya-gayatri-108',
      name: { en: 'Surya Gayatri Mantra 108 Times', hi: 'सूर्य गायत्री मंत्र 108 बार', gu: 'સૂર્ય ગાયત્રી મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'XLTxcZH1Y0g',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Surya Gayatri mantra chanted 108 times', hi: 'सूर्य गायत्री मंत्र 108 बार जाप', gu: 'સૂર્ય ગાયત્રી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'om-ghrini-aditya-108',
      name: { en: 'Om Ghrini Aditya Namah 108 Times', hi: 'ॐ घ्रिणि आदित्य नमः 108 बार', gu: 'ॐ ઘ્રિણિ આદિત્ય નમઃ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'b0T_-EAQAHU',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Om Ghrini Aditya Namah mantra chanted 108 times', hi: 'ॐ घ्रिणि आदित्य नमः मंत्र 108 बार जाप', gu: 'ॐ ઘ્રિણિ આદિત્ય નમઃ મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'surya-mantra-jaap-108',
      name: { en: 'Powerful Surya Mantra Jaap 108 Times', hi: 'शक्तिशाली सूर्य मंत्र जाप 108 बार', gu: 'શક્તિશાળી સૂર્ય મંત્ર જાપ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'QwpldbSh8dA',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Powerful Surya mantra jaap chanted 108 times', hi: 'शक्तिशाली सूर्य मंत्र जाप 108 बार', gu: 'શક્તિશાળી સૂર્ય મંત્ર જાપ 108 વખત' }
    },
    {
      id: 'om-sum-suryaya-1008',
      name: { en: 'Om Sum Suryaya Namah 1008 Times', hi: 'ॐ सूं सूर्याय नमः 1008 बार', gu: 'ॐ સૂં સૂર્યાય નમઃ 1008 વખત' },
      category: 'devotional-video',
      youtubeId: 'qdc_Fjd9TKk',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Om Sum Suryaya Namah mantra chanted 1008 times', hi: 'ॐ सूं सूर्याय नमः मंत्र 1008 बार जाप', gu: 'ॐ સૂં સૂર્યાય નમઃ મંત્ર 1008 વખત જાપ' }
    },
    {
      id: 'surya-graha-shanti-108',
      name: { en: 'Surya Graha Shanti Mantra 108 Times', hi: 'सूर्य ग्रह शांति मंत्र 108 बार', gu: 'સૂર્ય ગ્રહ શાંતિ મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'Cj3XHwqb-54',
      deity: { en: 'Surya Grah', hi: 'सूर्य ग्रह', gu: 'સૂર્ય ગ્રહ' },
      isLive: false,
      description: { en: 'Surya graha shanti mantra chanted 108 times', hi: 'सूर्य ग्रह शांति मंत्र 108 बार जाप', gu: 'સૂર્ય ગ્રહ શાંતિ મંત્ર 108 વખત જાપ' }
    },

    // ── Lakshmi ─────────────────────────────────────────────────────────────
    {
      id: 'mahalakshmi-om-shreem-108',
      name: { en: 'Maha Laxmi Mantra: Om Shreem Mahalakshmiyei Namaha 108 Times', hi: 'महालक्ष्मी मंत्र: ओम् श्रीं महालक्ष्म्यै नमः 108 बार', gu: 'મહાલક્ષ્મી મંત્ર: ओમ્ શ્રીં મહાલક્ષ્મયેઇ નમઃ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'g_czAYo3MKQ',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Maha Laxmi mantra Om Shreem Mahalakshmiyei Namaha chanted 108 times', hi: 'महालक्ष्मी मंत्र 108 बार जाप', gu: 'મહાલક્ષ્મી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'mahalakshmi-mantra-108',
      name: { en: 'Mahalakshmi Mantra 108 Times', hi: 'महालक्ष्मी मंत्र 108 बार', gu: 'મહાલક્ષ્મી મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: '9wUtZFEmaLM',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Mahalakshmi mantra chanted 108 times', hi: 'महालक्ष्मी मंत्र 108 बार जाप', gu: 'મહાલક્ષ્મી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'kubera-ashta-lakshmi-108',
      name: { en: 'Kubera Ashta Lakshmi Mantra 108 Times', hi: 'कुबेर अष्ट लक्ष्मी मंत्र 108 बार', gu: 'કુબેર અષ્ટ લક્ષ્મી મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'cWa_bEYBWNk',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Kubera Ashta Lakshmi mantra chanted 108 times', hi: 'कुबेर अष्ट लक्ष्मी मंत्र 108 बार जाप', gu: 'કુબેર અષ્ટ લક્ષ્મી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'mahalakshmi-mantra-108-v2',
      name: { en: 'Mahalakshmi Mantra 108 Times (Version 2)', hi: 'महालक्ष्मी मंत्र 108 बार (संस्करण 2)', gu: 'મહાલક્ષ્મી મંત્ર 108 વખત (આવૃત્તિ 2)' },
      category: 'devotional-video',
      youtubeId: 'CgMxnt4DOA0',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Mahalakshmi mantra chanted 108 times (alternate version)', hi: 'महालक्ष्मी मंत्र 108 बार जाप (वैकल्पिक संस्करण)', gu: 'મહાલક્ષ્મી મંત્ર 108 વખત જાપ (વૈકલ્પિક આવૃત્તિ)' }
    },
    {
      id: 'mahalakshmi-mantra-fast',
      name: { en: 'Maha Laxmi Mantra Fast', hi: 'महालक्ष्मी मंत्र तेज', gu: 'મહાલક્ષ્મી મંત્ર ઝડપી' },
      category: 'devotional-video',
      youtubeId: 'QllkyTdII4Q',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Maha Laxmi mantra chanted at fast pace', hi: 'महालक्ष्मी मंत्र तेज गति से जाप', gu: 'મહાલક્ષ્મી મંત્ર ઝડપી ગતિએ જાપ' }
    },
    {
      id: 'lakshmi-mata-aarti-fast',
      name: { en: 'Lakshmi Mata Aarti Super Fast', hi: 'लक्ष्मी माता आरती सुपर फास्ट', gu: 'લક્ષ્મી માતા આરતી સુપર ફાસ્ટ' },
      category: 'devotional-video',
      youtubeId: '5NCT_lrdmjY',
      deity: { en: 'Lakshmi', hi: 'लक्ष्मी', gu: 'લક્ષ્મી' },
      isLive: false,
      description: { en: 'Lakshmi Mata aarti at super fast pace', hi: 'लक्ष्मी माता आरती तेज गति से', gu: 'લક્ષ્મી માતા આરતી ઝડપી ગતિએ' }
    },

    // ── Saraswati ───────────────────────────────────────────────────────────
    {
      id: 'saraswati-mantra-fast-108',
      name: { en: 'Saraswati Mantra 108 Times Fast', hi: 'सरस्वती मंत्र 108 बार तेज', gu: 'સરસ્વતી મંત્ર 108 વખત ઝડપી' },
      category: 'devotional-video',
      youtubeId: '-NqX8zOZ62w',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Saraswati mantra chanted 108 times at fast pace', hi: 'सरस्वती मंत्र 108 बार तेज गति से जाप', gu: 'સરસ્વતી મંત્ર 108 વખત ઝડપી ગતિએ જાપ' }
    },
    {
      id: 'saraswati-mantra-108',
      name: { en: 'Saraswati Mantra 108 Times', hi: 'सरस्वती मंत्र 108 बार', gu: 'સરસ્વતી મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: '5CM6Q-htKqA',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Saraswati mantra chanted 108 times', hi: 'सरस्वती मंत्र 108 बार जाप', gu: 'સરસ્વતી મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'ya-kundendu-tusharahara',
      name: { en: 'Ya Kundendu Tusharahara Dhavala', hi: 'या कुन्देन्दु तुषारहार धवला', gu: 'યા કુંદેંદુ તુષારહાર ધવલા' },
      category: 'devotional-video',
      youtubeId: 'cArR7W_jJZo',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Sacred Saraswati stotram Ya Kundendu Tusharahara Dhavala', hi: 'या कुन्देन्दु तुषारहार धवला सरस्वती स्तोत्र', gu: 'યા કુંદેંદુ તુષારહાર ધવલા સરસ્વતી સ્તોત્ર' }
    },
    {
      id: 'saraswati-chalisa-super-fast',
      name: { en: 'Saraswati Chalisa Maha Super Fast', hi: 'सरस्वती चालीसा महा सुपर फास्ट', gu: 'સરસ્વતી ચાલીસા મહા સુપર ફાસ્ટ' },
      category: 'devotional-video',
      youtubeId: 'w19sRwFqbwY',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Saraswati Chalisa chanted at maha super fast pace', hi: 'सरस्वती चालीसा महा तेज गति से', gu: 'સરસ્વતી ચાલીસા મહા ઝડપી ગતિએ' }
    },
    {
      id: 'neel-saraswati-stotram',
      name: { en: 'Neel Saraswati Stotram', hi: 'नील सरस्वती स्तोत्रम्', gu: 'નીલ સરસ્વતી સ્તોત્રમ્' },
      category: 'devotional-video',
      youtubeId: 'log_B4nMkH0',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Sacred Neel Saraswati stotram', hi: 'नील सरस्वती स्तोत्रम्', gu: 'નીલ સરસ્વતી સ્તોત્રમ્' }
    },
    {
      id: 'shri-saraswati-stuti',
      name: { en: 'Shri Saraswati Stuti', hi: 'श्री सरस्वती स्तुति', gu: 'શ્રી સરસ્વતી સ્તુતિ' },
      category: 'devotional-video',
      youtubeId: 'jCSWCS9FHvQ',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Shri Saraswati stuti prayer', hi: 'श्री सरस्वती स्तुति', gu: 'શ્રી સરસ્વતી સ્તુતિ' }
    },
    {
      id: 'saraswati-mata-aarti',
      name: { en: 'Saraswati Mata Aarti', hi: 'सरस्वती माता आरती', gu: 'સરસ્વતી માતા આરતી' },
      category: 'devotional-video',
      youtubeId: 'OXXnM3T83t4',
      deity: { en: 'Saraswati', hi: 'सरस्वती', gu: 'સરસ્વતી' },
      isLive: false,
      description: { en: 'Saraswati Mata aarti', hi: 'सरस्वती माता आरती', gu: 'સરસ્વતી માતા આરતી' }
    },

    // ── Ambe Mata ──────────────────────────────────────────────────────────
    {
      id: 'ambaji-mantra-jaap-108',
      name: { en: 'Ambaji Mantra Jaap 108 Times', hi: 'अंबाजी मंत्र जाप 108 बार', gu: 'અંબાજી મંત્ર જાપ 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'LDy97MYXejg',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Ambaji mantra jaap chanted 108 times', hi: 'अंबाजी मंत्र जाप 108 बार', gu: 'અંબાજી મંત્ર જાપ 108 વખત' }
    },
    {
      id: 'sarva-mangal-mangalye',
      name: { en: 'Sarva Mangal Mangalye | Durga Mantra', hi: 'सर्व मंगल मांगल्ये | दुर्गा मंत्र', gu: 'સર્વ મંગળ માંગલ્યે | દુર્ગા મંત્ર' },
      category: 'devotional-video',
      youtubeId: 'mmas-XkuEr0',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Sarva Mangal Mangalye sacred Durga mantra', hi: 'सर्व मंगल मांगल्ये पवित्र दुर्गा मंत्र', gu: 'સર્વ મંગળ માંગલ્યે પવિત્ર દુર્ગા મંત્ર' }
    },
    {
      id: 'durga-mantra-108-ambe',
      name: { en: 'Durga Mantra 108 Times', hi: 'दुर्गा मंत्र 108 बार', gu: 'દુર્ગા મંત્ર 108 વખત' },
      category: 'devotional-video',
      youtubeId: 'jB4aaP2X7S4',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Durga mantra chanted 108 times', hi: 'दुर्गा मंत्र 108 बार जाप', gu: 'દુર્ગા મંત્ર 108 વખત જાપ' }
    },
    {
      id: 'maa-durga-mantra',
      name: { en: 'Maa Durga Mantra', hi: 'माँ दुर्गा मंत्र', gu: 'માઁ દુર્ગા મંત્ર' },
      category: 'devotional-video',
      youtubeId: '1CIm9ya3eLk',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Maa Durga mantra', hi: 'माँ दुर्गा मंत्र जाप', gu: 'માઁ દુર્ગા મંત્ર જાપ' }
    },
    {
      id: 'durga-kavach-ambe',
      name: { en: 'Durga Kavach', hi: 'दुर्गा कवच', gu: 'દુર્ગા કવચ' },
      category: 'devotional-video',
      youtubeId: '0rjuR_iiUMg',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Protective armor hymn of Durga Mata', hi: 'दुर्गा माता का सुरक्षा कवच स्तोत्र', gu: 'દુર્ગા માતાનું સુરક્ષા કવચ સ્તોત્ર' }
    },
    {
      id: 'mahishasura-mardini-stotram',
      name: { en: 'Mahishasura Mardini Stotram', hi: 'महिषासुर मर्दिनी स्तोत्रम्', gu: 'મહિષાસુર મર્દિની સ્તોત્રમ્' },
      category: 'devotional-video',
      youtubeId: '442ewPgXHQ0',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Sacred Mahishasura Mardini stotram', hi: 'महिषासुर मर्दिनी स्तोत्रम्', gu: 'મહિષાસુર મર્દિની સ્તોત્રમ્' }
    },
    {
      id: 'bol-mari-ambe-dhun',
      name: { en: 'Bol Mari Ambe Jay Jay Ambe | Dhun', hi: 'बोल मारी अंबे जय जय अंबे | धुन', gu: 'બોલ મારી અંબે જય જય અંબે | ધુન' },
      category: 'devotional-video',
      youtubeId: 'wWiKhU-Ru2E',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Bol Mari Ambe Jay Jay Ambe devotional dhun', hi: 'बोल मारी अंबे जय जय अंबे भक्ति धुन', gu: 'બોલ મારી અંબે જય જય અંબે ભક્તિ ધુન' }
    },
    {
      id: 'ambe-durga-chalisa',
      name: { en: 'Durga Chalisa', hi: 'दुर्गा चालीसा', gu: 'દુર્ગા ચાલીસા' },
      category: 'devotional-video',
      youtubeId: 'ZxMkW0ASufk',
      deity: { en: 'Ambe Mata', hi: 'अंबे माता', gu: 'અંબે માતા' },
      isLive: false,
      description: { en: 'Durga Chalisa devotional recitation', hi: 'दुर्गा चालीसा भक्ति पाठ', gu: 'દુર્ગા ચાલીસા ભક્તિ પાઠ' }
    }
  ];

  /**
   * Maps item.deity.en → category key.
   * Adding a new video only requires the correct deity.en — nothing else to update.
   */
  private readonly DEITY_KEY_MAP: Record<string, string> = {
    'Lord Hanuman': 'hanuman',
    'Lord Shiva': 'shiva',
    'Goddess Durga': 'durga',
    'Lord Ganesh': 'ganesh',
    'Lord Vishnu': 'vishnu',
    'Lord Krishna': 'krishna',
    'Lord Ram': 'ram',
    'Lord Shani': 'shani',
    'Lakshmi': 'lakshmi',
    'Saraswati': 'saraswati',
    'Ambe Mata': 'ambe',
    'Surya Grah': 'surya',
    'Chandra Grah': 'chandra',
    'Mangal Grah': 'mangal',
    'Budh Grah': 'budh',
    'Guru Grah': 'guru',
    'Shukra Grah': 'shukra',
    'Rahu Grah': 'rahu',
    'Ketu Grah': 'ketu',
  };

  /**
   * Explicit overrides for items that belong to a key different from their deity.en
   * (e.g. kali-chalisa has deity 'Goddess Durga' but also appears under 'kali'),
   * and for mantra/stotra cross-listing sections shown only when explicitly filtered.
   */
  private readonly EXPLICIT_CATEGORY_IDS: Record<string, string[]> = {
    'kali': ['kali-chalisa'],
    'hanuman-chalisa': ['hanuman-chalisa', 'hanuman-chalisa-fast'],
    'shiv-tandav': ['shiv-tandav-stotram'],
    'mahamrityunjaya': ['mahamrityunjaya-mantra'],
    'vishnu-sahasranama': ['vishnu-sahasranama'],
    'ram-raksha': ['ram-raksha-stotra', 'ram-raksha-stotra-fast'],
  };

  /** Lazy-built reverse index: category key → DarshanItem[]. Built once on first access. */
  private categoryCache: Map<string, DarshanItem[]> | null = null;

  private buildCategoryCache(): Map<string, DarshanItem[]> {
    const cache = new Map<string, DarshanItem[]>();

    for (const item of this.devotionalItems) {
      const key = item.deity?.en ? this.DEITY_KEY_MAP[item.deity.en] : undefined;
      if (!key) continue;
      const bucket = cache.get(key);
      if (bucket) bucket.push(item);
      else cache.set(key, [item]);
    }

    for (const [key, ids] of Object.entries(this.EXPLICIT_CATEGORY_IDS)) {
      cache.set(key, this.devotionalItems.filter(i => ids.includes(i.id)));
    }

    return cache;
  }

  getItemsByCategory(category: string): DarshanItem[] {
    if (category === 'jyotirlinga') return this.jyotirlingaItems;
    if (category === 'local-temple') return this.localTempleItems;
    if (category === 'devotional-video') return this.devotionalItems;
    return [];
  }

  getItemsByDeity(key: string): DarshanItem[] {
    this.categoryCache ??= this.buildCategoryCache();
    return this.categoryCache.get(key) ?? [];
  }
}
