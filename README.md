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

## Kontaktformular auf Vercel

`POST /api/demo-requests` sendet Demo-Anfragen über Resend an `info@edugo-learn.ch`.
Absender ist `kontakt@edugo-learn.ch`; Antworten gehen an die Besucheradresse.
Die Absenderdomain muss in Resend verifiziert sein. Es ist kein zusätzliches Zoho-Postfach nötig.

In Vercel `RESEND_API_KEY` als Secret für Production und Preview hinterlegen.
Nach Änderungen an Umgebungsvariablen neu deployen. Niemals einen `VITE_`-Präfix
für diesen Schlüssel verwenden. `npm run dev` startet nur Vite; die API benötigt
Vercel (oder `vercel dev` mit lokal gesetztem Secret).

Prüfung: `node --test tests/demo-requests.test.js`, `npm run build`, `npm run lint`.
Die API prüft Eingaben, Herkunft und ein Honeypot-Feld. Das ist einfacher
Spam-Schutz, kein verteilter Rate-Limiter. Bei Missbrauch eine Rate-Limit-Regel
für `/api/demo-requests` in der Vercel Firewall konfigurieren.
Nach dem Deployment eine echte Formularanfrage senden und den Eingang in Zoho
sowie den Zustellstatus in Resend kontrollieren. Automatisierte Tests senden keine E-Mails.
