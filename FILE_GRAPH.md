# File Graph

Semantische Uebersicht des Repositories fuer schnelle Orientierung, Source-of-Truth-Findung und kleinere, zielgerichtete Aenderungen.

```mermaid
flowchart TB
  Root["Repository: nimmermaer.github.io"]

  subgraph Site["Site-Ebene"]
    Config["_config.yml\nSource of truth: Site-Metadaten, Theme, Kontakt-Token"]
    Home["index.md\nSource of truth: One-Pager / Vita"]
    Vita["vita.md\nAlternative Vita-Seite"]
    About["about.markdown\nInfo-Seite"]
    Readme["README.md\nDokumentation / Pflegehinweise"]
    Robots["robots.txt\nCrawler-Block"]
    Page404["404.html\nFehlerseite"]
  end

  subgraph Layout["Layout- und Hook-Ebene"]
    Includes["_includes/"]
    Header["header.html\nHeader ohne Navigation"]
    Head["custom-head.html\nNo-Index Meta + Script"]
    Graph["FILE_GRAPH.md\nSchnelle Repo-Orientierung"]
  end

  subgraph Behavior["Verhalten / Interaktion"]
    Js["assets/js/mailto-obfuscation.js\nTYPO3-artige Mailto-Entschluesselung"]
    Share["index.md\nWeb Share API"]
    Contact["index.md\nObfuskierter Kontaktlink"]
  end

  subgraph Ops["Automation / Pflege"]
    Workflow[".github/workflows/static.yml\nStatic-Site-Workflow"]
    Agents["AGENTS.md\nWorkflow-Regeln fuer Aenderungen"]
    Posts["_posts/\nOptionale Blogbeitraege"]
  end

  Root -->|konfiguriert| Config
  Root -->|stellt bereit| Home
  Root -->|stellt bereit| Vita
  Root -->|stellt bereit| About
  Root -->|dokumentiert| Readme
  Root -->|blockiert| Robots
  Root -->|liefert| Page404

  Config -->|steuert| Home
  Config -->|steuert| Head
  Config -->|steuert| Js
  Config -->|steuert| Contact

  Includes -->|enthaelt| Header
  Includes -->|enthaelt| Head
  Graph -->|beschreibt| Root
  Graph -->|ordnet ein| Config
  Graph -->|ordnet ein| Home
  Graph -->|ordnet ein| Js

  Head -->|laedt| Js
  Head -->|setzt| Robots
  Header -->|entfernt| Workflow

  Home -->|nutzt| Js
  Home -->|nutzt| Share
  Home -->|enthaelt| Contact
  Home -->|verweist auf| Vita

  Agents -->|regelt| Workflow
  Workflow -->|deployt| Root
  Posts -->|optional| Home
```

## So liest man den Graphen

- Knoten mit `Source of truth` sind die primären Stellen fuer Aenderungen.
- Pfeile mit Verben zeigen die Beziehung, zum Beispiel `steuert`, `laedt`, `nutzt` oder `regelt`.
- Wenn du etwas aendern willst, startest du bei der Datei mit der hoechsten fachlichen Verantwortung.

## Typische Aenderungsgruppen

- Inhalt der Vita: [index.md](index.md) und bei Bedarf [vita.md](vita.md)
- Kontaktverhalten: [_config.yml](_config.yml), [index.md](index.md) und [assets/js/mailto-obfuscation.js](assets/js/mailto-obfuscation.js)
- Kopfbereich und Suchmaschinenverhalten: [_includes/custom-head.html](_includes/custom-head.html) und [robots.txt](robots.txt)
- Arbeitsregeln und Orientierung: [AGENTS.md](AGENTS.md) und [FILE_GRAPH.md](FILE_GRAPH.md)
