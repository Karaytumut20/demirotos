export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: string;
  fallbackImage?: string;
  metaTitle: string;
  metaDescription: string;
  useCases: string[];
  howItWorks: string[];
  faqs: { question: string; answer: string }[];
  seoBody?: string;
}

export const services: Service[] = [
  {
    "id": "oto-cekici",
    "slug": "oto-cekici",
    "title": "Oto Çekici",
    "shortDescription": "Oto Çekici alanında profesyonel, 7/24 acil müdahale hizmeti.",
    "description": "Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında Oto Çekici ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.",
    "icon": "Truck",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Oto Çekici Hizmeti | 7/24 Kesintisiz Destek",
    "metaDescription": "Oto Çekici konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.",
    "useCases": [
      "Oto arızaları",
      "Kazalı araç taşıma"
    ],
    "howItWorks": [
      "Bize ulaşın",
      "Konumunuzu bildirin",
      "Anında yanınızdayız"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\"mb-4\">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>"
  },
  {
    "id": "oto-kurtarma",
    "slug": "oto-kurtarma",
    "title": "Oto Kurtarma",
    "shortDescription": "Oto Kurtarma alanında profesyonel, 7/24 acil müdahale hizmeti.",
    "description": "Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında Oto Kurtarma ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.",
    "icon": "Wrench",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Oto Kurtarma Hizmeti | 7/24 Kesintisiz Destek",
    "metaDescription": "Oto Kurtarma konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.",
    "useCases": [
      "Oto arızaları",
      "Kazalı araç taşıma"
    ],
    "howItWorks": [
      "Bize ulaşın",
      "Konumunuzu bildirin",
      "Anında yanınızdayız"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\"mb-4\">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>"
  },
  {
    "id": "yol-yardim",
    "slug": "yol-yardim",
    "title": "Yol Yardım",
    "shortDescription": "Yol Yardım alanında profesyonel, 7/24 acil müdahale hizmeti.",
    "description": "Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında Yol Yardım ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.",
    "icon": "Zap",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Yol Yardım Hizmeti | 7/24 Kesintisiz Destek",
    "metaDescription": "Yol Yardım konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.",
    "useCases": [
      "Oto arızaları",
      "Kazalı araç taşıma"
    ],
    "howItWorks": [
      "Bize ulaşın",
      "Konumunuzu bildirin",
      "Anında yanınızdayız"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\"mb-4\">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>"
  },
  {
    "id": "motosiklet-cekici",
    "slug": "motosiklet-cekici",
    "title": "Motosiklet Çekici",
    "shortDescription": "Motosiklet Çekici alanında profesyonel, 7/24 acil müdahale hizmeti.",
    "description": "Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında Motosiklet Çekici ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.",
    "icon": "Bike",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Motosiklet Çekici Hizmeti | 7/24 Kesintisiz Destek",
    "metaDescription": "Motosiklet Çekici konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.",
    "useCases": [
      "Oto arızaları",
      "Kazalı araç taşıma"
    ],
    "howItWorks": [
      "Bize ulaşın",
      "Konumunuzu bildirin",
      "Anında yanınızdayız"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\"mb-4\">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>"
  },
  {
    "id": "arac-tasima",
    "slug": "arac-tasima",
    "title": "Araç Taşıma",
    "shortDescription": "Araç Taşıma alanında profesyonel, 7/24 acil müdahale hizmeti.",
    "description": "Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında Araç Taşıma ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.",
    "icon": "Package",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Araç Taşıma Hizmeti | 7/24 Kesintisiz Destek",
    "metaDescription": "Araç Taşıma konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.",
    "useCases": [
      "Oto arızaları",
      "Kazalı araç taşıma"
    ],
    "howItWorks": [
      "Bize ulaşın",
      "Konumunuzu bildirin",
      "Anında yanınızdayız"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\"mb-4\">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>"
  },
  {
    "id": "gece-acik-cekici",
    "slug": "gece-acik-cekici",
    "title": "Gece Açık Çekici",
    "shortDescription": "Gecenin kör vaktinde yolda kaldığınızda 7/24 nöbetçi çekici ekibimiz yanınızda.",
    "description": "Özellikle gece açık çekici ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Gecenin kör vaktinde yolda kaldığınızda 7/24 nöbetçi çekici ekibimiz yanınızda.",
    "icon": "Truck",
    "fallbackImage": "fallback-gece",
    "metaTitle": "Gece Açık Çekici | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Gecenin kör vaktinde yolda kaldığınızda 7/24 nöbetçi çekici ekibimiz yanınızda. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Gece Açık Çekici Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. gece açık çekici için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "en-yakin-cekici",
    "slug": "en-yakin-cekici",
    "title": "En Yakın Çekici",
    "shortDescription": "Konumunuza en hızlı ulaşabilecek, GPS ile takip edilen en yakın kurtarma aracı.",
    "description": "Özellikle en yakın çekici ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Konumunuza en hızlı ulaşabilecek, GPS ile takip edilen en yakın kurtarma aracı.",
    "icon": "Truck",
    "fallbackImage": "oto-cekici",
    "metaTitle": "En Yakın Çekici | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Konumunuza en hızlı ulaşabilecek, GPS ile takip edilen en yakın kurtarma aracı. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">En Yakın Çekici Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. en yakın çekici için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "uygun-fiyatli-cekici",
    "slug": "uygun-fiyatli-cekici",
    "title": "Uygun Fiyatlı Çekici",
    "shortDescription": "Bütçenizi sarsmayan, kilometresi şeffaf hesaplanan ucuz ve kaliteli oto çekici.",
    "description": "Özellikle uygun fiyatlı çekici ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Bütçenizi sarsmayan, kilometresi şeffaf hesaplanan ucuz ve kaliteli oto çekici.",
    "icon": "Truck",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Uygun Fiyatlı Çekici | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Bütçenizi sarsmayan, kilometresi şeffaf hesaplanan ucuz ve kaliteli oto çekici. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Uygun Fiyatlı Çekici Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. uygun fiyatlı çekici için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "aku-takviye-hizmeti",
    "slug": "aku-takviye-hizmeti",
    "title": "Akü Takviye Hizmeti",
    "shortDescription": "Aracınızın aküsü bittiğinde veya marş basmadığında bulunduğunuz yerde akü takviyesi.",
    "description": "Özellikle akü takviye hizmeti ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Aracınızın aküsü bittiğinde veya marş basmadığında bulunduğunuz yerde akü takviyesi.",
    "icon": "Truck",
    "fallbackImage": "aku-takviyesi",
    "metaTitle": "Akü Takviye Hizmeti | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Aracınızın aküsü bittiğinde veya marş basmadığında bulunduğunuz yerde akü takviyesi. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Akü Takviye Hizmeti Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. akü takviye hizmeti için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "lastik-patladi-yol-yardim",
    "slug": "lastik-patladi-yol-yardim",
    "title": "Lastik Patladı Yol Yardım",
    "shortDescription": "Otoyolda veya şehir içinde lastik değişimi ve yedek lastik takma desteği.",
    "description": "Özellikle lastik patladı yol yardım ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Otoyolda veya şehir içinde lastik değişimi ve yedek lastik takma desteği.",
    "icon": "Truck",
    "fallbackImage": "aku-takviyesi",
    "metaTitle": "Lastik Patladı Yol Yardım | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Otoyolda veya şehir içinde lastik değişimi ve yedek lastik takma desteği. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Lastik Patladı Yol Yardım Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. lastik patladı yol yardım için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "hararet-yapan-arac-cekici",
    "slug": "hararet-yapan-arac-cekici",
    "title": "Hararet Yapan Araç Çekici",
    "shortDescription": "Motor hararet yaptığında aracınızı zorlamadan güvenle servise çektirin.",
    "description": "Özellikle hararet yapan araç çekici ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Motor hararet yaptığında aracınızı zorlamadan güvenle servise çektirin.",
    "icon": "Truck",
    "fallbackImage": "aku-takviyesi",
    "metaTitle": "Hararet Yapan Araç Çekici | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Motor hararet yaptığında aracınızı zorlamadan güvenle servise çektirin. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Hararet Yapan Araç Çekici Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. hararet yapan araç çekici için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "panelvan-ve-minibus-cekici",
    "slug": "panelvan-ve-minibus-cekici",
    "title": "Panelvan ve Minibüs Çekici",
    "shortDescription": "Hafif ticari, panelvan ve minibüs gibi uzun ve geniş araçlar için özel taşıma.",
    "description": "Özellikle panelvan ve minibüs çekici ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Hafif ticari, panelvan ve minibüs gibi uzun ve geniş araçlar için özel taşıma.",
    "icon": "Truck",
    "fallbackImage": "oto-cekici",
    "metaTitle": "Panelvan ve Minibüs Çekici | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Hafif ticari, panelvan ve minibüs gibi uzun ve geniş araçlar için özel taşıma. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Panelvan ve Minibüs Çekici Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. panelvan ve minibüs çekici için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  },
  {
    "id": "kazali-arac-kurtarma",
    "slug": "kazali-arac-kurtarma",
    "title": "Kazalı Araç Kurtarma",
    "shortDescription": "Trafik kazası sonrası tekerleği dönmeyen veya ağır hasarlı araçların özel vinçle kurtarılması.",
    "description": "Özellikle kazalı araç kurtarma ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. Trafik kazası sonrası tekerleği dönmeyen veya ağır hasarlı araçların özel vinçle kurtarılması.",
    "icon": "Truck",
    "fallbackImage": "yol-yardim",
    "metaTitle": "Kazalı Araç Kurtarma | Acil, Hızlı ve Güvenilir Hizmet",
    "metaDescription": "Trafik kazası sonrası tekerleği dönmeyen veya ağır hasarlı araçların özel vinçle kurtarılması. Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
    "useCases": [
      "Acil durumlar",
      "Gece aramaları",
      "Özel araç tipleri"
    ],
    "howItWorks": [
      "Konum atın",
      "Araç durumunu anlatın",
      "Çekici anında yola çıksın"
    ],
    "faqs": [],
    "seoBody": "<div className=\"space-y-6\"><h3 className=\"text-2xl font-bold mb-4\">Kazalı Araç Kurtarma Sürecimiz</h3><p className=\"mb-4\">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. kazalı araç kurtarma için özel ekipmanlarımız mevcuttur.</p><h3 className=\"text-2xl font-bold mb-4\">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>"
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
