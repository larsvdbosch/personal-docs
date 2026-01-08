---
title: Nuxt project koppelen aan een github directory?
description: Nuxt project koppelen aan een github directory.
---

#### {{ title }}

Eerst git initialiseren in je project folder

::code-block
```bash
cd /path/to/your/nuxt-project

git init
```
::

Vervolgens `.gitignore.` aanmaken. *Een nuxt project doet dit al automatisch*

::code-block
```
/node_modules
/.nuxt
/dist
.env
.DS_Store
```
::

Alle files toevoegen en je eerste commit maken, die altijd "Initial Commit" heet.

::code-block
```bash
git add .
git commit -m "Initial commit"
```
::

Op github.com een nieuwe directory aanmaken en een naam geven. Vervolgens de HTTPS url kopierën.

Github remote toevoegen en alle content pushen naar de `main` branche

::code-block
```bash
git remote add origin <your-repo-URL>
git branch -M main   # optional, ensures your main branch is called 'main'
git push -u origin main
```
::

Done!