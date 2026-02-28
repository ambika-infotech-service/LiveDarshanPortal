import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-video-cards-skeleton',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="row" aria-busy="true" aria-label="Loading videos">
      @for (item of skeletonItems(); track item) {
        <div class="col-12 col-md-6 col-lg-4 mb-4">
          <div class="card border-0 shadow-sm placeholder-glow">
            <div class="placeholder ratio ratio-16x9 bg-secondary rounded-top"></div>
            <div class="card-body">
              <p class="placeholder-glow mb-2"><span class="placeholder col-8"></span></p>
              <p class="placeholder-glow mb-0"><span class="placeholder col-6"></span></p>
            </div>
          </div>
        </div>
      }
    </div>
  `
})
/**
 * Renders placeholder data for video card skeleton items while real content is loading.
 *
 * @remarks
 * This component exposes a configurable `count` input (defaulting to `3`) and
 * derives `skeletonItems` from it. The `skeletonItems` function returns an array
 * of numeric indices from `0` to `count - 1`, which is commonly used in templates
 * to iterate and render the correct number of skeleton card placeholders.
 *
 * @example
 * If `count` is `3`, `skeletonItems()` returns `[0, 1, 2]`.
 */
export class VideoCardsSkeletonComponent {
  count = input<number>(3);
  skeletonItems = () => Array.from({ length: this.count() }, (_, i) => i);
}
