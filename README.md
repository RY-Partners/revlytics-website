# Revlytics Website

Marketing/landing site for [Revlytics](https://github.com/RY-Partners/Revlytics), an AI-native sales workspace for Japan's mid-market and SMB companies.

**Status: structural skeleton with draft/placeholder content — not launch-ready.** See `CONTENT-GUIDE.md` before editing copy; it maps every section back to its source in the main product repo's `docs/business design/` and flags what's real material vs. placeholder.

## Pages

- `index.html` — home page
- `pricing.html` — plans, add-ons, FAQ
- `about.html` — mission, moat, roadmap, founders
- `contact.html` — trial/demo request form
- `blog.html` — post index (placeholder titles)

## Stack

Plain HTML/CSS/JS, no build step or dependencies.

- `assets/css/site.css` — shared stylesheet
- `assets/js/site.js` — mobile nav, persona tabs, use-case filter, FAQ accordion

## Local preview

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Design

Color palette (dark navy `#13264a` + gold `#ffb606`/`#f5b71f`) and section layout are modeled on the `home-8` demo of the ArrowTheme "Cryptcio" template, re-populated with Revlytics-specific content. See `CONTENT-GUIDE.md` for the full section-by-section rationale.
