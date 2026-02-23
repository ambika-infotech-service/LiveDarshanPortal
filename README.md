# Live Darshan Portal 🕉️

A modern, responsive web application for streaming live darshan from temples across India, featuring the 12 Jyotirlingas, local temples, and devotional content.

## Features ✨

- **Live Temple Streams**: Watch live darshan from 12 Jyotirlingas and local temples
- **Devotional Content**: Access devotional videos like Hanuman Chalisa, Shani Chalisa, etc.
- **Multilingual Support**: Available in English, Hindi, and Gujarati
- **Responsive Design**: Fully mobile-friendly using Bootstrap 5
- **Reusable Components**: Clean Angular architecture with standalone components
- **Modern UI**: Beautiful devotional theme with smooth animations
- **Accessibility**: WCAG AA compliant with proper ARIA attributes

## Tech Stack 🛠️

- **Angular v20+** (Standalone Components)
- **TypeScript** (Strict mode)
- **Bootstrap 5.3.2** (Responsive grid and components)
- **Bootstrap Icons** (Icon library)
- **SCSS** (Styling)
- **Signals API** (State management)
- **YouTube Embed API** (Video streaming)

## Project Structure 📁

```
src/app/
├── components/
│   ├── video-card/
│   │   └── video-card.component.ts        # Reusable video card with iframe
│   └── section-heading/
│       └── section-heading.component.ts   # Reusable section header
├── models/
│   └── darshan.model.ts                   # TypeScript interfaces
├── services/
│   ├── darshan-data.service.ts            # Temple/video data management
│   └── language.service.ts                # Multilingual support
├── app.ts                                 # Main app component
├── app.html                               # Main template with tabs
└── app.scss                               # App-specific styles
```

## Development server

To start a local development server, run:

```bash
npm start
# or
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Key Components 🧩

### 1. Video Card Component
Reusable component that displays:
- YouTube embedded video/live stream
- Temple name (multilingual)
- Location and deity information
- Live badge for active streams
- Loading state
- Offline message when stream is unavailable

### 2. Section Heading Component
Reusable heading with icon support and animated underline

### 3. Language Service
Manages multilingual content with English, Hindi, and Gujarati support

### 4. Darshan Data Service
Manages temple and video data with sample content for:
- 3 Jyotirlingas (Somnath, Mallikarjuna, Mahakaleshwar)
- 2 Local Temples (ISKCON Ahmedabad, Tirupati Balaji)
- 2 Devotional Videos (Hanuman Chalisa, Shani Chalisa)

## Adding New Content 📝

To add new temples or videos, edit `src/app/services/darshan-data.service.ts`:

```typescript
{
  id: 'unique-id',
  name: {
    en: 'Temple Name in English',
    hi: 'मंदिर का नाम हिंदी में',
    gu: 'મંદિરનું નામ ગુજરાતીમાં'
  },
  category: 'jyotirlinga', // or 'local-temple' or 'devotional-video'
  youtubeId: 'YOUR_YOUTUBE_VIDEO_ID',
  location: {
    en: 'Location',
    hi: 'स्थान',
    gu: 'સ્થાન'
  },
  deity: {
    en: 'Deity Name',
    hi: 'देवता',
    gu: 'દેવતા'
  },
  isLive: true
}
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Browser Support 🌐

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements 🚀

- [ ] Add search functionality
- [ ] Implement favorites/bookmarks
- [ ] Add notifications for live streams
- [ ] Integrate real-time stream status
- [ ] Add more temples and videos
- [ ] PWA support

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

---

**Built with ❤️ for devotees worldwide**
