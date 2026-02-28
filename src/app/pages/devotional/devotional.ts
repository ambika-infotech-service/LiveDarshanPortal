import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanItem } from '../../models/darshan.model';
import { DarshanDataService } from '../../services/darshan-data';
import { LanguageService } from '../../services/language';
import { SeoService } from '../../services/seo.service';

interface DeitySection {
  key: string;
  ariaLabel: string;
  iconClass: string;
  label: string;
  videos: DarshanItem[];
  /** Only shown when this key is explicitly selected, not in "all" mode */
  explicitOnly?: boolean;
}

type SectionDef = Omit<DeitySection, 'videos' | 'label'>;

/** Centralised labels for every section key across all three languages */
const SECTION_LABELS: Record<string, Record<'en' | 'hi' | 'gu', string>> = {
  // ── Main Deities ────────────────────────────────────────────────────────
  'hanuman':              { en: 'Hanuman Devotion',             hi: 'हनुमान भक्ति',           gu: 'હનુમાન ભક્તિ' },
  'shiva':                { en: 'Shiva Devotion',               hi: 'शिव भक्ति',               gu: 'શિવ ભક્તિ' },
  'durga':                { en: 'Durga & Shakti Devotion',      hi: 'दुर्गा शक्ति भक्ति',      gu: 'દુર્ગા શક્તિ ભક્તિ' },
  'ganesh':               { en: 'Ganesh Devotion',              hi: 'गणेश भक्ति',              gu: 'ગણેશ ભક્તિ' },
  'vishnu':               { en: 'Vishnu Devotion',              hi: 'विष्णु भक्ति',             gu: 'વિષ્ણુ ભક્તિ' },
  'krishna':              { en: 'Krishna Devotion',             hi: 'कृष्ण भक्ति',             gu: 'કૃષ્ણ ભક્તિ' },
  'ram':                  { en: 'Ram Devotion',                 hi: 'राम भक्ति',               gu: 'રામ ભક્તિ' },
  'lakshmi':              { en: 'Lakshmi Devotion',             hi: 'लक्ष्मी भक्ति',           gu: 'લક્ષ્મી ભક્તિ' },
  'saraswati':            { en: 'Saraswati Devotion',           hi: 'सरस्वती भक्ति',           gu: 'સરસ્વતી ભક્તિ' },
  'kali':                 { en: 'Kali Devotion',                hi: 'काली भक्ति',              gu: 'કાળી ભક્તિ' },
  'ambe':                 { en: 'Ambe Maa Devotion',            hi: 'अम्बे माँ भक्ति',         gu: 'અંબે માં ભક્તિ' },
  // ── Nav Grah ────────────────────────────────────────────────────────────
  'surya':                { en: 'Surya Grah',                   hi: 'सूर्य ग्रह',              gu: 'સૂર્ય ગ્રહ' },
  'chandra':              { en: 'Chandra Grah',                 hi: 'चंद्र ग्रह',              gu: 'ચંદ્ર ગ્રહ' },
  'mangal':               { en: 'Mangal Grah',                  hi: 'मंगल ग्रह',               gu: 'મંગળ ગ્રહ' },
  'budh':                 { en: 'Budh Grah',                    hi: 'बुध ग्रह',                gu: 'બુધ ગ્રહ' },
  'guru':                 { en: 'Guru / Brihaspati Grah',       hi: 'गुरु / बृहस्पति ग्रह',   gu: 'ગુરુ / બૃહસ્પતિ ગ્રહ' },
  'shukra':               { en: 'Shukra Grah',                  hi: 'शुक्र ग्रह',              gu: 'શુક્ર ગ્રહ' },
  'shani':                { en: 'Shani Dev Devotion',           hi: 'शनि देव भक्ति',           gu: 'શનિ દેવ ભક્તિ' },
  'rahu':                 { en: 'Rahu Grah',                    hi: 'राहु ग्रह',               gu: 'રાહુ ગ્રહ' },
  'ketu':                 { en: 'Ketu Grah',                    hi: 'केतु ग्रह',               gu: 'કેતુ ગ્રહ' },
  // ── Mantra & Stotra ─────────────────────────────────────────────────────
  'gayatri':              { en: 'Gayatri Mantra',               hi: 'गायत्री मंत्र',           gu: 'ગાયત્રી મંત્ર' },
  'mahamrityunjaya':      { en: 'Mahamrityunjaya Mantra',       hi: 'महामृत्युंजय मंत्र',     gu: 'મહામૃત્યુંજય મંત્ર' },
  'vishnu-sahasranama':   { en: 'Vishnu Sahasranama',           hi: 'विष्णु सहस्रनाम',         gu: 'વિષ્ણુ સહસ્રનામ' },
  'hanuman-chalisa':      { en: 'Hanuman Chalisa',              hi: 'हनुमान चालीसा',           gu: 'હનુમાન ચાલીસા' },
  'shiv-tandav':          { en: 'Shiv Tandav Stotram',          hi: 'शिव तांडव स्तोत्रम',     gu: 'શિવ તાંડવ સ્તોત્રમ' },
  'ram-raksha':           { en: 'Ram Raksha Stotra',            hi: 'राम रक्षा स्तोत्र',       gu: 'રામ રક્ષા સ્તોત્ર' },
  'durga-saptashati':     { en: 'Durga Saptashati',             hi: 'दुर्गा सप्तशती',          gu: 'દુર્ગા સપ્તશતી' },
  'nav-grah-mantra':      { en: 'Nav Grah Mantra',              hi: 'नव ग्रह मंत्र',           gu: 'નવ ગ્રહ મંત્ર' },
  'beej-mantra':          { en: 'Beej Mantras',                 hi: 'बीज मंत्र',               gu: 'બીજ મંત્ર' },
  // ── Daily & Utility ─────────────────────────────────────────────────────
  'morning-prayer':       { en: 'Morning Prayers',              hi: 'प्रातःकाल प्रार्थना',    gu: 'સવારની પ્રાર્થના' },
  'evening-aarti':        { en: 'Evening Aarti',                hi: 'संध्या आरती',             gu: 'સાંજની આરતી' },
  'aarti':                { en: 'Aarti Sangrah',                hi: 'आरती संग्रह',             gu: 'આરતી સંગ્રહ' },
  'bhajan':               { en: 'Bhajan & Kirtan',              hi: 'भजन & कीर्तन',            gu: 'ભજન & કીર્તન' },
  'meditation':           { en: 'Meditation & Chanting',        hi: 'ध्यान & जप',              gu: 'ધ્યાન & જાપ' },
  '108-mantra':           { en: '108 Times Mantras',            hi: '108 बार मंत्र',           gu: '108 વખત મંત્ર' },
  'live-mantra':          { en: '24x7 Live Mantras',            hi: '24x7 लाइव मंत्र',        gu: '24x7 લાઇવ મંત્ર' },
  // ── Festival & Special ──────────────────────────────────────────────────
  'navratri':             { en: 'Navratri Special',             hi: 'नवरात्रि विशेष',          gu: 'નવરાત્રિ વિશેષ' },
  'shravan':              { en: 'Shravan Maas Special',         hi: 'श्रावण मास विशेष',        gu: 'શ્રાવણ માસ વિશેષ' },
  'janmashtami':          { en: 'Janmashtami Special',          hi: 'जन्माष्टमी विशेष',        gu: 'જન્માષ્ટમી વિશેષ' },
  'ram-navami':           { en: 'Ram Navami Special',           hi: 'राम नवमी विशेष',          gu: 'રામ નવમી વિशेष' },
  'ganesh-chaturthi':     { en: 'Ganesh Chaturthi Special',     hi: 'गणेश चतुर्थी विशेष',     gu: 'ગણેશ ચતુર્થી વિશેષ' },
  'shivratri':            { en: 'Maha Shivratri Special',       hi: 'महाशिवरात्रि विशेष',     gu: 'મહાશિવરાત્રિ વિશેષ' },
  'diwali':               { en: 'Diwali Special',               hi: 'दीवाली विशेष',            gu: 'દિવાળી વિશેષ' },
  'hanuman-jayanti':      { en: 'Hanuman Jayanti Special',      hi: 'हनुमान जयंती विशेष',     gu: 'હનુમાન જ્યંતી વિशेष' },
  // ── Scripture & Katha ───────────────────────────────────────────────────
  'sundarkand':           { en: 'Sundarkand',                   hi: 'सुंदरकांड',               gu: 'સુંદરકાંડ' },
  'gita':                 { en: 'Bhagavad Gita',                hi: 'भगवद गीता',               gu: 'ભગવદ ગીતા' },
  'shiv-puran':           { en: 'Shiv Puran Katha',             hi: 'शिव पुराण कथा',           gu: 'શિવ પુરાણ કથા' },
  'ramayan':              { en: 'Ramayan Katha',                hi: 'रामायण कथा',              gu: 'રામાયણ કથા' },
  'devi-bhagwat':         { en: 'Devi Bhagwat Katha',          hi: 'देवी भागवत कथा',          gu: 'દેવી ભાગવત કથા' },
  'vrat':                 { en: 'Vrat Kathas',                  hi: 'व्रत कथाएं',              gu: 'વ્રત કથાઓ' },
};

@Component({
  selector: 'app-devotional',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './devotional.html',
  styleUrl: './devotional.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devotional implements OnInit {
  private readonly darshanService = inject(DarshanDataService);
  private readonly route          = inject(ActivatedRoute);
  protected readonly languageService = inject(LanguageService);
  private readonly seoService     = inject(SeoService);

  /** Reactive query-param filter — updates on every navigation */
  protected readonly activeDeityFilter = toSignal(
    this.route.queryParamMap.pipe(map(p => p.get('deity') ?? 'all')),
    { initialValue: 'all' },
  );

  /** Static config — no signal needed as it never changes */
  private readonly sectionDefs: SectionDef[] = [
    // ── Main Deities ──────────────────────────────────────────────────────
    { key: 'hanuman',             ariaLabel: 'Hanuman Devotional Videos',          iconClass: 'bi-heart-fill text-danger' },
    { key: 'shiva',               ariaLabel: 'Shiva Devotional Videos',            iconClass: 'bi-award-fill text-info' },
    { key: 'durga',               ariaLabel: 'Durga and Shakti Devotional Videos', iconClass: 'bi-flower1 text-danger' },
    { key: 'ganesh',              ariaLabel: 'Ganesh Devotional Videos',           iconClass: 'bi-circle-fill text-warning' },
    { key: 'vishnu',              ariaLabel: 'Vishnu Devotional Videos',           iconClass: 'bi-sun-fill text-success' },
    { key: 'krishna',             ariaLabel: 'Krishna Devotional Videos',          iconClass: 'bi-music-note-beamed text-primary' },
    { key: 'ram',                 ariaLabel: 'Ram Devotional Videos',              iconClass: 'bi-shield-fill text-success' },
    { key: 'lakshmi',             ariaLabel: 'Lakshmi Devotional Videos',          iconClass: 'bi-gem text-warning' },
    { key: 'saraswati',           ariaLabel: 'Saraswati Devotional Videos',        iconClass: 'bi-book-fill text-info' },
    { key: 'kali',                ariaLabel: 'Kali Devotional Videos',             iconClass: 'bi-moon-stars-fill text-dark' },
    { key: 'ambe',                ariaLabel: 'Ambe Maa Devotional Videos',         iconClass: 'bi-star-fill text-warning' },
    // ── Nav Grah ──────────────────────────────────────────────────────────
    { key: 'surya',               ariaLabel: 'Surya Grah Devotional Videos',       iconClass: 'bi-sun-fill text-warning' },
    { key: 'chandra',             ariaLabel: 'Chandra Grah Devotional Videos',     iconClass: 'bi-moon-fill text-secondary' },
    { key: 'mangal',              ariaLabel: 'Mangal Grah Devotional Videos',      iconClass: 'bi-circle-fill text-danger' },
    { key: 'budh',                ariaLabel: 'Budh Grah Devotional Videos',        iconClass: 'bi-circle text-success' },
    { key: 'guru',                ariaLabel: 'Guru Grah Devotional Videos',        iconClass: 'bi-star-fill text-warning' },
    { key: 'shukra',              ariaLabel: 'Shukra Grah Devotional Videos',      iconClass: 'bi-brightness-high text-info' },
    { key: 'shani',               ariaLabel: 'Shani Dev Devotional Videos',        iconClass: 'bi-star-fill text-primary' },
    { key: 'rahu',                ariaLabel: 'Rahu Grah Devotional Videos',        iconClass: 'bi-cloud-fill text-dark' },
    { key: 'ketu',                ariaLabel: 'Ketu Grah Devotional Videos',        iconClass: 'bi-cloud text-secondary' },
    // ── Mantra & Stotra (explicit filter only — hidden in "all" mode) ─────
    { key: 'gayatri',             ariaLabel: 'Gayatri Mantra Videos',              iconClass: 'bi-brightness-high-fill text-warning', explicitOnly: true },
    { key: 'mahamrityunjaya',     ariaLabel: 'Mahamrityunjaya Mantra Videos',      iconClass: 'bi-award-fill text-info',               explicitOnly: true },
    { key: 'vishnu-sahasranama',  ariaLabel: 'Vishnu Sahasranama Videos',          iconClass: 'bi-sun-fill text-success',              explicitOnly: true },
    { key: 'hanuman-chalisa',     ariaLabel: 'Hanuman Chalisa Videos',             iconClass: 'bi-heart-fill text-danger',             explicitOnly: true },
    { key: 'shiv-tandav',         ariaLabel: 'Shiv Tandav Stotram Videos',         iconClass: 'bi-award-fill text-info',               explicitOnly: true },
    { key: 'ram-raksha',          ariaLabel: 'Ram Raksha Stotra Videos',           iconClass: 'bi-shield-fill text-success',           explicitOnly: true },
    { key: 'durga-saptashati',    ariaLabel: 'Durga Saptashati Videos',            iconClass: 'bi-flower1 text-danger',                explicitOnly: true },
    { key: 'nav-grah-mantra',     ariaLabel: 'Nav Grah Mantra Videos',             iconClass: 'bi-stars text-warning',                 explicitOnly: true },
    { key: 'beej-mantra',         ariaLabel: 'Beej Mantras Videos',                iconClass: 'bi-magic text-primary',                 explicitOnly: true },
    // ── Daily & Utility ───────────────────────────────────────────────────
    { key: 'morning-prayer',      ariaLabel: 'Morning Prayers Videos',             iconClass: 'bi-sunrise-fill text-warning' },
    { key: 'evening-aarti',       ariaLabel: 'Evening Aarti Videos',               iconClass: 'bi-sunset-fill text-danger' },
    { key: 'aarti',               ariaLabel: 'Aarti Sangrah Videos',               iconClass: 'bi-lightning-fill text-warning' },
    { key: 'bhajan',              ariaLabel: 'Bhajan and Kirtan Videos',           iconClass: 'bi-music-note-list text-primary' },
    { key: 'meditation',          ariaLabel: 'Meditation and Chanting Videos',     iconClass: 'bi-peace text-info' },
    { key: '108-mantra',          ariaLabel: '108 Times Mantras Videos',           iconClass: 'bi-infinity text-warning' },
    { key: 'live-mantra',         ariaLabel: '24x7 Live Mantras Videos',           iconClass: 'bi-broadcast text-danger' },
    // ── Festival & Special ────────────────────────────────────────────────
    { key: 'navratri',            ariaLabel: 'Navratri Special Videos',            iconClass: 'bi-flower2 text-danger' },
    { key: 'shravan',             ariaLabel: 'Shravan Maas Special Videos',        iconClass: 'bi-cloud-rain text-info' },
    { key: 'janmashtami',         ariaLabel: 'Janmashtami Special Videos',         iconClass: 'bi-music-note-beamed text-primary' },
    { key: 'ram-navami',          ariaLabel: 'Ram Navami Special Videos',          iconClass: 'bi-shield-fill text-success' },
    { key: 'ganesh-chaturthi',    ariaLabel: 'Ganesh Chaturthi Special Videos',    iconClass: 'bi-circle-fill text-warning' },
    { key: 'shivratri',           ariaLabel: 'Maha Shivratri Special Videos',      iconClass: 'bi-award-fill text-info' },
    { key: 'diwali',              ariaLabel: 'Diwali Special Videos',              iconClass: 'bi-lightbulb-fill text-warning' },
    { key: 'hanuman-jayanti',     ariaLabel: 'Hanuman Jayanti Special Videos',     iconClass: 'bi-heart-fill text-danger' },
    // ── Scripture & Katha ─────────────────────────────────────────────────
    { key: 'sundarkand',          ariaLabel: 'Sundarkand Videos',                  iconClass: 'bi-book-fill text-success' },
    { key: 'gita',                ariaLabel: 'Bhagavad Gita Videos',               iconClass: 'bi-book text-primary' },
    { key: 'shiv-puran',          ariaLabel: 'Shiv Puran Katha Videos',            iconClass: 'bi-journal-text text-info' },
    { key: 'ramayan',             ariaLabel: 'Ramayan Katha Videos',               iconClass: 'bi-journal-text text-success' },
    { key: 'devi-bhagwat',        ariaLabel: 'Devi Bhagwat Katha Videos',          iconClass: 'bi-journal-text text-danger' },
    { key: 'vrat',                ariaLabel: 'Vrat Kathas Videos',                 iconClass: 'bi-journal text-warning' },
  ];

  /**
   * Single signal that drives the entire template.
   * Re-evaluates only when the active filter or language changes.
   */
  protected readonly visibleSections = computed<DeitySection[]>(() => {
    const filter = this.activeDeityFilter();
    const lang   = this.languageService.currentLanguage() as 'en' | 'hi' | 'gu';

    return this.sectionDefs
      .map(def => ({
        ...def,
        label:  SECTION_LABELS[def.key]?.[lang] ?? SECTION_LABELS[def.key]?.['en'] ?? def.key,
        videos: this.darshanService.getItemsByDeity(def.key),
      }))
      .filter(s =>
        s.videos.length > 0 &&
        (s.explicitOnly
          ? filter === s.key
          : filter === 'all' || filter === s.key)
      );
  });

  ngOnInit(): void {
    this.seoService.setDevotionalPageSEO();
  }
}
