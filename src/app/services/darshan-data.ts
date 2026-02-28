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
    }
  ];

  getItemsByCategory(category: string): DarshanItem[] {
    if (category === 'jyotirlinga') return this.jyotirlingaItems;
    if (category === 'local-temple') return this.localTempleItems;
    if (category === 'devotional-video') return this.devotionalItems;
    return [];
  }

  getItemsByDeity(deityName: string): DarshanItem[] {
    return this.devotionalItems.filter(item => item.deity?.en === deityName);
  }
}
