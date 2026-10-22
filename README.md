# EduGo Learn – Landingpage

One-Page-Landingpage für eine KI-gestützte, adaptive Lernplattform für Berufsfachschulen und die Berufsbildung.

## Entwicklung

```bash
npm install
npm run dev     # Entwicklungsserver
npm run build   # TypeScript-Prüfung und Produktions-Build
npm run lint    # ESLint
```

## Struktur

- `src/components/` – Seitenbereiche und wiederverwendbare Bausteine (jeweils mit CSS Module)
- `src/data/content.ts` – Texte und Listen der Seite als typisierte Arrays
- `src/data/siteConfig.ts` – Produktname, Unternehmensdaten und rechtliche Links (Platzhalter)
- `src/types.ts` – gemeinsame TypeScript-Typen
- `src/index.css` – Design-Tokens, Basis-Styles, Buttons

## Offene Punkte

Alle Stellen, die vor einer Veröffentlichung ergänzt werden müssen, sind im Code mit
`TODO(company-data)` bzw. `TODO(api)` markiert.
