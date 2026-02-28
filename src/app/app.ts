import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
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

  ngOnInit(): void {
    this.seoService.addOrganizationSchema();
  }

  setLanguage(lang: Language) {
    this.languageService.setLanguage(lang);
  }
}

