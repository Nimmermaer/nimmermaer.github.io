# nimmermaer.github.io

Persoenliche Portfolio- und Vita-Website von Michael Blunck auf Basis von Jekyll.
Der aktuelle Aufbau ist als One-Pager ausgelegt: Die Startseite in `index.md` ist die zentrale Seite mit Profil, Berufserfahrung, Qualifikationen und Kontaktbereich.

## Projektbeschreibung

- Statische Website mit Jekyll fuer GitHub Pages
- Fokus auf Vita/Portfolio statt klassischem Blog
- Kontaktbereich auf der Startseite mit bot-erschwerter Darstellung von E-Mail/Telefon

## Aktuelles Jekyll-Theme

- Theme: `minima`
- Skin: `dark`
- Konfiguration in `_config.yml`

## Neue Informationen anlegen

### 1. Inhalte auf der Startseite ergaenzen

Die Hauptinhalte liegen in `index.md`.

- Profil, Erfahrung, Skills oder Qualifikationen: direkt in `index.md` ergaenzen
- Kontaktcodes (E-Mail/Telefon): in `_config.yml` ueber
	- `contact_email_codes`
	- `contact_phone_codes`

Hinweis: Die sichtbaren Kontaktlinks werden erst per Klick auf der Seite erzeugt.

### 2. Neue statische Seite erstellen

Wenn du z. B. eine eigene Seite fuer Projekte oder Impressum willst, lege eine neue Markdown-Datei im Projektroot an, z. B. `projekte.md`:

```md
---
layout: page
title: Projekte
permalink: /projekte/
---

## Meine Projekte
...
```

Wenn die Seite in die Navigation soll, trage sie in `_config.yml` unter `header_pages` ein.

### 3. Neuen Blogbeitrag anlegen (optional)

Auch wenn der Blog aktuell nicht im Fokus steht, kannst du weiterhin Posts anlegen unter `_posts/`.

Dateiname:

```text
YYYY-MM-DD-titel.markdown
```

Beispiel:

```md
---
layout: post
title: "Mein neuer Beitrag"
date: 2026-06-20
---

Inhalt...
```

## Lokale Entwicklung

```bash
bundle install
bundle exec jekyll serve
```

Danach ist die Seite lokal unter `http://localhost:4000` erreichbar.