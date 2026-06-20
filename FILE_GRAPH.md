# File Graph

Kurzer Strukturueberblick fuer schnelle Orientierung im Repository.

```mermaid
graph TD
  Root["/workspaces/nimmermaer.github.io"]

  Root --> Config["_config.yml\nSite-Metadaten, Theme, Kontakt-Token"]
  Root --> Home["index.md\nOne-Pager / Vita"]
  Root --> Vita["vita.md\nAlternative Vita-Seite"]
  Root --> About["about.markdown\nInfo-Seite"]
  Root --> Readme["README.md\nProjekt- und Pflegehinweise"]
  Root --> Robots["robots.txt\nCrawling blockieren"]
  Root --> Page404["404.html\nFehlerseite"]

  Root --> Includes["_includes/"]
  Includes --> Header["header.html\nHeader ohne Navigation"]
  Includes --> Head["custom-head.html\nNo-Index Meta + Script"]

  Root --> Assets["assets/"]
  Assets --> Js["js/mailto-obfuscation.js\nTYPO3-artige Mailto-Entschluesselung"]

  Root --> Posts["_posts/\nOptionale Blogbeitraege"]
  Root --> Workflow[".github/workflows/static.yml\nStatic-Site-Workflow"]
```

## Kurz gelesen

- `index.md` ist die zentrale Seite.
- `AGENTS.md` definiert den bevorzugten Arbeits- und Commit-Workflow.
- `_includes/custom-head.html` und `assets/js/mailto-obfuscation.js` steuern No-Index und Kontakt-Obfuskation.
