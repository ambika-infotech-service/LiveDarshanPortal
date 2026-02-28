import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanDataService } from '../../services/darshan-data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-jyotirlingas',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './jyotirlingas.html',
  styleUrl: './jyotirlingas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jyotirlingas implements OnInit {
  private darshanService = inject(DarshanDataService);
  private seoService = inject(SeoService);

  items = computed(() => this.darshanService.getItemsByCategory('jyotirlinga'));

  ngOnInit(): void {
    this.seoService.setJyotirlingasPageSEO();
  }
}
