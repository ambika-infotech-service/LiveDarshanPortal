import { Component, signal, computed } from '@angular/core';
import { VideoCardComponent } from './components/video-card/video-card';
import { SectionHeadingComponent } from './components/section-heading/section-heading';
import { DarshanDataService } from './services/darshan-data';
import { LanguageService, Language } from './services/language';

@Component({
  selector: 'app-root',
  imports: [VideoCardComponent, SectionHeadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  activeTab = signal<string>('jyotirlingas');

  // Get items by category
  jyotirlingaItems = computed(() =>
    this.darshanService.getItemsByCategory('jyotirlinga')
  );

  localTempleItems = computed(() =>
    this.darshanService.getItemsByCategory('local-temple')
  );

  devotionalVideoItems = computed(() =>
    this.darshanService.getItemsByCategory('devotional-video')
  );

  // Get devotional items grouped by deity
  hanumanVideos = computed(() =>
    this.darshanService.getItemsByDeity('Lord Hanuman')
  );

  shivaVideos = computed(() =>
    this.darshanService.getItemsByDeity('Lord Shiva')
  );

  durgaVideos = computed(() =>
    this.darshanService.getItemsByDeity('Goddess Durga')
  );

  ganeshVideos = computed(() =>
    this.darshanService.getItemsByDeity('Lord Ganesh')
  );

  vishnuVideos = computed(() =>
    this.darshanService.getItemsByDeity('Lord Vishnu')
  );

  shaniVideos = computed(() =>
    this.darshanService.getItemsByDeity('Lord Shani')
  );

  constructor(
    private darshanService: DarshanDataService,
    public languageService: LanguageService
  ) {}

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
