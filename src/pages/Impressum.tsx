import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead 
        title="Impressum | ekdruck e.U. – 3D-Druck Gunskirchen"
        description="Impressum & rechtliche Informationen zu ekdruck e.U., Gunskirchen (OÖ). Ihr Ansprechpartner für 3D-Druck in Österreich."
        keywords="ekdruck impressum, ekdruck kontaktdaten, ekdruck gunskirchen"
        path="/impressum"
        type="website"
      />
      <BreadcrumbSchema items={[
        {name: "Home", url: "/"},
        {name: "Impressum", url: "/impressum"}
      ]} />
      
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Impressum
          </h1>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Die Vorgaben für in das Firmenbuch eingetragene Unternehmen laut § 14 UGB sind durch folgende Angaben erfüllt.
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-medium">ekdruck e.U.</p>
                <div className="space-y-2">
                  <p>Rechtsform: eingetragenes Einzelunternehmen</p>
                  <p>Firmenbuchnummer: FN639499s</p>
                  <p>Firmenbuchgericht: Landesgericht Wels</p>
                  <p>Telefon: +43 676 5517197</p>
                  <p>E-Mail: office@ek-druck.at</p>
                  <p>Maria-Theresia-Straße 12</p>
                  <p>4600 Wels</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Offenlegung gem. § 25 Mediengesetz
              </h2>
              <div className="space-y-4">
                <p>Für den Inhalt verantwortlich und zugleich Geschäftsführer ist:</p>
                <div className="space-y-2">
                  <p className="font-medium">Kevin Eppensteiner</p>
                  <p>Negrellistraße 15</p>
                  <p>4623 Gunskirchen</p>
                  <p>Österreich</p>
                </div>
                <div className="space-y-2 mt-6">
                  <p>Infos, Datenauskünfte und Beschwerden unter: 
                    <a href="mailto:office@ek-druck.at" className="text-primary hover:underline ml-1">office@ek-druck.at</a>
                  </p>
                  <p>Tel: +43 676 5517197</p>
                  <p>E-Mail: 
                    <a href="mailto:office@ek-druck.at" className="text-primary hover:underline ml-1">office@ek-druck.at</a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <div className="space-y-4">
                <p>ekdruck e.U. ist Mitglied der Wirtschaftskammer Oberösterreich</p>
                <p>Gewerbeordnung: 
                  <a href="http://www.ris.bka.gv.at/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">http://www.ris.bka.gv.at/</a>
                </p>
                <p>Kleinunternehmerregelung nach §6 Abs 1 Z 27 Umsatzsteuergesetz - UStG</p>
                <div className="space-y-3">
                  <p className="font-medium">Gewerbetätigkeit:</p>
                  <p>Erzeugung von Architekturmodellen sowie Modellen für Gebrauchsgegenstände aller Art, sofern diese lediglich Anschauungszwecken dienen</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              <div className="space-y-4">
                <p>Alle Angaben auf dieser Website wurden sorgfältig geprüft. Es wird jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Informationen übernommen.</p>
                <p className="font-medium">Alle Angaben ohne Gewähr.</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Impressum;
