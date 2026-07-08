
const fs = require("fs");

function fixServices() {
  let text = fs.readFileSync("./data/services.ts", "utf-8");
  // Remove the bad seoBody injections inside faqs
  text = text.replace(/,\n\n      "seoBody": "[^"]*"\n      \n/g, "");
  
  // Now add it properly after the faqs array
  text = text.replace(/faqs: \[\n([\s\S]*?)    \],\n  \}/g, (match) => {
    return match.replace("    ],\n  }", "    ],\n    seoBody: \"<div className=\\\"space-y-6\\\"><h3 className=\\\"text-2xl font-bold mb-4\\\">Neden Bizi Tercih Etmelisiniz?</h3><p className=\\\"mb-4\\\">Bölgedeki en hýzlý ve güvenilir hizmeti sunmak için son model ekipmanlar ve profesyonel bir ekiple çalýþýyoruz. Aracýnýzýn kaskolu bir þekilde taþýnmasýný garanti altýna alýyor, size uygun fiyat politikasý ile sürpriz maliyetler çýkarmýyoruz.</p><h3 className=\\\"text-2xl font-bold mb-4\\\">Fiyatlarýmýz ve Süreç</h3><p>Hizmet bedelimiz, bulunduðunuz konuma ve aracýnýzýn durumuna göre deðiþiklik göstermekle birlikte, daima piyasa standartlarýnda ve müþteri dostudur. 7/24 kesintisiz destek vererek sizi asla yolda býrakmýyoruz.</p></div>\"\n  }");
  });
  
  fs.writeFileSync("./data/services.ts", text);
}

function fixLocations() {
  let text = fs.readFileSync("./data/locations.ts", "utf-8");
  // Remove bad seoBody
  text = text.replace(/\n      "seoBody": "[^"]*",/g, "");
  
  // Add it properly after nearbyLocations array
  text = text.replace(/nearbyLocations: \[([^\]]*)\],\n  \}/g, (match) => {
    return match.replace("],\n  }", "],\n    seoBody: \"<div className=\\\"space-y-6\\\"><h3 className=\\\"text-2xl font-bold mb-4\\\">Bölgedeki En Hýzlý Müdahale</h3><p className=\\\"mb-4\\\">Trafiðin yoðun olduðu saatlerde bile, bu bölgeye özel hazýr kýta bekleyen araçlarýmýz sayesinde maðduriyetinizi dakikalar içinde çözüyoruz. Yol durumu ve alternatif güzergahlar konusunda uzman þoförlerimiz, aracýnýza en hýzlý þekilde ulaþýr.</p><h3 className=\\\"text-2xl font-bold mb-4\\\">Özel Fiyat Avantajý</h3><p>Yerel bölge operasyonlarýmýz sayesinde uzun yol maliyetleri olmadan uygun fiyatlý kurtarma hizmetinden faydalanýrsýnýz. Hem bütçenizi hem de aracýnýzý korumak bizim önceliðimizdir.</p></div>\"\n  }");
  });
  
  fs.writeFileSync("./data/locations.ts", text);
}

fixServices();
fixLocations();
console.log("Fixed files.");

