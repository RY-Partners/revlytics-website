# Revlytics Website — Content Brief

This is a **structural skeleton**, not a finished site. Layout and section
flow are modeled on `https://cryptcio.arrowtheme.com/home-8/` (a consulting/
advisory template); every section's copy is a **draft or placeholder** pulled
from `docs/business design/00-06`, so a content writer can see exactly what
each block is *for* before rewriting the words.

Open `index.html` in a browser and read the HTML comments above each
`<section>` — every one names its **SOURCE** doc, its **STATUS**
(`draft` = real material, safe to polish / `PLACEHOLDER` = do not ship
as-is), and its **GOAL** (what the reader should think/feel). This file is
the same information laid out as a table, for planning purposes.

## Pages

| Page | Template equivalent | Purpose |
|---|---|---|
| `index.html` | Home-8 full one-pager | Primary landing page, all core sections |
| `pricing.html` | "ICO Plan" page | Plans, add-ons, FAQ |
| `about.html` | "About Us" + "Our Team" + "Our History" | Mission, moat, roadmap, founders |
| `contact.html` | "Contact" | Trial/demo request form |
| `blog.html` | "Blog" | Post index (all posts currently placeholder) |

## Section-by-section status (index.html)

| # | Section | Source doc | Status | Notes |
|---|---|---|---|---|
| 1 | Top bar | — | placeholder | Real phone/email needed |
| 2 | Hero | `01_PR＆FAQ.md` press release | draft | Headline leads with outcome, not "AI" |
| 3 | Proof strip (marquee) | — | **placeholder** | Needs real pilot metrics — do not launch with fabricated numbers |
| 4 | Problem ("About" equiv.) | `00_Problem Definition.md` §2 | draft | 3 root causes, safe to polish |
| 5 | Statement banner | `01_PR＆FAQ.md` Internal FAQ Q2 | draft | The one-line positioning statement |
| 6 | Who It's For (persona tabs) | `03_Business Design.md` §1 | draft | 3 personas: rep / manager / exec |
| 7 | How It Works | `04_Product Requirements & Architecture.md` §3 | draft | Literal To-Be flow from the PRD, condensed to 3 steps |
| 8 | Features (4-card) | `04_Product Requirements & Architecture.md` §5 (Must) | draft | Confirm these 4 are still the best demo once Phase 1 build progresses |
| 9 | Built For Teams Like Yours | `02_Market Intelligence.md` §8, `01_PR＆FAQ.md` Q5 | **placeholder** | Illustrative scenarios only — replace with real case studies after first pilots |
| 10 | Team (founders) | `01_PR＆FAQ.md` byline | placeholder bios | Names are real (Hiroki Yamaguchi, Mashiur Rahman); bios/photos are not |
| 11 | CTA banner | — | draft | Structural, no source doc needed |
| 12 | Events/Webinars | `03_Business Design.md` §3 (セミナー・ウェビナー channel) | **placeholder** | No events scheduled — remove section entirely if none are planned before launch |
| 13 | Testimonials | — | **placeholder** | Pre-PMF, zero real customers per Financial Model doc — do not fabricate quotes |
| 14 | Blog preview | `03_Business Design.md` §3 (content angles) | placeholder titles | None written yet |
| 15 | Integrations/Partners logos | `04_Product Requirements & Architecture.md` §8 | draft names, placeholder logo assets | |
| 16 | Newsletter | — | draft | Form not wired to a backend |
| 17 | Footer | — | draft | Legal pages (Privacy/Terms) don't exist yet |

## Known tension the writer should know about

**Pricing (`pricing.html`) currently ships an early planning-stage
¥150,000–400,000/month figure as a placeholder.** This has not been
validated against the market and should not be treated as final —
flag to founders/finance before publishing real pricing copy.

## Tone

Pull the voice directly from the product positioning doc and the PR&FAQ doc:
- Lead with the outcome for the rep's actual Tuesday morning, not the AI.
- Say plainly that a human always makes the final call — this is a feature,
  not a hedge.
- Avoid claiming category exclusivity ("nobody else does this") — this
  general style of positioning is used elsewhere in the market too. Frame
  the edge as *habit + data compounding over time for an underserved SMB
  segment*, not as an unclaimed concept.

## Assets still needed before this can go live

- [ ] Real product screenshots (Home screen, chat panel, deal list) — currently `[PLACEHOLDER]` boxes in `.hero-visual`
- [ ] Founder headshots + real bios + LinkedIn URLs
- [ ] Company logo / favicon (currently a CSS gradient square, `.brand-mark`)
- [ ] Real phone number, email, and office address
- [ ] Privacy Policy and Terms of Service pages (linked but not built)
- [ ] Decision on Events section: keep (populate with real dates) or remove
- [ ] First pilot customer(s) for real testimonials and case studies
- [ ] Finance sign-off on pricing figures

## Tech notes for whoever wires this up

- Plain HTML/CSS/JS, no build step — consistent with the existing product
  frontend's approach (`src/frontend/`).
- Shared stylesheet: `assets/css/site.css`. Palette and type are pulled
  directly from the reference template's own live CSS (fetched and
  inspected, not guessed): dark navy `--navy: #13264a` for header/hero/
  footer, gold/amber `--gold: #ffb606` + `--gold-accent: #f5b71f` for CTAs
  and highlights, Poppins typeface, near-black `--heading: #282828` on
  light sections. This intentionally does not match the product app's
  own light blue/Inter look (`src/frontend`) — the marketing site follows
  the template brief given for this task; reconcile the two brand systems
  later if that's desired.
- Shared script: `assets/js/site.js` — mobile nav, persona tabs, use-case
  filter, FAQ accordion. Forms currently just `alert()` on submit
  (`data-placeholder-form` attribute) — wire to a real endpoint before launch.
- No header/footer templating — each page repeats the markup. Fine for a
  handful of static pages; revisit if the page count grows.
