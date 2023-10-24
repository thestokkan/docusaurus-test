---
sidebar_position: 1
---

# Innledning til opplæringen

La oss oppdage **Docusaurus på mindre enn 5 minutter**.

## Komme i gang

Begynn med å **opprette et nytt nettsted**.

Eller **prøv Docusaurus umiddelbart** med **[docusaurus.new](https://docusaurus.new)**.

### Det du trenger

- [Node.js](https://nodejs.org/en/download/) versjon 16.14 eller nyere:
  - Når du installerer Node.js, anbefales det å sjekke alle avkrysningsbokser som er relatert til avhengigheter.

## Generer et nytt nettsted

Generer et nytt Docusaurus-nettsted ved å bruke **klassisk mal**.

Den klassiske malen blir automatisk lagt til i prosjektet ditt etter at du har kjørt kommandoen:

```bash
npm init docusaurus@latest my-website classic
```

Du kan skrive denne kommandoen i Kommandoprompt, Powershell, Terminal eller annen integrert terminal i kodeeditoren din.

Kommandoen installerer også alle nødvendige avhengigheter du trenger for å kjøre Docusaurus.

## Start nettstedet ditt

Kjør utviklingsserveren:

```bash
cd my-website
npm run start
```

Kommandoen `cd` endrer katalogen du jobber med. For å jobbe med det nylig opprettede Docusaurus-nettstedet ditt, må du navigere terminalen dit.

Kommandoen `npm run start` bygger nettstedet ditt lokalt og serverer det gjennom en utviklingsserver, klar for visning på http://localhost:3000/.

Åpne `docs/intro.md` (denne siden) og rediger noen linjer: nettstedet **lastes automatisk på nytt** og viser endringene dine.