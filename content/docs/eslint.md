---
title: Hoe ESLint instellen in een nieuw project?
description: Eslint instellen in een nieuw Nuxt 3 project.
---

#### {{ title }}

Eerst de package installeren:
`npx nuxi module add eslint`

Daarna de onderstaande ESLint settings kopiëren naar de desbetreffende bestanden.

`settings.json`

::code-block
```js
{
    "prettier.enable": false,
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit"
    },

    "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "format/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],
}
```
::

`eslint.config.mjs`

::code-block
```js
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
	{
		rules: {
			"vue/multi-word-component-names": "off" },
	},
);
```
::

`nuxt.config.ts`

::code-block
```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/fonts",
		"@nuxt/image",
		"@nuxtjs/tailwindcss",
		"@nuxt/eslint",
	],
	devtools: { enabled: true },
	compatibilityDate: "2025-07-15",
	eslint: {
		config: {
			stylistic: {
				semi: true,
				quotes: "double",
				commaDangle: "always-multiline",
				indent: "tab",
			},
		},
	},
	fonts: {
		families: [
			{
				name: "Geist",
				provider: "google",
				weights: [400, 500, 600, 700],
			},
		],
	},
});
```
::

In `package.json` onder "postinstall"

::code-block
```json
"lint": "eslint .",
"lint:fix": "eslint . --fix"
```
::

Finito.
