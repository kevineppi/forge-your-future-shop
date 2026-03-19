
## Analyse des aktuellen Zustands

Die Hauptseite (`Index.tsx`) hat bereits viele Sektionen: Hero, Services, Advantages, ReferencesTeaser, Technology/Process, FAQ, Materials, Quality, About, Google Reviews, TrustBadges, Contact.

Was fehlt für ~1.500 Wörter mehr Content und bessere SEO-Wirkung:

1. **Zielgruppen-Hub** – Eine klare Übersicht der 4 Kernzielgruppen (Architekten, Messeaussteller, Künstler, Firmenkunden) mit direkten Links, als "Für wen ist ekdruck?" Sektion
2. **Regionale Präsenz / Reichweite** – Kompakte Section mit Österreich-Karten-ähnlicher Darstellung: Oberösterreich, Wien, Graz, Salzburg, etc. + Link zu den Regionseiten → stärkt Local SEO massiv
3. **Nachhaltigkeit deep-dive** – Ein eigener Content-Block (ca. 200 Wörter) zum Thema österreichisches Filament, Ökostrom, CO₂-Fußabdruck — differenziert von Mitbewerbern, E-E-A-T relevant
4. **"Warum 3D-Druck statt traditionellem Modellbau?"** – Vergleichstabelle oder Content-Abschnitt mit 3–4 konkreten Vorteilen (Kosten, Zeit, Gewicht, Reproduzierbarkeit), ca. 300 Wörter, stark keyword-relevant
5. **Branchen-Anwendungen** – Kompakter Abschnitt der zeigt: Architektur, Messe, Industrie, Kunst – je mit 2–3 Sätzen Fließtext (nicht nur Bullet-Points wie jetzt), ca. 400 Wörter

---

## Plan: Hauptseite mit ~1.500 Wörtern erweitern

### 3 neue Sektionen in `src/pages/Index.tsx`

**Platzierung:** Nach `<ReferencesTeaser />` und vor der Technology-Section

---

### Sektion A – "Für wen ist ekdruck?"  (Zielgruppen-Hub)
- 4 Karten: Architekten & Planer, Messeaussteller, Künstler & Kreative, Firmenkunden
- Jede Karte: Icon + Headline (H3) + 3–4 Zeilen Fließtext + CTA-Link zur jeweiligen Seite
- Content-Volumen: ~350 Wörter
- SEO-Effekt: Interne Verlinkung zu `/architekturmodelle`, `/messemodelle`, `/kunstobjekte`, `/firmenkunden`

**Platzierung:** Nach `<About />` und vor `<GoogleReviewsSection />`

---

### Sektion B – "Warum 3D-Druck?" (Vergleich vs. traditionell)
- Vergleichstabelle: 3D-Druck vs. Traditioneller Modellbau (5 Kriterien: Kosten, Lieferzeit, Gewicht, Wiederholbarkeit, Komplexität)
- Darunter: 2 Absätze Fließtext (~200 Wörter) die den Kontext erklären
- Link zu `/ratgeber/verfahrens-vergleich`
- Content-Volumen: ~350 Wörter
- SEO-Effekt: Zielt auf Suchanfragen wie "3D-Druck vs Modellbauer", "3D-Druck Messemodell Kosten"

**Platzierung:** Nach der Quality-Section, vor `<About />`

---

### Sektion C – "Regionaler Partner für ganz Österreich & Deutschland"
- Headline + 1 Absatz Fließtext (~150 Wörter) über die bundesweite Lieferung
- 2 Spalten: Österreich (Bundesländer als Links) + Deutschland (Städte als Links)
- Fließtext-Absatz über Gunskirchen/OÖ als Standort
- Content-Volumen: ~400 Wörter
- SEO-Effekt: Interne Verlinkung zu allen Regionsseiten, stärkt deren PageRank

**Platzierung:** Kurz vor `<Contact />`, nach TrustBadges

---

### Technische Umsetzung

- Alle 3 Sektionen direkt inline in `Index.tsx` einbauen (keine neuen Dateien nötig — Seite ist bereits groß aber konsistent)
- Vorhandene UI-Komponenten (`Card`, `Button`, Lucide Icons) verwenden
- Neuen Fließtext auf Deutsch, SEO-optimiert mit natürlicher Keyword-Dichte
- Interne Links zu allen relevanten Unterseiten

---

### Gesamteffekt
- +~1.100–1.500 Wörter Unique Content
- Stärkt E-E-A-T (Expertise, Regionalität, Nachhaltigkeit)
- Erhöht interne Verlinkungstiefe zu 10+ Unterseiten
- Neue Suchanfragen abdecken: Zielgruppen-Keywords, Vergleichs-Keywords, Regional-Keywords
