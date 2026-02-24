import { Component, signal, computed, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { VideoCardComponent } from './components/video-card/video-card';
import { SectionHeadingComponent } from './components/section-heading/section-heading';
import { DarshanDataService } from './services/darshan-data';
import { LanguageService, Language } from './services/language';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [VideoCardComponent, SectionHeadingComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnInit {
  private darshanService = inject(DarshanDataService);
  public languageService = inject(LanguageService);
  private seoService = inject(SeoService);

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

  ngOnInit(): void {
    // Initialize SEO with organization schema
    this.seoService.addOrganizationSchema();

    // Initialize breadcrumb schema for homepage
    this.seoService.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' }
    ]);
  }

  setActiveTab(tab: string) {
    this.activeTab.set(tab);
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}
