import { ChangeDetectionStrategy, Component, computed, inject, OnInit, signal } from '@angular/core';
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
  public languageService = inject(LanguageService);
  private seoService = inject(SeoService);

  hanumanVideos = computed(() => this.darshanService.getItemsByDeity('Lord Hanuman'));
  shivaVideos = computed(() => this.darshanService.getItemsByDeity('Lord Shiva'));
  durgaVideos = computed(() => this.darshanService.getItemsByDeity('Goddess Durga'));
  ganeshVideos = computed(() => this.darshanService.getItemsByDeity('Lord Ganesh'));
  vishnuVideos = computed(() => this.darshanService.getItemsByDeity('Lord Vishnu'));
  shaniVideos = computed(() => this.darshanService.getItemsByDeity('Lord Shani'));

  activeDeityFilter = signal<string>('all');

  deityFilterOptions = computed(() => {
    const lang = this.languageService.currentLanguage();
    const labels: Record<string, Record<string, string>> = {
      all: { en: 'All', hi: 'सभी', gu: 'બધા' },
      hanuman: { en: 'Hanuman', hi: 'हनुमान', gu: 'હનુમાન' },
      shiva: { en: 'Shiva', hi: 'शिव', gu: 'શિવ' },
      durga: { en: 'Durga & Shakti', hi: 'दुर्गा शक्ति', gu: 'દુર્ગા શક્તિ' },
      ganesh: { en: 'Ganesh', hi: 'गणेश', gu: 'ગણેશ' },
      vishnu: { en: 'Vishnu, Ram & Krishna', hi: 'विष्णु, राम और कृष्ण', gu: 'વિષ્ણુ, રામ અને કૃષ્ણ' },
      shani: { en: 'Shani Dev', hi: 'शनि देव', gu: 'શनि દેવ' },
    };
    return Object.entries(labels).map(([value, translations]) => ({
      value,
      label: translations[lang] ?? translations['en'],
    }));
  });

  setDeityFilter(filter: string): void {
    this.activeDeityFilter.set(filter);
  }

  ngOnInit(): void {
    this.seoService.setDevotionalPageSEO();
  }
}
