import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SEOMetata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  author?: string;
  type?: string;
  url?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);

  constructor() {
    this.initializeSEO();
  }

  /**
   * Initialize default SEO metadata
   */
  private initializeSEO(): void {
    this.title.setTitle('Live Darshan Portal - 12 Jyotirlingas & Temple Live Streams');
  }

  /**
   * Update page title and meta tags
   */
  updateSEO(seoData: SEOMetata): void {
    // Update page title
    if (seoData.title) {
      this.title.setTitle(seoData.title);
    }

    // Update description
    if (seoData.description) {
      this.meta.updateTag({ name: 'description', content: seoData.description });
    }

    // Update keywords
    if (seoData.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoData.keywords });
    }

    // Update Open Graph tags
    if (seoData.title) {
      this.meta.updateTag({ property: 'og:title', content: seoData.title });
    }
    if (seoData.description) {
      this.meta.updateTag({ property: 'og:description', content: seoData.description });
    }
    if (seoData.image) {
      this.meta.updateTag({ property: 'og:image', content: seoData.image });
    }
    if (seoData.type) {
      this.meta.updateTag({ property: 'og:type', content: seoData.type });
    }
    if (seoData.url) {
      this.meta.updateTag({ property: 'og:url', content: seoData.url });
    }

    // Update Twitter Card tags
    if (seoData.title) {
      this.meta.updateTag({ name: 'twitter:title', content: seoData.title });
    }
    if (seoData.description) {
      this.meta.updateTag({ name: 'twitter:description', content: seoData.description });
    }
    if (seoData.image) {
      this.meta.updateTag({ name: 'twitter:image', content: seoData.image });
    }

    // Update author if provided
    if (seoData.author) {
      this.meta.updateTag({ name: 'author', content: seoData.author });
    }
  }

  /**
   * Reset SEO to default homepage tags
   */
  resetSEO(): void {
    this.updateSEO({
      title: 'Live Darshan Portal - 12 Jyotirlingas & Temple Live Streams',
      description: 'Watch live darshan of 12 Jyotirlingas, local temples, and devotional videos. Experience divine blessings from anywhere.',
      keywords: 'live darshan, jyotirlingas, temple live streams, devotional videos, hindu temples, spiritual streaming, online puja',
      url: 'https://livedarshan.ambikainfotech.online',
      type: 'website'
    });
  }

  /**
   * Upsert a JSON-LD <script> tag identified by a unique id
   */
  private upsertJsonLd(id: string, schema: object): void {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }

  /**
   * Add Organization schema (safe to call once; subsequent calls update in place)
   */
  addOrganizationSchema(): void {
    this.upsertJsonLd('schema-organization', {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Live Darshan Portal',
      description: 'Live streaming platform for temple darshan and devotional content',
      url: 'https://livedarshan.ambikainfotech.online',
      logo: 'https://livedarshan.ambikainfotech.online/logo.png',
      sameAs: [
        'https://www.youtube.com/@livedarshanportal',
        'https://www.facebook.com/livedarshanportal'
      ]
    });
  }

  /**
   * Add Breadcrumb schema (updates in place on each navigation)
   */
  addBreadcrumbSchema(items: Array<{ name: string; url: string }>): void {
    this.upsertJsonLd('schema-breadcrumb', {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    });
  }

  /**
   * Add/update structured data (JSON-LD) for a video (keyed by videoId to avoid duplicates)
   */
  addVideoSchema(videoData: {
    id: string;
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
  }): void {
    this.upsertJsonLd(`schema-video-${videoData.id}`, {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: videoData.name,
      description: videoData.description,
      thumbnailUrl: videoData.thumbnailUrl,
      uploadDate: videoData.uploadDate,
      ...(videoData.duration && { duration: videoData.duration })
    });
  }

  // ── Per-page helpers ────────────────────────────────────────────────────────

  setJyotirlingasPageSEO(): void {
    this.updateSEO({
      title: '12 Jyotirlingas Live Darshan | Live Darshan Portal',
      description: 'Watch live darshan of all 12 Jyotirlingas — Somnath, Mahakaleshwar, Omkareshwar, Kashi Vishwanath, Nageshwar and more. Sacred Shiva temples streaming 24/7.',
      keywords: '12 jyotirlingas live darshan, somnath live stream, mahakaleshwar live, kashi vishwanath live, omkareshwar live, nageshwar live, shiva temple darshan',
      url: 'https://livedarshan.ambikainfotech.online/jyotirlingas',
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: '12 Jyotirlingas', url: 'https://livedarshan.ambikainfotech.online/jyotirlingas' },
    ]);
  }

  setLocalTemplesPageSEO(): void {
    this.updateSEO({
      title: 'Gujarat Temple Live Darshan | Live Darshan Portal',
      description: 'Watch live darshan of popular Gujarat temples — Ambaji, Umiya Mata Unjha, Salangpur Hanuman, Dwarkadhish Dwarka, Ranchhodrai Dakor and Khodiyar Mandir.',
      keywords: 'gujarat temples live darshan, ambaji live stream, umiya mata live, salangpur hanuman live, dwarkadhish live, dakor ranchhodrai live, khodiyar mandir',
      url: 'https://livedarshan.ambikainfotech.online/local-temples',
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: 'Local Temples', url: 'https://livedarshan.ambikainfotech.online/local-temples' },
    ]);
  }

  setDevotionalPageSEO(): void {
    this.updateSEO({
      title: 'Devotional Videos — Bhajans, Mantras & Stotrams | Live Darshan Portal',
      description: 'Watch Hanuman Chalisa, Shiv Tandav Stotram, Ganesh Chalisa, Vishnu Sahasranama, Durga Chalisa, Shani Chalisa and more devotional videos for daily worship.',
      keywords: 'hanuman chalisa, shiv tandav stotram, ganesh chalisa, vishnu sahasranama, durga chalisa, shani chalisa, bajrang baan, mahamrityunjaya mantra, devotional videos',
      url: 'https://livedarshan.ambikainfotech.online/devotional',
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: 'Devotional Videos', url: 'https://livedarshan.ambikainfotech.online/devotional' },
    ]);
  }
}
