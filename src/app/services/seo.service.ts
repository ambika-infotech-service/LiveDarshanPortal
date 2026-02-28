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
   * Update the <link rel="canonical"> href (requires id="canonical" on the tag)
   */
  private updateCanonical(url: string): void {
    const link = document.getElementById('canonical') as HTMLLinkElement | null;
    if (link) {
      link.href = url;
    }
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
      this.updateCanonical(seoData.url);
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

  // ── AEO / GEO schema helpers ────────────────────────────────────────────────

  /** WebPage schema — helps AI understand page identity and purpose */
  private setWebPageSchema(id: string, data: {
    name: string;
    description: string;
    url: string;
    breadcrumb?: string;
  }): void {
    this.upsertJsonLd(`schema-webpage-${id}`, {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: data.name,
      description: data.description,
      url: data.url,
      isPartOf: { '@type': 'WebSite', url: 'https://livedarshan.ambikainfotech.online' },
      inLanguage: ['en', 'hi', 'gu'],
      ...(data.breadcrumb && { breadcrumb: data.breadcrumb }),
    });
  }

  /** FAQPage schema — powers Google FAQ rich results & AEO answer boxes */
  private setFaqSchema(id: string, faqs: Array<{ q: string; a: string }>): void {
    this.upsertJsonLd(`schema-faq-${id}`, {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    });
  }

  /** ItemList schema — helps AI enumerate the items available on the page */
  private setItemListSchema(id: string, listName: string, items: Array<{ name: string; url: string; position: number }>): void {
    this.upsertJsonLd(`schema-itemlist-${id}`, {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: listName,
      numberOfItems: items.length,
      itemListElement: items.map(item => ({
        '@type': 'ListItem',
        position: item.position,
        name: item.name,
        url: item.url,
      })),
    });
  }

  // ── Per-page helpers ────────────────────────────────────────────────────────

  setJyotirlingasPageSEO(): void {
    const url = 'https://livedarshan.ambikainfotech.online/jyotirlingas';
    const title = '12 Jyotirlingas Live Darshan | Live Darshan Portal';
    const description = 'Watch live darshan of all 12 Jyotirlingas — Somnath, Mahakaleshwar, Omkareshwar, Kashi Vishwanath, Nageshwar and more. Sacred Shiva temples streaming 24/7.';
    this.updateSEO({
      title,
      description,
      keywords: '12 jyotirlingas live darshan, somnath live stream, mahakaleshwar live, kashi vishwanath live, omkareshwar live, nageshwar live, shiva temple darshan',
      url,
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: '12 Jyotirlingas', url },
    ]);
    this.setWebPageSchema('jyotirlingas', { name: title, description, url });
    this.setFaqSchema('jyotirlingas', [
      {
        q: 'What are the 12 Jyotirlingas?',
        a: 'The 12 Jyotirlingas are the holiest shrines of Lord Shiva in India: Somnath, Mallikarjuna, Mahakaleshwar, Omkareshwar, Kedarnath, Bhimashankar, Kashi Vishwanath, Trimbakeshwar, Vaidyanath, Nageshwar, Rameshwaram, and Grishneshwar.',
      },
      {
        q: 'Which Jyotirlinga temples offer live darshan online?',
        a: 'Live Darshan Portal streams live darshan from Somnath Temple (Gujarat), Mahakaleshwar Temple (Ujjain), Omkareshwar Temple (Madhya Pradesh), Kashi Vishwanath Temple (Varanasi), and Nageshwar Jyotirlinga (Dwarka).',
      },
      {
        q: 'Can I watch Somnath Temple live darshan online for free?',
        a: 'Yes. Live Darshan Portal provides a free, 24/7 live YouTube stream of Somnath Temple, one of the most sacred Jyotirlingas located in Prabhas Patan, Gujarat.',
      },
      {
        q: 'What is the best time to watch Mahakaleshwar live darshan?',
        a: 'Mahakaleshwar Temple in Ujjain conducts the famous Bhasma Aarti at dawn (approximately 4 AM). The live stream is available 24/7 on Live Darshan Portal.',
      },
    ]);
    this.setItemListSchema('jyotirlingas', '12 Jyotirlingas Live Darshan Streams', [
      { position: 1, name: 'Somnath Temple — Prabhas Patan, Gujarat', url },
      { position: 2, name: 'Mahakaleshwar Temple — Ujjain, Madhya Pradesh', url },
      { position: 3, name: 'Omkareshwar Temple — Khandwa, Madhya Pradesh', url },
      { position: 4, name: 'Kashi Vishwanath Temple — Varanasi, Uttar Pradesh', url },
      { position: 5, name: 'Nageshwar Jyotirlinga — Dwarka, Gujarat', url },
    ]);
  }

  setLocalTemplesPageSEO(): void {
    const url = 'https://livedarshan.ambikainfotech.online/local-temples';
    const title = 'Gujarat Temple Live Darshan | Live Darshan Portal';
    const description = 'Watch live darshan of popular Gujarat temples — Ambaji, Umiya Mata Unjha, Salangpur Hanuman, Dwarkadhish Dwarka, Ranchhodrai Dakor and Khodiyar Mandir.';
    this.updateSEO({
      title,
      description,
      keywords: 'gujarat temples live darshan, ambaji live stream, umiya mata live, salangpur hanuman live, dwarkadhish live, dakor ranchhodrai live, khodiyar mandir',
      url,
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: 'Local Temples', url },
    ]);
    this.setWebPageSchema('local-temples', { name: title, description, url });
    this.setFaqSchema('local-temples', [
      {
        q: 'Which Gujarat temples can I watch live online?',
        a: 'Live Darshan Portal streams live darshan from Umiya Mata Temple (Unjha), Ambaji Temple, Salangpur Hanuman Temple (Kashtabhanjan Hanumanji), Dwarkadhish Temple (Dwarka), Ranchhodrai Temple (Dakor), and Khodiyar Mandir (Rajpara).',
      },
      {
        q: 'Can I watch Ambaji Temple live darshan online for free?',
        a: 'Yes. Live Darshan Portal provides a free 24/7 live stream of Ambaji Temple, one of the 51 Shakti Peethas located in Ambaji, Gujarat.',
      },
      {
        q: 'Is Dwarkadhish Temple live darshan available online?',
        a: 'Yes. The Dwarkadhish Temple in Dwarka, Gujarat is available as a free live stream on Live Darshan Portal via the official YouTube channel.',
      },
      {
        q: 'Where is Salangpur Hanuman Temple located?',
        a: 'Salangpur Hanuman Temple, formally known as Kashtabhanjan Hanumanji Mandir, is located in Salangpur village in Botad district, Gujarat, India.',
      },
    ]);
    this.setItemListSchema('local-temples', 'Gujarat Temple Live Darshan Streams', [
      { position: 1, name: 'Umiya Mata Temple — Unjha, Gujarat', url },
      { position: 2, name: 'Ambaji Temple — Ambaji, Gujarat', url },
      { position: 3, name: 'Salangpur Hanuman Temple — Salangpur, Gujarat', url },
      { position: 4, name: 'Dwarkadhish Temple — Dwarka, Gujarat', url },
      { position: 5, name: 'Ranchhodrai Temple — Dakor, Gujarat', url },
      { position: 6, name: 'Khodiyar Mandir — Rajpara, Gujarat', url },
    ]);
  }

  setDevotionalPageSEO(): void {
    const url = 'https://livedarshan.ambikainfotech.online/devotional';
    const title = 'Devotional Videos — Bhajans, Mantras & Stotrams | Live Darshan Portal';
    const description = 'Watch Hanuman Chalisa, Shiv Tandav Stotram, Ganesh Chalisa, Vishnu Sahasranama, Durga Chalisa, Shani Chalisa and more devotional videos for daily worship.';
    this.updateSEO({
      title,
      description,
      keywords: 'hanuman chalisa, shiv tandav stotram, ganesh chalisa, vishnu sahasranama, durga chalisa, shani chalisa, bajrang baan, mahamrityunjaya mantra, devotional videos',
      url,
      type: 'website',
    });
    this.addBreadcrumbSchema([
      { name: 'Home', url: 'https://livedarshan.ambikainfotech.online' },
      { name: 'Devotional Videos', url },
    ]);
    this.setWebPageSchema('devotional', { name: title, description, url });
    this.setFaqSchema('devotional', [
      {
        q: 'Where can I watch Hanuman Chalisa online?',
        a: 'You can watch Hanuman Chalisa and its fast version, Bajrang Baan, Sankat Mochan Hanuman Ashtak, and Hanuman Aarti for free on the Devotional Videos page of Live Darshan Portal.',
      },
      {
        q: 'What is the Mahamrityunjaya Mantra?',
        a: 'The Mahamrityunjaya Mantra is a sacred Vedic mantra dedicated to Lord Shiva, chanted for health, longevity, and liberation from the cycle of death. It is available on Live Darshan Portal chanted 1008 times.',
      },
      {
        q: 'Can I filter devotional videos by deity?',
        a: 'Yes. The Devotional Videos page offers a filter to browse videos by deity: Lord Hanuman, Lord Shiva, Goddess Durga, Lord Ganesh, Lord Vishnu / Ram / Krishna, and Lord Shani.',
      },
      {
        q: 'What is Vishnu Sahasranama?',
        a: 'Vishnu Sahasranama is a sacred Hindu text that contains the thousand names of Lord Vishnu. It is one of the most chanted hymns in Vaishnavism and is available as a free devotional video on Live Darshan Portal.',
      },
    ]);
    this.setItemListSchema('devotional', 'Devotional Videos by Deity', [
      { position: 1, name: 'Lord Hanuman — Hanuman Chalisa, Bajrang Baan, Sankat Mochan Ashtak, Hanuman Aarti', url },
      { position: 2, name: 'Lord Shiva — Shiv Tandav Stotram, Mahamrityunjaya Mantra, Om Namah Shivaya, Shiv Aarti', url },
      { position: 3, name: 'Goddess Durga — Durga Chalisa, Kali Chalisa, Lalita Sahasranama, Devi Kavach', url },
      { position: 4, name: 'Lord Ganesh — Ganesh Chalisa, Ganesh Aarti, Vakratunda Mantra, Ganpati Atharvashirsha', url },
      { position: 5, name: 'Lord Vishnu / Ram / Krishna — Vishnu Sahasranama, Ram Raksha Stotra, Hare Krishna Mahamantra, Shri Ram Aarti', url },
      { position: 6, name: 'Lord Shani — Shani Chalisa, Shani Aarti, Shani Beej Mantra, Shani Mahamantra', url },
    ]);
  }
}
