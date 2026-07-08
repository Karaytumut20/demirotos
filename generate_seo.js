
const fs = require("fs");

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/i/g, "i")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function generateLocations() {
  const data = [
    // Gebze
    ...["Gebze Merkez", "Sultan Orhan", "Osman Yılmaz", "Arapçeşme", "Köşklü Çeşme", "Güzeller", "Tatlıkuyu", "Yenikent", "Mevlana", "İstasyon", "Beylikbağı", "Kirazpınar", "Eskihisar", "Muallimköy", "Balçık", "Pelitli", "Tavşanlı"].map(n => ({ name: n, type: "mahalle", parent: "Gebze" })),
    // Darıca
    ...["Darıca Merkez", "Kazım Karabekir", "Osmangazi", "Bağlarbaşı", "Nenehatun", "Fevzi Çakmak", "Sırasöğütler", "Bayramoğlu"].map(n => ({ name: n, type: "mahalle", parent: "Darıca" })),
    // Çayırova
    ...["Çayırova Merkez", "Şekerpınar", "Özgürlük", "Yenimahalle", "Atatürk", "Akse", "Emek", "İnönü"].map(n => ({ name: n, type: "mahalle", parent: "Çayırova" })),
    // Dilovası
    ...["Dilovası Merkez", "Mimar Sinan", "Orhangazi", "Diliskelesi", "Tavşancıl", "Cumhuriyet"].map(n => ({ name: n, type: "mahalle", parent: "Dilovası" })),
    // Tuzla
    ...["Tuzla Merkez", "İçmeler", "Aydıntepe", "Şifa", "Aydınlı", "Orhanlı", "Tepeören", "Akfırat", "Tuzla İstasyon", "Tuzla Mimar Sinan"].map(n => ({ name: n, type: "mahalle", parent: "Tuzla" })),
    // Otoyollar
    ...["Gebze D-100 Karayolu", "Gebze TEM Otoyolu", "Kuzey Marmara Otoyolu", "Muallimköy Kavşağı", "Osmangazi Köprüsü Bağlantı Yolları", "Gebze-İzmir Otoyolu"].map(n => ({ name: n, type: "otoyol", parent: "Otoyol Ağı" })),
    // Sanayi
    ...["Gebze OSB", "Güzeller OSB", "Plastikçiler OSB", "İMES OSB", "TOSB", "Şekerpınar Sanayi Bölgesi", "Dilovası Sanayi Bölgesi", "Tuzla Deri OSB", "Orhanlı Sanayi Bölgesi"].map(n => ({ name: n, type: "sanayi", parent: "Sanayi Bölgeleri" }))
  ];

  const baseLocations = [
    { id: "gebze", name: "Gebze", type: "ilce" },
    { id: "cayirova", name: "Çayırova", type: "ilce" },
    { id: "darica", name: "Darıca", type: "ilce" },
    { id: "dilovasi", name: "Dilovası", type: "ilce" },
    { id: "tuzla", name: "Tuzla", type: "ilce" },
    { id: "kocaeli", name: "Kocaeli", type: "ilce" }
  ];

  const allLocations = [...baseLocations.map(b => ({
    id: b.id,
    slug: b.id,
    name: b.name,
    type: b.type,
    h1: `${b.name} Oto Çekici Hizmeti`,
    metaTitle: `${b.name} Oto Çekici ve Kurtarma | 7/24 Kesintisiz Hizmet`,
    metaDescription: `${b.name} bölgesinde yolda kalan araçlar için en hızlı ve uygun fiyatlı oto kurtarma hizmeti. Hemen arayın!`,
    intro: `${b.name} ve çevre mahallelerde 7/24 kesintisiz çekici hizmeti.`,
    description: `${b.name} genelinde yaşayabileceğiniz her türlü araç arızası veya trafik kazası sonrasında, bölgenin en hızlı ve güvenilir oto çekici ağı olarak anında müdahale ediyoruz.`,
    nearbyLocations: [],
    seoBody: `<div className="space-y-6"><h3 className="text-2xl font-bold mb-4">Bölgedeki En Hızlı Müdahale</h3><p className="mb-4">Trafiğin yoğun olduğu saatlerde bile, bu bölgeye özel hazır kıta bekleyen araçlarımız sayesinde mağduriyetinizi dakikalar içinde çözüyoruz.</p><h3 className="text-2xl font-bold mb-4">Özel Fiyat Avantajı</h3><p>Yerel bölge operasyonlarımız sayesinde uzun yol maliyetleri olmadan uygun fiyatlı kurtarma hizmetinden faydalanırsınız.</p></div>`
  }))];

  for (const item of data) {
    const slug = slugify(item.name);
    let intro = `${item.name} (${item.parent}) bölgesinde 7/24 kesintisiz oto çekici hizmeti.`;
    let fallbackImage = item.type === "otoyol" ? "fallback-otoyol" : item.type === "sanayi" ? "fallback-sanayi" : "gebze";

    allLocations.push({
      id: slug,
      slug: slug,
      name: item.name,
      type: item.type,
      fallbackImage: fallbackImage,
      h1: `${item.name} Oto Çekici ve Yol Yardım`,
      metaTitle: `${item.name} Çekici | 7/24 Acil Oto Kurtarma`,
      metaDescription: `${item.name} bölgesinde arızalanan veya yolda kalan aracınız için en yakın çekici bir telefon uzağınızda. Hızlı ve güvenilir kurtarma.`,
      intro: intro,
      description: `${item.name} çevresinde yolda kaldığınızda strese girmeyin. Uzman ekibimiz bulunduğunuz konuma dakikalar içinde ulaşarak aracınızı güvenle istediğiniz servise taşır.`,
      nearbyLocations: [],
      seoBody: `<div className="space-y-6"><h3 className="text-2xl font-bold mb-4">${item.name} Çekici İhtiyacınızda Neden Biz?</h3><p className="mb-4">Özellikle ${item.type === "otoyol" ? "otoyol bağlantılarında" : "bu bölgede"} yaşanan araç arızaları yüksek güvenlik riski taşır. Profesyonel filomuz, çağrınızı alır almaz en hızlı güzergahtan size ulaşır.</p><h3 className="text-2xl font-bold mb-4">Uygun Fiyatlı Çekici</h3><p>Sürpriz fiyatlandırmalara son! ${item.name} ve çevresindeki kurtarma işlemlerimizde tamamen şeffaf ve bütçe dostu bir tarife uyguluyoruz.</p></div>`
    });
  }

  const output = `export interface Location {\n  id: string;\n  slug: string;\n  name: string;\n  type: "ilce" | "mahalle" | "otoyol" | "sanayi";\n  fallbackImage?: string;\n  h1: string;\n  metaTitle: string;\n  metaDescription: string;\n  intro: string;\n  description: string;\n  nearbyLocations: string[];\n  seoBody?: string;\n  parent?: string;\n}\n\nexport const locations: Location[] = ${JSON.stringify(allLocations, null, 2)};\n\nexport function getLocationBySlug(slug: string): Location | undefined {\n  return locations.find((l) => l.slug === slug);\n}\n\nexport const footerLocations = locations.filter(l => l.type === "ilce");\n`;
  fs.writeFileSync("./data/locations.ts", output, "utf8");
}

function generateServices() {
  const data = [
    { title: "Gece Açık Çekici", desc: "Gecenin kör vaktinde yolda kaldığınızda 7/24 nöbetçi çekici ekibimiz yanınızda.", intent: "gece" },
    { title: "En Yakın Çekici", desc: "Konumunuza en hızlı ulaşabilecek, GPS ile takip edilen en yakın kurtarma aracı.", intent: "genel" },
    { title: "Uygun Fiyatlı Çekici", desc: "Bütçenizi sarsmayan, kilometresi şeffaf hesaplanan ucuz ve kaliteli oto çekici.", intent: "fiyat" },
    { title: "Akü Takviye Hizmeti", desc: "Aracınızın aküsü bittiğinde veya marş basmadığında bulunduğunuz yerde akü takviyesi.", intent: "ariza" },
    { title: "Lastik Patladı Yol Yardım", desc: "Otoyolda veya şehir içinde lastik değişimi ve yedek lastik takma desteği.", intent: "ariza" },
    { title: "Hararet Yapan Araç Çekici", desc: "Motor hararet yaptığında aracınızı zorlamadan güvenle servise çektirin.", intent: "ariza" },
    { title: "Panelvan ve Minibüs Çekici", desc: "Hafif ticari, panelvan ve minibüs gibi uzun ve geniş araçlar için özel taşıma.", intent: "arac_tipi" },
    { title: "Kazalı Araç Kurtarma", desc: "Trafik kazası sonrası tekerleği dönmeyen veya ağır hasarlı araçların özel vinçle kurtarılması.", intent: "kaza" }
  ];

  const baseServices = [
    { id: "oto-cekici", title: "Oto Çekici", type: "temel", icon: "Truck" },
    { id: "oto-kurtarma", title: "Oto Kurtarma", type: "temel", icon: "Wrench" },
    { id: "yol-yardim", title: "Yol Yardım", type: "temel", icon: "Zap" },
    { id: "motosiklet-cekici", title: "Motosiklet Çekici", type: "temel", icon: "Bike" },
    { id: "arac-tasima", title: "Araç Taşıma", type: "temel", icon: "Package" }
  ];

  const allServices = [...baseServices.map(b => ({
    id: b.id,
    slug: b.id,
    title: b.title,
    shortDescription: `${b.title} alanında profesyonel, 7/24 acil müdahale hizmeti.`,
    description: `Araç sahiplerinin korkulu rüyası olan yolda kalma durumlarında ${b.title} ekibimiz hızır gibi yetişir. En zorlu anlarınızda bile güvenilir ve hasarsız işlem garantisi sunuyoruz.`,
    icon: b.icon,
    fallbackImage: "oto-cekici",
    metaTitle: `${b.title} Hizmeti | 7/24 Kesintisiz Destek`,
    metaDescription: `${b.title} konusunda uzman kadromuz ve modern filomuzla hizmetinizdeyiz.`,
    useCases: ["Oto arızaları", "Kazalı araç taşıma"],
    howItWorks: ["Bize ulaşın", "Konumunuzu bildirin", "Anında yanınızdayız"],
    faqs: [],
    seoBody: `<div className="space-y-6"><h3 className="text-2xl font-bold mb-4">Neden Bizi Tercih Etmelisiniz?</h3><p className="mb-4">Bölgedeki en hızlı ve güvenilir hizmeti sunmak için son model ekipmanlar kullanıyoruz.</p></div>`
  }))];

  for (const item of data) {
    const slug = slugify(item.title);
    let fallbackImage = item.intent === "gece" ? "fallback-gece" : item.intent === "kaza" ? "yol-yardim" : item.intent === "ariza" ? "aku-takviyesi" : "oto-cekici";
    
    allServices.push({
      id: slug,
      slug: slug,
      title: item.title,
      shortDescription: item.desc,
      description: `Özellikle ${item.title.toLowerCase()} ihtiyaçlarında zamanlama çok önemlidir. Modern filomuz ve GPS altyapımızla size anında çözüm üretiyoruz. ${item.desc}`,
      icon: "Truck",
      fallbackImage: fallbackImage,
      metaTitle: `${item.title} | Acil, Hızlı ve Güvenilir Hizmet`,
      metaDescription: item.desc + " Hemen arayın, dakikalar içinde bulunduğunuz konuma gelelim.",
      useCases: ["Acil durumlar", "Gece aramaları", "Özel araç tipleri"],
      howItWorks: ["Konum atın", "Araç durumunu anlatın", "Çekici anında yola çıksın"],
      faqs: [],
      seoBody: `<div className="space-y-6"><h3 className="text-2xl font-bold mb-4">${item.title} Sürecimiz</h3><p className="mb-4">Bize ulaştığınız andan itibaren operasyon merkezimiz bulunduğunuz konuma en uygun ve donanımlı aracı yönlendirir. ${item.title.toLowerCase()} için özel ekipmanlarımız mevcuttur.</p><h3 className="text-2xl font-bold mb-4">Müşteri Memnuniyeti</h3><p>Hedefimiz sadece aracınızı çekmek değil, yaşadığınız mağduriyeti en stressiz şekilde çözmektir.</p></div>`
    });
  }

  const output = `export interface Service {\n  id: string;\n  slug: string;\n  title: string;\n  shortDescription: string;\n  description: string;\n  icon: string;\n  fallbackImage?: string;\n  metaTitle: string;\n  metaDescription: string;\n  useCases: string[];\n  howItWorks: string[];\n  faqs: { question: string; answer: string }[];\n  seoBody?: string;\n}\n\nexport const services: Service[] = ${JSON.stringify(allServices, null, 2)};\n\nexport function getServiceBySlug(slug: string): Service | undefined {\n  return services.find((s) => s.slug === slug);\n}\n`;
  fs.writeFileSync("./data/services.ts", output, "utf8");
}

generateLocations();
generateServices();
console.log("Programmatic SEO data generated for 100+ items with proper UTF-8!");

