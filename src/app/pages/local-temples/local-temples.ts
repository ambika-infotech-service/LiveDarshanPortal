import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanDataService } from '../../services/darshan-data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-local-temples',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './local-temples.html',
  styleUrl: './local-temples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalTemples implements OnInit {
  private darshanService = inject(DarshanDataService);
  private seoService = inject(SeoService);

  items = computed(() => this.darshanService.getItemsByCategory('local-temple'));

  ngOnInit(): void {
    this.seoService.setLocalTemplesPageSEO();
  }
}
