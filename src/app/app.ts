import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { Language, LanguageService } from './services/language';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  public languageService = inject(LanguageService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  readonly deityNavGroups = computed(() => {
    const lang = this.languageService.currentLanguage();
    const t = (en: string, hi: string, gu: string) =>
      lang === 'hi' ? hi : lang === 'gu' ? gu : en;

    return [
      {
        groupLabel: '🔱 ' + t('Main Deities', 'मुख्य देवी-देवता', 'મુખ્ય દેવ-દેવી'),
        items: [
          { value: 'shiva',     label: t('Shiv Bhakti',     'शिव भक्ति',     'શિવ ભક્તિ') },
          { value: 'hanuman',   label: t('Hanuman Bhakti',  'हनुमान भक्ति',  'હનુમાન ભક્તિ') },
          { value: 'ganesh',    label: t('Ganesh Bhakti',   'गणेश भक्ति',   'ગણેશ ભક્તિ') },
          { value: 'vishnu',    label: t('Vishnu Bhakti',   'विष्णु भक्ति',  'વિષ્ણુ ભક્તિ') },
          { value: 'krishna',   label: t('Krishna Bhakti',  'कृष्ण भक्ति',  'કૃષ્ણ ભક્તિ') },
          { value: 'ram',       label: t('Ram Bhakti',      'राम भक्ति',     'રામ ભક્તિ') },
          { value: 'lakshmi',   label: t('Lakshmi Bhakti',  'लक्ष्मी भक्ति', 'લક્ષ્મી ભક્તિ') },
          { value: 'saraswati', label: t('Saraswati Bhakti','सरस्वती भक्ति', 'સરસ્વતી ભક્તિ') },
          { value: 'durga',     label: t('Durga Bhakti',    'दुर्गा भक्ति',  'દુર્ગા ભક્તિ') },
          { value: 'kali',      label: t('Kali Bhakti',     'काली भक्ति',    'કાળી ભક્તિ') },
          { value: 'ambe',      label: t('Ambe Maa Bhakti', 'अम्बे माँ भक्ति','અંબે માં ભક્તિ') },
        ],
      },
      {
        groupLabel: '🪐 ' + t('Nav Grah', 'नव ग्रह', 'નવ ગ્રહ'),
        items: [
          { value: 'surya',   label: t('Surya Grah',          'सूर्य ग्रह',          'સૂર્ય ગ્રહ') },
          { value: 'chandra', label: t('Chandra Grah',         'चंद्र ग्रह',          'ચંદ્ર ગ્રહ') },
          { value: 'mangal',  label: t('Mangal Grah',          'मंगल ग्रह',           'મંગળ ગ્રહ') },
          { value: 'budh',    label: t('Budh Grah',            'बुध ग्रह',            'બુધ ગ્રહ') },
          { value: 'guru',    label: t('Guru / Brihaspati',    'गुरु / बृहस्पति',     'ગુરુ / બૃહસ્પતિ') },
          { value: 'shukra',  label: t('Shukra Grah',          'शुक्र ग्रह',          'શુક્ર ગ્રહ') },
          { value: 'shani',   label: t('Shani Grah',           'शनि ग्रह',            'શનિ ગ્રહ') },
          { value: 'rahu',    label: t('Rahu Grah',            'राहु ग्रह',           'રાહુ ગ્રહ') },
          { value: 'ketu',    label: t('Ketu Grah',            'केतु ग्रह',           'કેતુ ગ્રહ') },
        ],
      },
      {
        groupLabel: '🕉️ ' + t('Mantra & Stotra', 'मंत्र & स्तोत्र', 'મંત્ર & સ્તોત્ર'),
        items: [
          { value: 'gayatri',           label: t('Gayatri Mantra',          'गायत्री मंत्र',         'ગાયત્રી મંત્ર') },
          { value: 'mahamrityunjaya',   label: t('Mahamrityunjaya Mantra',  'महामृत्युंजय मंत्र',    'મહામૃત્યુંજય મંત્ર') },
          { value: 'vishnu-sahasranama',label: t('Vishnu Sahasranama',      'विष्णु सहस्रनाम',      'વિષ્ણુ સહસ્રનામ') },
          { value: 'hanuman-chalisa',   label: t('Hanuman Chalisa',         'हनुमान चालीसा',        'હનુમાન ચાલીસા') },
          { value: 'shiv-tandav',       label: t('Shiv Tandav Stotram',     'शिव तांडव स्तोत्रम',   'શિવ તાંડવ સ્તોત્રમ') },
          { value: 'ram-raksha',        label: t('Ram Raksha Stotra',       'राम रक्षा स्तोत्र',    'રામ રક્ષા સ્તોત્ર') },
          { value: 'durga-saptashati',  label: t('Durga Saptashati',        'दुर्गा सप्तशती',       'દુર્ગા સપ્તશતી') },
          { value: 'nav-grah-mantra',   label: t('Nav Grah Mantra',         'नव ग्रह मंत्र',        'નવ ગ્રહ મંત્ર') },
          { value: 'beej-mantra',       label: t('Beej Mantras',            'बीज मंत्र',            'બીજ મંત્ર') },
        ],
      },
      {
        groupLabel: '📿 ' + t('Daily Bhakti', 'दैनिक भक्ति', 'દૈનિક ભક્તિ'),
        items: [
          { value: 'morning-prayer', label: t('Morning Prayers',       'प्रातःकाल प्रार्थना', 'સવારની પ્રાર્થના') },
          { value: 'evening-aarti',  label: t('Evening Aarti',         'संध्या आरती',         'સાંજની આરતી') },
          { value: 'aarti',          label: t('Aarti Sangrah',         'आरती संग्रह',         'આરતી સંગ્રહ') },
          { value: 'bhajan',         label: t('Bhajan & Kirtan',       'भजन & कीर्तन',        'ભજન & કીર્તન') },
          { value: 'meditation',     label: t('Meditation & Chanting', 'ध्यान & जप',          'ધ્યાન & જાપ') },
          { value: '108-mantra',     label: t('108 Times Mantras',     '108 बार मंत्र',       '108 વખત મંત્ર') },
          { value: 'live-mantra',    label: t('24x7 Live Mantras',     '24x7 लाइव मंत्र',    '24x7 લાઇવ મંત્ર') },
        ],
      },
      {
        groupLabel: '🎉 ' + t('Festival Special', 'त्योहार विशेष', 'તહેવાર વિશેષ'),
        items: [
          { value: 'navratri',          label: t('Navratri Special',          'नवरात्रि विशेष',          'નવરાત્રિ વિશેષ') },
          { value: 'shravan',           label: t('Shravan Maas Special',      'श्रावण मास विशेष',        'શ્રાવણ માસ વિશેષ') },
          { value: 'janmashtami',       label: t('Janmashtami Special',       'जन्माष्टमी विशेष',        'જન્માષ્ટમી વિશેષ') },
          { value: 'ram-navami',        label: t('Ram Navami Special',        'राम नवमी विशेष',          'રામ નવમી વિશેષ') },
          { value: 'ganesh-chaturthi',  label: t('Ganesh Chaturthi Special',  'गणेश चतुर्थी विशेष',      'ગણેશ ચતુર્થી વિશેષ') },
          { value: 'shivratri',         label: t('Maha Shivratri Special',    'महाशिवरात्रि विशेष',      'મહાશિવરાત્રિ વિશેષ') },
          { value: 'diwali',            label: t('Diwali Special',            'दीवाली विशेष',            'દિવાળી વિશેષ') },
          { value: 'hanuman-jayanti',   label: t('Hanuman Jayanti Special',   'हनुमान जयंती विशेष',      'હનુમાન જ્યંતી વિશેષ') },
        ],
      },
      {
        groupLabel: '📖 ' + t('Scripture & Katha', 'शास्त्र & कथा', 'શાસ્ત્ર & કથા'),
        items: [
          { value: 'sundarkand',   label: t('Sundarkand',        'सुंदरकांड',          'સુંદરકાંડ') },
          { value: 'gita',         label: t('Bhagavad Gita',     'भगवद गीता',          'ભગવદ ગીતા') },
          { value: 'shiv-puran',   label: t('Shiv Puran Katha',  'शिव पुराण कथा',      'શિવ પુરાણ કથા') },
          { value: 'ramayan',      label: t('Ramayan Katha',     'रामायण कथा',         'રામાયણ કથા') },
          { value: 'devi-bhagwat', label: t('Devi Bhagwat Katha','देवी भागवत कथा',     'દેવી ભાગવત કથા') },
          { value: 'vrat',         label: t('Vrat Kathas',       'व्रत कथाएं',         'વ્રત કથાઓ') },
        ],
      },
    ];
  });

  /** Flat list used by activeDeityLabel lookup */
  readonly deityNavItems = computed(() =>
    this.deityNavGroups().flatMap(g => g.items)
  );

  private readonly activeDeity = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      startWith(null),
      map(() => new URLSearchParams(this.router.url.split('?')[1] ?? '').get('deity') ?? null),
    ),
    { initialValue: null },
  );

  /** Returns the translated deity label when a filter is active, null otherwise */
  readonly activeDeityLabel = computed(() =>
    this.deityNavItems().find(i => i.value === this.activeDeity())?.label ?? null
  );

  ngOnInit(): void {
    this.seoService.addOrganizationSchema();
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}

