// City configuration for 3D printing pages
export interface CityConfig {
  name: string;
  region: string;
  path: string;
  latitude: number;
  longitude: number;
  pageTitle: string;
  description: string;
}

export const cityConfigs: Record<string, CityConfig> = {
  Wien: {
    name: "Wien",
    region: "Wien",
    path: "/3d-druck-wien",
    latitude: 48.2082,
    longitude: 16.3738,
    pageTitle: "3D Druck Wien – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Wien. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Graz: {
    name: "Graz",
    region: "Steiermark",
    path: "/3d-druck-graz",
    latitude: 47.0707,
    longitude: 15.4395,
    pageTitle: "3D Druck Graz – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Graz. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Salzburg: {
    name: "Salzburg",
    region: "Salzburg",
    path: "/3d-druck-salzburg",
    latitude: 47.8095,
    longitude: 13.0550,
    pageTitle: "3D Druck Salzburg – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Salzburg. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Innsbruck: {
    name: "Innsbruck",
    region: "Tirol",
    path: "/3d-druck-innsbruck",
    latitude: 47.2692,
    longitude: 11.4041,
    pageTitle: "3D Druck Innsbruck – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Innsbruck. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Klagenfurt: {
    name: "Klagenfurt",
    region: "Kärnten",
    path: "/3d-druck-klagenfurt",
    latitude: 46.6247,
    longitude: 14.3050,
    pageTitle: "3D Druck Klagenfurt – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Klagenfurt. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Villach: {
    name: "Villach",
    region: "Kärnten",
    path: "/3d-druck-villach",
    latitude: 46.6111,
    longitude: 13.8558,
    pageTitle: "3D Druck Villach – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Villach. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Wels: {
    name: "Wels",
    region: "Oberösterreich",
    path: "/3d-druck-wels",
    latitude: 48.1667,
    longitude: 14.0333,
    pageTitle: "3D Druck Wels – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Wels. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Dornbirn: {
    name: "Dornbirn",
    region: "Vorarlberg",
    path: "/3d-druck-dornbirn",
    latitude: 47.4125,
    longitude: 9.7417,
    pageTitle: "3D Druck Dornbirn – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Dornbirn. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  StPoelten: {
    name: "St. Pölten",
    region: "Niederösterreich",
    path: "/3d-druck-st-poelten",
    latitude: 48.2042,
    longitude: 15.6306,
    pageTitle: "3D Druck St. Pölten – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in St. Pölten. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  },
  Gunskirchen: {
    name: "Gunskirchen",
    region: "Oberösterreich",
    path: "/3d-druck-gunskirchen",
    latitude: 48.1333,
    longitude: 13.9167,
    pageTitle: "3D Druck Gunskirchen – Prototypen & Fertigung | ek-druck",
    description: "Professioneller 3D Druck in Gunskirchen. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell. Jetzt unverbindlich anfragen!"
  }
};

export function generateCityPageContent(linzContent: string, cityKey: keyof typeof cityConfigs): string {
  const config = cityConfigs[cityKey];
  
  // Replace all occurrences of Linz with the city name
  let content = linzContent;
  
  // Replace component name
  content = content.replace(/const Linz3DDruck/g, `const ${cityKey}3DDruck`);
  content = content.replace(/export default Linz3DDruck;/g, `export default ${cityKey}3DDruck;`);
  
  // Replace page title
  content = content.replace(/"3D Druck Linz – Prototypen & Fertigung \| ek-druck"/g, `"${config.pageTitle}"`);
  
  // Replace descriptions
  content = content.replace(/"Professioneller 3D Druck in Linz\. Prototypen, Einzelfertigung & Serienfertigung – schnell, präzise & individuell\. Jetzt unverbindlich anfragen!"/g, `"${config.description}"`);
  
  // Replace paths
  content = content.replace(/path="\/3d-druck-linz"/g, `path="${config.path}"`);
  content = content.replace(/url: "https:\/\/www\.ek-druck\.at\/3d-druck-linz"/g, `url: "https://www.ek-druck.at${config.path}"`);
  
  // Replace breadcrumb
  content = content.replace(/{name: "3D-Druck Linz", url: "\/3d-druck-linz"}/g, `{name: "3D-Druck ${config.name}", url: "${config.path}"}`);
  
  // Replace local business name
  content = content.replace(/"ekdruck e\.U\. - 3D-Druck Linz"/g, `"ekdruck e.U. - 3D-Druck ${config.name}"`);
  
  // Replace address locality and region
  content = content.replace(/"addressLocality": "Linz"/g, `"addressLocality": "${config.name}"`);
  content = content.replace(/"addressRegion": "Oberösterreich"/g, `"addressRegion": "${config.region}"`);
  
  // Replace geo coordinates
  content = content.replace(/"latitude": 48\.3069/g, `"latitude": ${config.latitude}`);
  content = content.replace(/"longitude": 14\.2858/g, `"longitude": ${config.longitude}`);
  
  // Replace area served
  content = content.replace(/{ "@type": "City", "name": "Linz" }/g, `{ "@type": "City", "name": "${config.name}" }`);
  content = content.replace(/{ "@type": "State", "name": "Oberösterreich" }/g, `{ "@type": "State", "name": "${config.region}" }`);
  
  // Replace all text occurrences of "Linz" (but preserve "Linzer")
  content = content.replace(/in Linz([^e])/g, `in ${config.name}$1`);
  content = content.replace(/nach Linz([^e])/g, `nach ${config.name}$1`);
  content = content.replace(/für Linz([^e])/g, `für ${config.name}$1`);
  content = content.replace(/zu Linz([^e])/g, `zu ${config.name}$1`);
  content = content.replace(/Linz & Oberösterreich/g, `${config.name} & ${config.region}`);
  content = content.replace(/Service in <span className="text-gradient">Linz<\/span>/g, `Service in <span className="text-gradient">${config.name}</span>`);
  content = content.replace(/Services in Linz/g, `Services in ${config.name}`);
  content = content.replace(/Projekt in Linz/g, `Projekt in ${config.name}`);
  content = content.replace(/in Linz\./g, `in ${config.name}.`);
  content = content.replace(/nach Linz\./g, `nach ${config.name}.`);
  content = content.replace(/für Linz\./g, `für ${config.name}.`);
  
  // Replace "Linzer" with city adjective
  const cityAdjective = config.name === "Wien" ? "Wiener" : 
                        config.name === "Graz" ? "Grazer" :
                        config.name === "Salzburg" ? "Salzburger" :
                        config.name === "Innsbruck" ? "Innsbrucker" :
                        config.name === "Klagenfurt" ? "Klagenfurter" :
                        config.name === "Villach" ? "Villacher" :
                        config.name === "Wels" ? "Welser" :
                        config.name === "Dornbirn" ? "Dornbirner" :
                        config.name === "St. Pölten" ? "St. Pöltner" :
                        config.name === "Gunskirchen" ? "Gunskir chner" : config.name + "er";
  
  content = content.replace(/Linzer/g, cityAdjective);
  
  // Replace FAQ questions
  content = content.replace(/Wie schnell kann ich mein 3D-Druck-Teil in Linz erhalten\?/g, `Wie schnell kann ich mein 3D-Druck-Teil in ${config.name} erhalten?`);
  content = content.replace(/Wie werden die Kosten für 3D-Druck in Linz berechnet\?/g, `Wie werden die Kosten für 3D-Druck in ${config.name} berechnet?`);
  content = content.replace(/Finishing-Optionen für Ihre 3D-gedruckten Teile in Linz an\./g, `Finishing-Optionen für Ihre 3D-gedruckten Teile in ${config.name} an.`);
  content = content.replace(/Kann ich mein Teil vor Ort in Linz abholen\?/g, `Kann ich mein Teil vor Ort in ${config.name} abholen?`);
  content = content.replace(/Fragen\) zum 3D-Druck in Linz/g, `Fragen) zum 3D-Druck in ${config.name}`);
  content = content.replace(/3D-Druck in Linz\?/g, `3D-Druck in ${config.name}?`);
  content = content.replace(/3D-Druck Service in Linz/g, `3D-Druck Service in ${config.name}`);
  content = content.replace(/Projekt<\/span> in Linz/g, `Projekt</span> in ${config.name}`);
  content = content.replace(/keywords="3d-druck linz, 3d drucker linz, fdm druck linz, rapid prototyping linz, 3d-druck oberösterreich, prototypen linz"/g, 
    `keywords="3d-druck ${config.name.toLowerCase()}, 3d drucker ${config.name.toLowerCase()}, fdm druck ${config.name.toLowerCase()}, rapid prototyping ${config.name.toLowerCase()}, 3d-druck ${config.region.toLowerCase()}, prototypen ${config.name.toLowerCase()}"`);
  
  // Replace specific Linz industry references (keep generic for other cities)
  if (cityKey !== "Linz") {
    content = content.replace(/voestalpine, Engel, Rosenbauer und weitere\./g, "lokale Industrieunternehmen.");
    content = content.replace(/JKU, FH Oberösterreich/g, "lokale Universitäten und Hochschulen");
  }
  
  // Replace region-specific text in heading
  content = content.replace(/FDM 3D-Druck<\/span> für Linz/g, `FDM 3D-Druck</span> für ${config.name}`);
  content = content.replace(/Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in Oberösterreich\./g, 
    `Technologie trifft auf österreichische Qualität – Ihr 3D-Druck Partner in ${config.region}.`);
  
  content = content.replace(/3D-Druck für die <span className="text-gradient">Linzer Wirtschaft<\/span>/g, 
    `3D-Druck für die <span className="text-gradient">${cityAdjective} Wirtschaft</span>`);
  content = content.replace(/unterstützen wir die innovative Wirtschaft der Landeshauptstadt\./g, 
    `unterstützen wir die innovative Wirtschaft in ${config.name}.`);
    
  content = content.replace(/3D-Druck in Linz<\/span>/g, `3D-Druck in ${config.name}</span>`);
  content = content.replace(/Unternehmen und Privatpersonen in Linz und Oberösterreich\./g, 
    `Unternehmen und Privatpersonen in ${config.name} und ${config.region}.`);
  
  return content;
}
