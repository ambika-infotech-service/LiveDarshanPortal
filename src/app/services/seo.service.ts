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
      url: 'https://livedarshanportal.com',
      type: 'website'
    });
  }

  /**
   * Add structured data (JSON-LD) for videos
   */
  addVideoSchema(videoData: {
    name: string;
    description: string;
    thumbnailUrl: string;
    uploadDate: string;
    duration?: string;
  }): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: videoData.name,
      description: videoData.description,
      thumbnailUrl: videoData.thumbnailUrl,
      uploadDate: videoData.uploadDate,
      ...(videoData.duration && { duration: videoData.duration })
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /**
   * Add Organization schema
   */
  addOrganizationSchema(): void {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Live Darshan Portal',
      description: 'Live streaming platform for temple darshan and devotional content',
      url: 'https://livedarshanportal.com',
      logo: 'https://livedarshanportal.com/logo.png',
      sameAs: [
        'https://www.youtube.com/@livedarshanportal',
        'https://www.facebook.com/livedarshanportal'
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  /**
   * Add Breadcrumb schema
   */
  addBreadcrumbSchema(items: Array<{ name: string; url: string }>): void {
    const breadcrumbs = items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }));

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
