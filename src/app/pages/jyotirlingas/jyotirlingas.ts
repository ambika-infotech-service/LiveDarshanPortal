import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card';
import { VideoCardsSkeletonComponent } from '../../components/video-cards-skeleton/video-cards-skeleton';
import { DarshanDataService } from '../../services/darshan-data';

@Component({
  selector: 'app-jyotirlingas',
  imports: [VideoCardComponent, VideoCardsSkeletonComponent],
  templateUrl: './jyotirlingas.html',
  styleUrl: './jyotirlingas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Jyotirlingas {
  private darshanService = inject(DarshanDataService);

  items = computed(() => this.darshanService.getItemsByCategory('jyotirlinga'));

}
