# BlackEagle — AGENTS.md

## What this repo is

Static marketing website for the **BlackEagle** browser extension (Chrome/Edge).  
The extension *source code* is **not** in this repository.

## Layout

- `web/` — Website root (served as static files). Entrypoint: `web/index.html`.
- `blogtexts/` — Markdown sources for blog posts.
- `assets/` — Logo image.

## Blog workflow

1. Write post in `blogtexts/*.md`.
2. Create corresponding `web/blog/*.html` with same layout as other blog pages.
3. Add i18n keys to `web/i18n.js` (both `zh` and `en` sections).
4. Link from `web/blog/index.html` and optionally from `web/index.html` home blog section.

## i18n

- **Client-side only** — `web/i18n.js` reads `localStorage.getItem("beLang")` ("en" | "zh").
- Default is English.
- All user-visible text is in `i18n.js` dicts. Edit there, not in HTML content.
- HTML elements use `id` attributes matching i18n keys; `i18n.js` sets `textContent` on load.
- Language toggle button id: `lang-toggle`.

## Static site — no build step

No package.json, no bundler, no preprocessor. HTML, CSS (`web/styles.css`), and vanilla JS only.

## Contact / ownership

- Developer: **cuteeaglet** / **andersliuyang**
- Email: onebelief@gmail.com
- GitHub: https://github.com/andersliuyang/BlackEagle
- Live: https://blackeagle.cozyai.chat/

## Video embeds

Demovideos support dual-source (Bilibili for CN, YouTube for global).  
The `<iframe>` must have both `data-bili` and `data-youtube` attributes.  
JS in `index.html:418-474` auto-selects source based on language and YouTube reachability.
