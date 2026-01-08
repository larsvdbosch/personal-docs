---
title: Hoe lanceer je een website met netlify?
description: Website lanceren met netlify.
---

#### {{ title }}

1. Ga naar [Netlify](https://app.netlify.com/) → **Add new project** → **Import an existing project**.
2. Kies **GitHub** en geef toegang.
3. Selecteer je repository.
4. Stel de juiste **build commands** in en **publish directory** specifiek voor Nuxt.

`Build Command`

::code-block
```bash
npm run build
```
::

`Publish Directory`

::code-block
```bash
dist
```
::

5. Klik op **Deploy Site**.

Finito.