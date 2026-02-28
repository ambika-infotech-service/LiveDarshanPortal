import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanDataService } from '../../services/darshan-data';

@Component({
  selector: 'app-local-temples',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './local-temples.html',
  styleUrl: './local-temples.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocalTemples {
  private darshanService = inject(DarshanDataService);

  items = computed(() => this.darshanService.getItemsByCategory('local-temple'));

}
