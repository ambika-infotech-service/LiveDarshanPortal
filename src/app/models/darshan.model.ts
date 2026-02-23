// Data models for Live Darshan Portal

export type Category = 'jyotirlinga' | 'local-temple' | 'devotional-video';

export interface DarshanItem {
  id: string;
  name: {
    en: string;
    hi: string;
    gu: string;
  };
  category: Category;
  youtubeId: string;
  location?: {
    en: string;
    hi: string;
    gu: string;
  };
  deity?: {
    en: string;
    hi: string;
    gu: string;
  };
  isLive: boolean;
  description?: {
    en: string;
    hi: string;
    gu: string;
  };
}
