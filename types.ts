export interface MenuItem {
  category: string;
  name: string;
  description: string;
  price?: string;
  highlight?: boolean;
}

export interface Review {
  author: string;
  text: string;
  source: string;
  rating: number;
}

export interface OpeningHour {
  day: string;
  time: string;
}
