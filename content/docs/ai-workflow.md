---
title: AI Workflow voor front-end ontwikkeling
description: AI Workflow voor front-end ontwikkeling.
---

#### {{ title }}

Prompts die ik 1-op-1 kan gebruiken in OpenCode:

1. Vast systeem-prompt (eenmalig)

Dit zet ik aan het begin van je project of sessie:

::code-block
```text
Je bent mijn senior front-end mentor.
Je helpt mij met Nuxt 4, Vue 3, Tailwind CSS 4 en TypeScript.

Belangrijke regels:
- Bouw GEEN volledige componenten voor mij
- Schrijf GEEN kant-en-klare codebestanden
- Geef wel:
  - architectuuradvies
  - best practices
  - pseudo-code
  - korte losse snippets
  - gerichte vragen die mij laten nadenken
- Als ik iets vraag dat te generatief is, stel dan eerst vragen terug

Je doel is dat ik beter leer programmeren, niet dat ik sneller klaar ben.
```
::

2. Component plannen (voordat ik ga bouwen)

::code-block
```text
Ik wil een component maken voor [doel, bv. MarkdownContent].

Context:
- Nuxt 4
- TypeScript
- Tailwind 4
- Content komt uit markdown
- Layout lijkt op Nuxt/Next docs

Kun je:
1. Samen met mij bepalen welke verantwoordelijkheden dit component heeft
2. Benoemen welke data erin gaat en eruit komt
3. Mij vragen stellen als mijn plan nog te vaag is

Schrijf geen code, alleen structuur en denkstappen.
```
::

3. Tijdens het bouwen (check-moment)

::code-block
```text
Ik ben nu bezig met [wat je doet].

Mijn huidige aanpak:
- [stap 1]
- [stap 2]
- [stap 3]

Kun je checken:
- of dit logisch is
- of ik iets over het hoofd zie
- of dit past bij Nuxt/Vue best practices

Geen code schrijven.
```
::

4. Code review (nadat ik iets gebouwd heb of een begin gemaakt heb)

::code-block
```text
Ik heb een component geschreven.
Kun je deze reviewen als senior developer?

Focus op:
- leesbaarheid
- TypeScript gebruik
- Vue/Nuxt patronen
- schaalbaarheid

Geef:
- wat goed is
- wat beter kan
- waarom

Herschrijf mijn code NIET.
```
::

5. Feed-forward prompt (voor mijn volgende leerstap)

Deze gebruik ik 1× per week:

::code-block
```text
Op basis van onze gesprekken en code reviews:

1. Welke fouten maak ik vaak?
2. Welke concepten beheers ik redelijk?
3. Waar zou ik extra op moeten letten in Nuxt + TypeScript?
4. Wat is mijn eerstvolgende leerfocus?

Schrijf dit als feed-forward advies voor mijn verdere ontwikkeling.
```
::

###### De kern van deze AI workflow is dat ik zelf blijf nadenken en bouwen. AI is er om mij te begeleiden, niet om het werk uit handen te nemen.

**Creëren**
	•	Ik ontwerp én bouw zelf
	•	AI ondersteunt, maar produceert niet
	•	Ik maak bewuste technische keuzes

**Organiseren**
	•	Ik heb een gestructureerde workflow
	•	Ik plan AI-momenten
	•	Ik reflecteer en stuur bij

Dit is mijn AI-ondersteunde front-end ontwikkelworkflow!