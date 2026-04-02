const Impressum = () => {
  if (typeof document !== "undefined") {
    document.title = "Impressum | ekdruck e.U.";
  }

  return (
    <main className="min-h-screen bg-background text-foreground px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold">Impressum</h1>
          <p className="text-muted-foreground">Einfache rechtliche Anbieterkennzeichnung von ekdruck e.U.</p>
        </header>

        <section className="space-y-2">
          <p className="font-semibold">ekdruck e.U.</p>
          <p>Rechtsform: eingetragenes Einzelunternehmen</p>
          <p>Firmenbuchnummer: FN639499s</p>
          <p>Firmenbuchgericht: Landesgericht Wels</p>
          <p>Maria-Theresia-Straße 12</p>
          <p>4600 Wels</p>
          <p>
            E-Mail:{" "}
            <a href="mailto:office@ek-druck.at" className="text-primary underline underline-offset-4">
              office@ek-druck.at
            </a>
          </p>
          <p>
            Telefon:{" "}
            <a href="tel:+436765517197" className="text-primary underline underline-offset-4">
              +43 676 5517197
            </a>
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Offenlegung gemäß § 25 Mediengesetz</h2>
          <p>Für den Inhalt verantwortlich: Kevin Eppensteiner</p>
          <p>Negrellistraße 15</p>
          <p>4623 Gunskirchen</p>
          <p>Österreich</p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Weitere Angaben</h2>
          <p>Mitglied der Wirtschaftskammer Oberösterreich</p>
          <p>Kleinunternehmerregelung nach § 6 Abs. 1 Z 27 UStG</p>
          <p>
            Gewerbeordnung:{" "}
            <a
              href="https://www.ris.bka.gv.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4"
            >
              ris.bka.gv.at
            </a>
          </p>
          <p>
            Gewerbetätigkeit: Erzeugung von Architekturmodellen sowie Modellen für Gebrauchsgegenstände aller Art,
            sofern diese lediglich Anschauungszwecken dienen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Haftungsausschluss</h2>
          <p>Alle Angaben ohne Gewähr.</p>
        </section>

        <a href="/" className="inline-block text-primary underline underline-offset-4">
          Zur Startseite
        </a>
      </div>
    </main>
  );
};

export default Impressum;
