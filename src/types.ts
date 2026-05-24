export interface Review {
  id: string;
  name: string;
  avatar: string;
  comment: string;
  likes: number;
  time: string;
}

export interface BonusItem {
  id: string;
  title: string;
  description: string;
  originalPrice: number;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestSheetPage {
  id: string;
  title: string;
  level: string;
  previewWords: string[];
  imageUrl: string;
}
