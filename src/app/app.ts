import { ChangeDetectionStrategy, Component, computed, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map, startWith } from 'rxjs';
import { Language, LanguageService } from './services/language';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App implements OnInit {
  public languageService = inject(LanguageService);
  private seoService = inject(SeoService);
  private router = inject(Router);

  readonly deityNavItems = computed(() => {
    const lang = this.languageService.currentLanguage();
    const labels: Record<string, Record<string, string>> = {
      hanuman: { en: 'Hanuman', hi: 'हनुमान', gu: 'હનુમાન' },
      shiva: { en: 'Shiva', hi: 'शिव', gu: 'શિવ' },
      durga: { en: 'Durga & Shakti', hi: 'दुर्गा & शक्ति', gu: 'દુર્ગા & શક્તિ' },
      ganesh: { en: 'Ganesh', hi: 'गणेश', gu: 'ગણેશ' },
      vishnu: { en: 'Vishnu / Ram / Krishna', hi: 'विष्णु / राम / कृष्ण', gu: 'વિષ્ણુ / રામ / કૃષ્ણ' },
      shani: { en: 'Shani Dev', hi: 'शनि देव', gu: 'શनि દેવ' },
    };
    return Object.entries(labels).map(([value, t]) => ({
      value,
      label: t[lang] ?? t['en'],
    }));
  });

  private readonly activeDeity = toSignal(
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      startWith(null),
      map(() => new URLSearchParams(this.router.url.split('?')[1] ?? '').get('deity') ?? null),
    ),
    { initialValue: null },
  );

  /** Returns the translated deity label when a filter is active, null otherwise */
  readonly activeDeityLabel = computed(() =>
    this.deityNavItems().find(i => i.value === this.activeDeity())?.label ?? null
  );

  ngOnInit(): void {
    this.seoService.addOrganizationSchema();
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}

