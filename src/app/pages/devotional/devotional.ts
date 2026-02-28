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

  hanumanVideos = computed(() => this.darshanService.getItemsByDeity('Lord Hanuman'));
  shivaVideos = computed(() => this.darshanService.getItemsByDeity('Lord Shiva'));
  durgaVideos = computed(() => this.darshanService.getItemsByDeity('Goddess Durga'));
  ganeshVideos = computed(() => this.darshanService.getItemsByDeity('Lord Ganesh'));
  vishnuVideos = computed(() => this.darshanService.getItemsByDeity('Lord Vishnu'));
  shaniVideos = computed(() => this.darshanService.getItemsByDeity('Lord Shani'));

  // Reactively derived from ?deity= query param — updates on every navigation
  activeDeityFilter = toSignal(
    this.route.queryParamMap.pipe(map(p => p.get('deity') ?? 'all')),
    { initialValue: 'all' },
  );

  ngOnInit(): void {
    this.seoService.setDevotionalPageSEO();
  }
}
