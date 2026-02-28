import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DarshanItem } from '../../models/darshan.model';
import { LanguageService } from '../../services/language';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-video-card',
  imports: [],
  templateUrl: './video-card.html',
  styleUrl: './video-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VideoCardComponent implements OnInit {
  item = input.required<DarshanItem>();

  public languageService = inject(LanguageService);
  private sanitizer = inject(DomSanitizer);
  private seoService = inject(SeoService);

  ngOnInit(): void {
    // Add video schema for SEO
    const itemData = this.item();
    const description = itemData.description?.[this.languageService.currentLanguage()] ||
      itemData.name[this.languageService.currentLanguage()];

    this.seoService.addVideoSchema({
      name: this.getTranslatedName(),
      description: description,
      thumbnailUrl: `https://img.youtube.com/vi/${itemData.youtubeId}/maxresdefault.jpg`,
      uploadDate: new Date().toISOString(),
      duration: itemData.isLive ? 'PT0H0M0S' : undefined
    });
  }

  getEmbedUrl(): SafeResourceUrl {
    const { youtubeId, channelId, isLive } = this.item();

    if (isLive && channelId) {
      const url = `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    // Handle channel handle live streams (format: "@channelName")
    if (isLive && youtubeId.startsWith('@')) {
      const url = `https://www.youtube.com/embed/${youtubeId}/live?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }

    // Handle regular video IDs
    const url = `https://www.youtube.com/embed/${youtubeId}?autoplay=0&mute=0&controls=1&rel=0&modestbranding=1&playsinline=1`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  getTranslatedName(): string {
    const lang = this.languageService.currentLanguage();
    return this.item().name[lang];
  }

  getTranslatedLocation(): string {
    const lang = this.languageService.currentLanguage();
    return this.item().location?.[lang] || '';
  }

  getTranslatedDeity(): string {
    const lang = this.languageService.currentLanguage();
    return this.item().deity?.[lang] || '';
  }

  getYouTubeUrl(): string {
    const { youtubeId, channelId, isLive } = this.item();

    if (isLive && channelId) {
      return `https://www.youtube.com/channel/${channelId}/live`;
    }

    // Handle channel handle live streams
    if (isLive && youtubeId.startsWith('@')) {
      return `https://www.youtube.com/${youtubeId}/live`;
    }

    // Handle regular video IDs
    return `https://www.youtube.com/watch?v=${youtubeId}`;
  }

  /**
   * Get alt text for video card images
   */
  getAltText(): string {
    const lang = this.languageService.currentLanguage();
    const name = this.item().name[lang];
    const location = this.item().location?.[lang];
    const deity = this.item().deity?.[lang];

    if (location && deity) {
      return `${name} - ${deity} at ${location}`;
    }
    if (location) {
      return `${name} at ${location}`;
    }
    if (deity) {
      return `${name} - ${deity}`;
    }
    return `Live streaming of ${name}`;
  }

  /**
   * Get SEO-friendly aria-label
   */
  getAriaLabel(): string {
    const lang = this.languageService.currentLanguage();
    const status = this.item().isLive ? 'Live Now' : 'Offline';
    return `${this.item().name[lang]} - ${status}`;
  }
}
