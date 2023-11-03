---
title: Omstrukturere med dagens løsning
sidebar_position: 1
---

- Forbedre struktur/hierarki som understøtter det å enklere finne fram for brukere, enklere å fordele eierskap på team og enklere å lage en god bot.
  - Kontekst-avhengige menyer
- Slette crap og unødvendig innhold.
- Oversette alle sider som mangler oversettelse
- Fungerende søk som har nok plass til å vise fram resultatene. Kan gjøres uavhengig av 1.
- Bedre landingssider og forside
  - [Forslag ny forside](https://www.figma.com/proto/RuHbS1INvy5WNQCtGdepBi/Docs?type=design&node-id=110-12035&viewport=-754%2C-79%2C0.18&t=Vt3mGxobRJBvK0oB-0&scaling=min-zoom&starting-point-node-id=110%3A12035)
  - [Forslag landingsside for 'apps'](https://www.figma.com/proto/RuHbS1INvy5WNQCtGdepBi/Docs?type=design&node-id=109-11718&viewport=-754%2C-79%2C0.18&t=Vt3mGxobRJBvK0oB-0&scaling=min-zoom&starting-point-node-id=110%3A12035)
- Visuelt ansiktsløft, inkludert mer horisontal plass

### Vedvarende utfordinger
- Mangler robust versjonering (nødvendig for AI)
- Lite fleksibilitet mtp layout i Hugo
  - Landingssider må lages/vedlikeholdes separat
  - Støtter ikke dynamisk visning av komponenter
  - Tabs, dropdowns, etc. må lages med shortcodes
    - lite robust, problematisk med nøsting
    - Overskrifter fra shortcodes vises ikke i TOC
    - Klønete med mer avansert logikk
- Sider og menyelementer vises kun dersom de eksisterer for det valgte språket