import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanDataService } from '../../services/darshan-data';
import { LanguageService } from '../../services/language';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-devotional',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './devotional.html',
  styleUrl: './devotional.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Devotional implements OnInit {
  private darshanService = inject(DarshanDataService);
  private route = inject(ActivatedRoute);
  public languageService = inject(LanguageService);
  private seoService = inject(SeoService);

  // ── Main Deities ──────────────────────────────────────────────────────────
  hanumanVideos   = computed(() => this.darshanService.getItemsByDeity('hanuman'));
  shivaVideos     = computed(() => this.darshanService.getItemsByDeity('shiva'));
  durgaVideos     = computed(() => this.darshanService.getItemsByDeity('durga'));
  ganeshVideos    = computed(() => this.darshanService.getItemsByDeity('ganesh'));
  vishnuVideos    = computed(() => this.darshanService.getItemsByDeity('vishnu'));
  krishnaVideos   = computed(() => this.darshanService.getItemsByDeity('krishna'));
  ramVideos       = computed(() => this.darshanService.getItemsByDeity('ram'));
  lakshmiVideos   = computed(() => this.darshanService.getItemsByDeity('lakshmi'));
  saraswatiVideos = computed(() => this.darshanService.getItemsByDeity('saraswati'));
  kaliVideos      = computed(() => this.darshanService.getItemsByDeity('kali'));
  ambeVideos      = computed(() => this.darshanService.getItemsByDeity('ambe'));

  // ── Nav Grah ──────────────────────────────────────────────────────────────
  shaniVideos   = computed(() => this.darshanService.getItemsByDeity('shani'));
  suryaVideos   = computed(() => this.darshanService.getItemsByDeity('surya'));
  chandraVideos = computed(() => this.darshanService.getItemsByDeity('chandra'));
  mangalVideos  = computed(() => this.darshanService.getItemsByDeity('mangal'));
  budhVideos    = computed(() => this.darshanService.getItemsByDeity('budh'));
  guruVideos    = computed(() => this.darshanService.getItemsByDeity('guru'));
  shukraVideos  = computed(() => this.darshanService.getItemsByDeity('shukra'));
  rahuVideos    = computed(() => this.darshanService.getItemsByDeity('rahu'));
  ketuVideos    = computed(() => this.darshanService.getItemsByDeity('ketu'));

  // ── Mantra & Stotra (shown only under their specific filter) ─────────────
  gayatriVideos           = computed(() => this.darshanService.getItemsByDeity('gayatri'));
  mahamrityunjayaVideos   = computed(() => this.darshanService.getItemsByDeity('mahamrityunjaya'));
  vishnuSahasranamaVideos = computed(() => this.darshanService.getItemsByDeity('vishnu-sahasranama'));
  hanumanChalisaVideos    = computed(() => this.darshanService.getItemsByDeity('hanuman-chalisa'));
  shivTandavVideos        = computed(() => this.darshanService.getItemsByDeity('shiv-tandav'));
  ramRakshaVideos         = computed(() => this.darshanService.getItemsByDeity('ram-raksha'));
  durgaSaptashatiVideos   = computed(() => this.darshanService.getItemsByDeity('durga-saptashati'));
  navGrahMantraVideos     = computed(() => this.darshanService.getItemsByDeity('nav-grah-mantra'));
  beejMantraVideos        = computed(() => this.darshanService.getItemsByDeity('beej-mantra'));

  // ── Daily & Utility Bhakti ────────────────────────────────────────────────
  morningPrayerVideos = computed(() => this.darshanService.getItemsByDeity('morning-prayer'));
  eveningAartiVideos  = computed(() => this.darshanService.getItemsByDeity('evening-aarti'));
  aartiVideos         = computed(() => this.darshanService.getItemsByDeity('aarti'));
  bhajanVideos        = computed(() => this.darshanService.getItemsByDeity('bhajan'));
  meditationVideos    = computed(() => this.darshanService.getItemsByDeity('meditation'));
  mantra108Videos     = computed(() => this.darshanService.getItemsByDeity('108-mantra'));
  liveMantrasVideos   = computed(() => this.darshanService.getItemsByDeity('live-mantra'));

  // ── Festival & Special ────────────────────────────────────────────────────
  navratriVideos        = computed(() => this.darshanService.getItemsByDeity('navratri'));
  shravanVideos         = computed(() => this.darshanService.getItemsByDeity('shravan'));
  janmashtamiVideos     = computed(() => this.darshanService.getItemsByDeity('janmashtami'));
  ramNavamiVideos       = computed(() => this.darshanService.getItemsByDeity('ram-navami'));
  ganeshChaturthiVideos = computed(() => this.darshanService.getItemsByDeity('ganesh-chaturthi'));
  shivratriVideos       = computed(() => this.darshanService.getItemsByDeity('shivratri'));
  diwaliVideos          = computed(() => this.darshanService.getItemsByDeity('diwali'));
  hanumanJayantiVideos  = computed(() => this.darshanService.getItemsByDeity('hanuman-jayanti'));

  // ── Scripture & Katha ─────────────────────────────────────────────────────
  sundarkandVideos  = computed(() => this.darshanService.getItemsByDeity('sundarkand'));
  gitaVideos        = computed(() => this.darshanService.getItemsByDeity('gita'));
  shivPuranVideos   = computed(() => this.darshanService.getItemsByDeity('shiv-puran'));
  ramayanVideos     = computed(() => this.darshanService.getItemsByDeity('ramayan'));
  deviBhagwatVideos = computed(() => this.darshanService.getItemsByDeity('devi-bhagwat'));
  vratVideos        = computed(() => this.darshanService.getItemsByDeity('vrat'));

  // Reactively derived from ?deity= query param — updates on every navigation
  activeDeityFilter = toSignal(
    this.route.queryParamMap.pipe(map(p => p.get('deity') ?? 'all')),
    { initialValue: 'all' },
  );

  ngOnInit(): void {
    this.seoService.setDevotionalPageSEO();
  }
}
