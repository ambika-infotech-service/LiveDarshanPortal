import { Component, input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DarshanItem } from '../../models/darshan.model';
import { LanguageService } from '../../services/language';

@Component({
  selector: 'app-video-card',
  imports: [],
  templateUrl: './video-card.html',
  styleUrl: './video-card.scss',
})
export class VideoCardComponent {
  item = input.required<DarshanItem>();

  constructor(
    public languageService: LanguageService,
    private sanitizer: DomSanitizer
  ) {}

  getEmbedUrl(): SafeResourceUrl {
    const youtubeId = this.item().youtubeId;

    // Handle channel handle live streams (format: "@channelName")
    if (youtubeId.startsWith('@')) {
      // Try using the standard YouTube embed with the handle format
      // Add more parameters for better compatibility
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
    const youtubeId = this.item().youtubeId;

    // Handle channel handle live streams
    if (youtubeId.startsWith('@')) {
      return `https://www.youtube.com/${youtubeId}/live`;
    }

    // Handle regular video IDs
    return `https://www.youtube.com/watch?v=${youtubeId}`;
  }
}
