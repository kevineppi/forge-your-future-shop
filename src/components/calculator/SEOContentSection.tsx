import { Link } from "react-router-dom";

const SEOContentSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <article className="space-y-10">

        {/* ── Lead ─────────────────────────────── */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-5">
            3D-Druck Kosten berechnen – was kostet ein Anschauungsmodell?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Die Frage nach den Kosten steht bei jedem 3D-Druck-Projekt am Anfang. Unser
            Richtpreis-Rechner gibt Ihnen innerhalb von Sekunden eine fundierte Ersteinschätzung –
            basierend auf der tatsächlichen Geometrie Ihrer STL-Datei, dem gewählten Material und
            Ihren Druckparametern. Dabei ist jede Kalkulation unverbindlich: Der endgültige Preis
            wird erst nach persönlicher Prüfung durch unser Team festgelegt.
          </p>
        </div>

        {/* ── Kostenfaktoren ───────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Die fünf Faktoren, die Ihren Preis bestimmen
          </h3>
          <div className="space-y-4">
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-semibold text-foreground">1. Materialverbrauch</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Der größte Kostentreiber ist das Volumen Ihres Modells. Dabei zählt nicht nur das
                Gesamtvolumen, sondern auch der tatsächliche Materialanteil – bestimmt durch
                Wandstärke und Infill-Anteil. Ein Modell mit 15 % Infill verbraucht deutlich
                weniger Material als eines mit 100 %. Die Materialpreise reichen von €25/kg (PLA)
                bis €120/kg (PA6-CF mit Carbonfaser).
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-semibold text-foreground">2. Druckzeit</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Je länger der Drucker arbeitet, desto höher die Kosten. Die Druckzeit hängt ab von:
                Modellvolumen (mehr Material = mehr Zeit), Oberfläche (komplexe Geometrien dauern
                länger), Schichtdicke (0,08 mm erzeugt glattere Oberflächen, dauert aber 25 % länger
                als 0,20 mm) und der Bauhöhe (mehr Schichten = mehr Zeit).
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-semibold text-foreground">3. Baugröße</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Modelle mit einer maximalen Ausdehnung ab 170 mm erhalten einen Größenzuschlag. Der
                Grund: Größere Drucke erfordern mehr Plattenbelegung, längere Aufwärmzeiten und
                erhöhte Fehlerrisiken. Ab 260 mm maximaler Dimension wird mit dem erhöhten
                Stundensatz kalkuliert.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-semibold text-foreground">4. Setup & Vorbereitung</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Für jedes Projekt fällt eine Setup-Pauschale von €12,99 an. Diese deckt die
                technische Vorbereitung: Slicing, Druckoptimierung, Bauteilorientierung und
                Qualitätskontrolle. Bei uns ist das kein automatisierter Prozess – jedes Modell
                wird von einem Fachmann vorbereitet.
              </p>
            </div>
            <div className="border-l-2 border-primary/30 pl-4">
              <h4 className="font-semibold text-foreground">5. Nachbearbeitung</h4>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                Stützstrukturen entfernen, Oberflächen glätten, Grundierung oder Lackierung – all
                das beeinflusst den Endpreis, wird aber im Rechner nicht automatisch erfasst. Diese
                Arbeiten besprechen wir individuell mit Ihnen und kalkulieren sie separat.
              </p>
            </div>
          </div>
        </div>

        {/* ── Warum unverbindlich ──────────────── */}
        <div className="bg-muted/30 border border-border/60 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Warum kein Sofortkauf? Warum persönliche Prüfung?
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Viele Online-3D-Druckdienste bieten automatisierte Bestellungen an. Wir haben uns
            bewusst dagegen entschieden – und zwar aus Qualitätsgründen:
          </p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>
                <strong className="text-foreground">Geometrie-Check:</strong> Nicht jedes 3D-Modell
                ist druckbar. Überhänge, zu dünne Wände oder geschlossene Hohlräume können
                Probleme verursachen, die ein Algorithmus nicht zuverlässig erkennt.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>
                <strong className="text-foreground">Orientierung:</strong> Die Bauteilorientierung
                auf der Druckplatte beeinflusst Oberfläche, Stabilität und Stützstruktur-Aufwand
                erheblich. Das lässt sich nicht automatisieren, wenn Qualität das Ziel ist.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>
                <strong className="text-foreground">Materialberatung:</strong> Ob PLA, PETG oder
                Carbon – die Materialwahl hängt von Einsatzzweck, Umgebung und ästhetischen
                Anforderungen ab. Das klären wir im persönlichen Gespräch.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
              <span>
                <strong className="text-foreground">Leistungsgrenzen:</strong> Wir fertigen
                ausschließlich Anschauungsmodelle. Wenn ein Modell eher ein Funktionsteil ist,
                sagen wir das ehrlich – statt es einfach zu drucken und Probleme in Kauf zu nehmen.
              </span>
            </li>
          </ul>
        </div>

        {/* ── Zielgruppen ─────────────────────── */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">
            Für wen eignet sich der Kostenrechner?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-border/60 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">Architektur & Planung</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kosteneinschätzung für maßstabsgetreue{" "}
                <Link to="/architekturmodelle" className="text-primary hover:underline">
                  Architekturmodelle
                </Link>{" "}
                und städtebauliche Modelle. Typische Materialien: PLA oder PETG.
              </p>
            </div>
            <div className="border border-border/60 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">Messe & Ausstellung</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Budgetplanung für{" "}
                <Link to="/messemodelle" className="text-primary hover:underline">
                  Messemodelle
                </Link>{" "}
                und Standexponate. Für den Außenbereich empfehlen wir ASA oder PETG.
              </p>
            </div>
            <div className="border border-border/60 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">Design & Produktentwicklung</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Richtpreise für haptische Designstudien und Formentwürfe. PA6-CF für
                Premium-Optik, TPU für flexible Modelle.
              </p>
            </div>
            <div className="border border-border/60 rounded-xl p-5">
              <h4 className="font-semibold text-foreground mb-2">Modellbau & Lehre</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transparente Preisübersicht für Lehr- und Schulungsmodelle, Anschauungsobjekte
                für Unterricht und Präsentationen.
              </p>
            </div>
          </div>
        </div>

        {/* ── Regionales Vertrauen ────────────── */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-4">
            3D-Druck aus Oberösterreich – persönlich, regional, verlässlich
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir drucken in Gunskirchen (Bezirk Wels-Land) mit österreichischem Filament und
            liefern in ganz Österreich. Der Standort erlaubt kurze Wege für persönliche Abholung
            und direkte Beratung vor Ort. Für Kunden in{" "}
            <Link to="/3d-druck-wien" className="text-primary hover:underline">Wien</Link>,{" "}
            <Link to="/3d-druck-linz" className="text-primary hover:underline">Linz</Link>,{" "}
            <Link to="/3d-druck-graz" className="text-primary hover:underline">Graz</Link>,{" "}
            <Link to="/3d-druck-salzburg" className="text-primary hover:underline">Salzburg</Link>{" "}
            und{" "}
            <Link to="/3d-druck-innsbruck" className="text-primary hover:underline">Innsbruck</Link>{" "}
            versenden wir versichert per Post.
          </p>
        </div>

        {/* ── Abgrenzung ─────────────────────── */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
          <h4 className="text-lg font-bold text-foreground mb-3">
            Was wir nicht fertigen
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Wir sind spezialisiert auf <strong className="text-foreground">Anschauungsmodelle,
            Designstudien und Präsentationsobjekte</strong>. Anfragen für Funktionsteile,
            technische Bauteile, Gehäuse, Ersatzteile oder industrielle Serienfertigung können wir
            nicht bearbeiten. Wenn Ihr Modell in unseren Leistungsbereich fällt, erhalten Sie
            innerhalb von 6 Stunden ein individuelles Angebot. Wenn nicht, sagen wir Ihnen das
            ehrlich – und empfehlen Ihnen ggf. einen passenden Anbieter.
          </p>
        </div>

        {/* ── Schluss-CTA ────────────────────── */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          Nutzen Sie unseren Richtpreis-Rechner oben für eine erste Einschätzung.
          Haben Sie Fragen oder ein komplexeres Projekt? Dann{" "}
          <Link to="/kontakt" className="text-primary font-medium hover:underline">
            kontaktieren Sie uns direkt
          </Link>{" "}
          – wir beraten Sie persönlich und unverbindlich.
        </p>

      </article>
    </div>
  </section>
);

export default SEOContentSection;
