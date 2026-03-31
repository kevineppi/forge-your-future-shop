import { Link } from "react-router-dom";

const SEOContentSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <article className="prose prose-sm md:prose-base max-w-none text-muted-foreground">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
          3D-Druck Kosten berechnen – Ihr Richtpreis für Anschauungsmodelle aus Österreich
        </h2>

        <p className="lead text-base md:text-lg leading-relaxed">
          Unser kostenloser <strong className="text-foreground">3D-Druck Kostenrechner</strong> gibt Ihnen eine
          erste Orientierung, was Ihr Anschauungsmodell im FDM-Verfahren kosten wird. Ob
          <Link to="/architekturmodelle" className="text-primary hover:underline"> Architekturmodell</Link>,
          <Link to="/messemodelle" className="text-primary hover:underline"> Messemodell</Link> oder
          individuelle Designstudie – Sie laden Ihre STL-Datei hoch, wählen Material und Druckparameter,
          und erhalten sofort einen unverbindlichen Richtpreis.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          Wie funktioniert die Preiskalkulation?
        </h3>
        <p>
          Der Richtpreis setzt sich aus mehreren Faktoren zusammen: <strong className="text-foreground">Materialverbrauch</strong> (Volumen × Dichte × Materialpreis),
          <strong className="text-foreground"> Druckzeit</strong> (abhängig von Geometrie, Schichtdicke und Infill) sowie einer
          <strong className="text-foreground"> Setup-Pauschale</strong> für die technische Vorbereitung und Qualitätsprüfung.
          Bei größeren Modellen (ab 170 mm) kommt ein Größenzuschlag hinzu, bei größeren Stückzahlen erhalten Sie Mengenrabatt.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          Warum ist der Richtpreis unverbindlich?
        </h3>
        <p>
          Jedes 3D-Modell ist einzigartig. Faktoren wie Bauteilorientierung, Stützstrukturen, Nachbearbeitung
          und spezielle Toleranzanforderungen können den endgültigen Preis beeinflussen. Deshalb wird
          <strong className="text-foreground"> jede Anfrage persönlich von unseren Experten geprüft</strong> –
          erst dann erhalten Sie ein verbindliches Angebot. Das unterscheidet uns von automatisierten
          Online-Druckservices: Bei uns bekommt Ihr Projekt die Aufmerksamkeit, die es verdient.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          Für wen ist der Rechner gedacht?
        </h3>
        <ul className="space-y-2">
          <li>
            <strong className="text-foreground">Architekten & Planer:</strong> Erste Kosteneinschätzung für maßstabsgetreue Präsentationsmodelle
          </li>
          <li>
            <strong className="text-foreground">Designer & Kreative:</strong> Richtpreise für haptische Designstudien und Formentwürfe
          </li>
          <li>
            <strong className="text-foreground">Messebauer & Eventplaner:</strong> Budgetplanung für Ausstellungsobjekte und Standmodelle
          </li>
          <li>
            <strong className="text-foreground">Modellbau-Enthusiasten:</strong> Transparente Preisübersicht für Anschauungsmodelle aller Art
          </li>
        </ul>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          Welche Materialien stehen zur Verfügung?
        </h3>
        <p>
          Wir drucken mit 8 verschiedenen <Link to="/materialien" className="text-primary hover:underline">FDM-Materialien</Link>:
          Von <strong className="text-foreground">PLA</strong> (ideal für die meisten Anschauungsmodelle) über
          <strong className="text-foreground"> PETG</strong> (UV-beständig für Outdoor-Exponate) bis hin zu
          <strong className="text-foreground"> PA6-CF</strong> (Carbon-verstärkt für Premium-Modelle mit High-End-Optik).
          Im Rechner können Sie das Material direkt auswählen und sehen sofort den Preisunterschied.
        </p>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          Was passiert nach der Kalkulation?
        </h3>
        <p>
          Wenn Ihnen der Richtpreis zusagt, können Sie direkt über das integrierte Formular
          eine <strong className="text-foreground">unverbindliche Anfrage</strong> senden. Ihre Konfiguration
          (Material, Stückzahl, Richtpreis) wird automatisch übermittelt. Unser Team meldet sich
          innerhalb von <strong className="text-foreground">6 Stunden</strong> mit einer persönlichen
          Einschätzung und – sofern das Projekt in unseren Leistungsbereich fällt – einem individuellen Angebot.
        </p>

        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mt-10">
          <h4 className="text-lg font-bold text-foreground mb-2">
            Wichtig: Nur Anschauungsmodelle
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-0">
            Wir fertigen ausschließlich Anschauungsmodelle, Designstudien und Präsentationsobjekte.
            Anfragen für Funktionsteile, technische Bauteile oder industrielle Serienfertigung können wir nicht bearbeiten.
            Ihr Projekt wird persönlich geprüft – eine Zusage zur Machbarkeit erfolgt erst nach Begutachtung.
          </p>
        </div>

        <h3 className="text-xl font-bold text-foreground mt-10 mb-4">
          3D-Druck Kosten in Österreich – was beeinflusst den Preis?
        </h3>
        <p>
          Die Kosten für 3D-Druck hängen im Wesentlichen von diesen Faktoren ab:
        </p>
        <ol className="space-y-2">
          <li><strong className="text-foreground">Volumen & Materialverbrauch:</strong> Mehr Material = höhere Kosten. Der Infill-Anteil (Füllung) bestimmt, wie viel Material im Inneren verwendet wird.</li>
          <li><strong className="text-foreground">Druckzeit:</strong> Feinere Schichtdicken (z.B. 0,08 mm) ergeben glattere Oberflächen, dauern aber deutlich länger.</li>
          <li><strong className="text-foreground">Baugröße:</strong> Größere Modelle benötigen mehr Druckzeit und Material. Ab 170 mm maximaler Ausdehnung gilt ein Größenzuschlag.</li>
          <li><strong className="text-foreground">Materialwahl:</strong> Spezialmaterialien wie PA6-CF (€120/kg) kosten deutlich mehr als Standard-PLA (€25/kg).</li>
          <li><strong className="text-foreground">Nachbearbeitung:</strong> Glätten, Lackieren oder Zusammenbau erhöhen den Preis – das wird individuell besprochen.</li>
        </ol>

        <p className="mt-8 text-sm text-muted-foreground">
          Nutzen Sie unseren Richtpreis-Rechner für eine erste Einschätzung und fordern Sie anschließend
          ein persönliches Angebot an. Wir sind spezialisiert auf Anschauungsmodelle aus Oberösterreich
          und liefern österreichweit – mit <Link to="/kontakt" className="text-primary hover:underline">persönlicher Beratung</Link> von
          Anfang an.
        </p>
      </article>
    </div>
  </section>
);

export default SEOContentSection;
