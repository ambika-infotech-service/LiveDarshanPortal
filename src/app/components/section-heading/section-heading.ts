import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  imports: [],
  templateUrl: './section-heading.html',
  styleUrl: './section-heading.scss',
})
export class SectionHeadingComponent {
  title = input.required<string>();
  icon = input<string>('bi-star-fill');
  subtitle = input<string>('');
}
