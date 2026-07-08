
const fs = require("fs");

// Update Services
let servicesPath = "./data/services.ts";
let servicesCode = fs.readFileSync(servicesPath, "utf-8");

if (!servicesCode.includes("seoBody")) {
  servicesCode = servicesCode.replace(
    "faqs: { question: string; answer: string }[];",
    "faqs: { question: string; answer: string }[];\n  seoBody?: string;"
  );

  servicesCode = servicesCode.replace(
    /faqs: \[([\s\S]*?)\]\,\n  \}/g,
    (match) => {
      // Basic SEO template generator based on existing content
      const seoTemplate = `
      "seoBody": "<div class=\"space-y-6\"><h3>Neden Bizi Tercih Etmelisiniz?</h3><p>Bölgedeki en hýzlý ve güvenilir hizmeti sunmak için son model ekipmanlar ve profesyonel bir ekiple çalýþýyoruz. Aracýnýzýn kaskolu bir þekilde taþýnmasýný garanti altýna alýyor, size uygun fiyat politikasý ile sürpriz maliyetler çýkarmýyoruz.</p><h3>Fiyatlarýmýz ve Süreç</h3><p>Hizmet bedelimiz, bulunduðunuz konuma ve aracýnýzýn durumuna göre deðiþiklik göstermekle birlikte, daima piyasa standartlarýnda ve müþteri dostudur. 7/24 kesintisiz destek vererek sizi asla yolda býrakmýyoruz.</p></div>"
      `;
      return match.replace("},", "},\n" + seoTemplate);
    }
  );
  fs.writeFileSync(servicesPath, servicesCode);
}

// Update Locations
let locationsPath = "./data/locations.ts";
let locationsCode = fs.readFileSync(locationsPath, "utf-8");

if (!locationsCode.includes("seoBody")) {
  locationsCode = locationsCode.replace(
    "nearbyLocations: string[];",
    "nearbyLocations: string[];\n  seoBody?: string;"
  );

  locationsCode = locationsCode.replace(
    /nearbyLocations: \[([^\]]*)\],/g,
    (match) => {
      const seoTemplate = `
      "seoBody": "<div class=\"space-y-6\"><h3>Bölgedeki En Hýzlý Müdahale</h3><p>Trafiðin yoðun olduðu saatlerde bile, bu bölgeye özel hazýr kýta bekleyen araçlarýmýz sayesinde maðduriyetinizi dakikalar içinde çözüyoruz. Yol durumu ve alternatif güzergahlar konusunda uzman þoförlerimiz, aracýnýza en hýzlý þekilde ulaþýr.</p><h3>Özel Fiyat Avantajý</h3><p>Yerel bölge operasyonlarýmýz sayesinde uzun yol maliyetleri olmadan uygun fiyatlý kurtarma hizmetinden faydalanýrsýnýz. Hem bütçenizi hem de aracýnýzý korumak bizim önceliðimizdir.</p></div>"
      `;
      return match + "\n" + seoTemplate + ",";
    }
  );
  fs.writeFileSync(locationsPath, locationsCode);
}

console.log("SEO properties added successfully.");

