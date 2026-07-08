export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  location?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Resul Şentürk",
    rating: 5,
    text: "Kocaeli Gebze'de aracımız yolda arıza yaptı. Kısa sürede bulunduğumuz konuma gelip aracımızı güvenli şekilde aldılar. Hızlı ve güler yüzlü hizmet sundular.",
    date: "2024",
    location: "Gebze",
  },
  {
    id: "2",
    name: "Cevdet Kuzu",
    rating: 5,
    text: "Balçık Kuzey Marmara'da motorum arızalandı. Çok hızlı ve güzel bir hizmet aldım. Çok güler yüzlüydü.",
    date: "2024",
    location: "Balçık",
  },
  {
    id: "3",
    name: "Ekrem Aksakal",
    rating: 5,
    text: "Çayırova Şekerpınar'da arıza veren aracımız için yardımcı oldukları için teşekkür ederim.",
    date: "2024",
    location: "Şekerpınar",
  },
];
