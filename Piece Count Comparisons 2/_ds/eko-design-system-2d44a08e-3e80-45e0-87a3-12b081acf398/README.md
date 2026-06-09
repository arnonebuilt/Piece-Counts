# eko Design System

> *We're building the digital foundation of commerce, one product at a time.*

This is the design system for **eko** — the company that captures and transforms real-world products into structured, interactive data. It powers richer shopping experiences today and enables the next generation of AI-driven commerce.

Use this system to generate on-brand interfaces, slides, mocks, and production pages for eko.com and related surfaces.

---

## Sources

- **Primary (canonical):** **eko Brand Book** — the official 34-page Style Guide dated **March 2026**. Mounted as the `eko-Brand-Book` page in the project's Figma virtual filesystem. Every token and copy rule below is sourced from this document unless stated otherwise.
- **Secondary (observed):** the "Eko.com Library — External" Figma file (homepage, navigation, pill labels, iconography, assets) — used to supply radii, shadows, spacing, component structure, and icon geometry that the Brand Book doesn't formalise.
- A small "Homepage voice samples" appendix at the bottom of this document captures marketing copy observed on the live site — not brand-mandated, but useful reference.

---

## Index (what's in this folder)

```
README.md                  ← you are here
SKILL.md                   ← cross-compatible Agent Skill definition
colors_and_type.css        ← CSS variables: 4-color palette + typography scale
assets/                    ← logos, icons, hero imagery, product textures
  logo-eko.svg             ← primary eko wordmark (currentColor)
  icons/                   ← UI icon set (arrow-left/right, view, focus, scan360, download, zoom-in)
  eko-file-3d-hero.png     ← 3D "Eko File" hero artwork
  eko-swirl-hero.png       ← brand swirl texture (hero backgrounds)
  nav-preview-1.png, nav-preview-2.png ← product imagery
preview/                   ← design system cards (typography, colors, radii, components, …)
ui_kits/
  website/                 ← marketing site UI kit (nav, hero, modules, press, footer)
landing_intl/              ← international landing page prototype (2 variants)
```

---

# 01 · Positioning

### Mission Statement

**We're building the digital foundation of commerce, one product at a time.**

eko captures and transforms real-world products into structured, interactive data. We power richer shopping experiences today and enable the next generation of AI-driven commerce.

### Value Proposition

eko transforms product data into interactive, AI-powered experiences that **increase engagement, build trust, and drive conversion.**

---

# 02 · Messaging

### If eko were a person

> eko is the cool uncle everyone wants to sit next to at dinner. He loves art and great storytelling, but he is also a tech geek who reads about AI and knows a bit of code. He's always on top of retail and tech trends, sometimes even shaping them.
>
> Above all, he believes the future of everything — including shopping — should be more interactive, creative, and a lot more fun.

### Tone & Voice

Our copy is **self-assertive yet collegial**. We call out some of the biggest e-commerce challenges and point out nonsense, and then show how eko helps solve those problems. We avoid retail jargon, and keep our language conversational and consumer-friendly.

Spell out acronyms your mother wouldn't recognize, define technology that comes across as heady, and choose shorter, pithier sentences and subtitles over text-heavy technical descriptions.

### Tone & Voice Summary — the three pillars

| # | Pillar | What it means |
|---|---|---|
| **01** | **Smart but Human** | We come across intelligent without sounding corporate or robotic. We explain complex technology in a way that feels natural and conversational. |
| **02** | **Curious and Confident** | We talk about the future with excitement and curiosity. We know what we're doing, so we don't need hype. Our tone is calm, assured, and slightly playful rather than salesy. |
| **03** | **A Little Bold** | We're not afraid to challenge boring e-commerce norms. A little edge is good as long as it stays clever, specific, and respectful. |

**Do / Don't examples:**

- ✅ "AI can turn a product page into an experience." · ❌ "Our AI-powered platform leverages cutting-edge technology to optimize digital commerce ecosystems."
- ✅ "Interactive media is transforming e-commerce for the better." · ❌ "The ultimate best-in-class next generation solution."
- ✅ "Static product pages belong in the trash." · ❌ "Many brands are doing everything wrong."

### Commonly used terms (copy rules)

- **eko, eko file** — always lowercase, even when beginning a sentence. Make sure "eko file" is always on the same line and not broken up.
- **E-commerce** — include the hyphen.
- **%** — use the symbol; don't spell out "percent".
- **Oxford comma** — use it.
- **AI** — no need to spell out "artificial intelligence".
- **Real Thing** — capitalize when referring to the products/items eko captures.
- **eko solutions** — capitalize solution names: *Smart Gallery / Galleries*, *Visual Response*.
- **On webpages** — headlines aren't capitalized and don't use periods. Subheadings do use punctuation.

---

# 03 · Logos

The primary eko wordmark is a single path, drawn in `currentColor`, `39.75 × 18` at native size. It sits on the left of every nav cluster and on brand covers.

- **Clear space:** the wordmark's own cap-height on every side.
- **Minimum size:** 24 px on-screen, 12 mm in print.
- **Placement:** top-left of pages, centre of brand covers; never rotated, never stretched, never outlined.
- **On color:** always pure `#111` on light, `#FFFFFF` on dark or on Eko Purple.

Asset: `assets/logo-eko.svg` (currentColor).

---

# 04 · Typography

**Two brand faces. No third.**

### Display serif — **Season Mix**

Used at every heading scale from 28 px up to 100 px. Regular is the default; Semibold is reserved for the Accent scale (small display bits that need extra weight). Tight tracking (`-1%`), tight line-height (100%). Season Mix is warm, humanist, confidently proportioned.

### Text sans — **Gilroy**

Used for all body, CTAs, eyebrows, and UI. Medium for body, Semibold for CTA, Bold for heavy emphasis. Tracking `-2%` on body; 120% line-height.

### Scale — Desktop (canonical)

| Token | Family / Weight | Size | Line | Tracking |
|---|---|---|---|---|
| Display | Season Mix Regular | 100 px | 100% | -1% |
| H1 | Season Mix Regular | 60 px | 100% | -1% |
| H2 | Season Mix Regular | 44 px | 100% | -1% |
| Accent 1 | Season Mix Semibold | 44 px | 100% | -1% |
| Accent 2 | Season Mix Semibold | 28 px | 100% | -1% |
| Body 1 | Gilroy Medium | 28 px | 120% | -2% |
| Body 2 | Gilroy Medium | 20 px | 120% | -2% |
| Body 3 | Gilroy Medium | 16 px | 120% | -1% |
| CTA | Gilroy Semibold | 20 px | 100% | -2% |

### Scale — Mobile

Display 60 · H1 40 · H2 28 · Accent 1 28 · Accent 2 20 · Body 1 20 · Body 2 16 · Body 3 14 (lh 110%) · CTA 16.

### Licensing

Season Mix and Gilroy are licensed families. This kit ships with the real `.woff2`/`.otf`/`.ttf` files in `fonts/`. If you're shipping to a new surface, verify the license coverage includes that surface.

---

# 05 · Color

**Four colors. That's it.**

| Swatch | Name | Hex | Role |
|---|---|---|---|
| 🟣 | **Eko Purple** | `#6B53FF` | Primary brand. Used as a single full-bleed block, a large pill label, or an accent on an otherwise neutral composition. Not as a gradient. |
| ⚫ | **Natural Black** | `#111111` | Primary text on light. Dark surface fill. Nav chrome. |
| ⚪ | **Pure White** | `#FFFFFF` | Primary page surface. Text on dark or on Eko Purple. |
| ◻️ | **Neutral Gray** | `#EBEBEB` | Hairline dividers, overlay chrome, subtle surface fills. |

**Don't:**
- ❌ Gradients between the brand colors (no purple-to-blue, no purple-to-pink).
- ❌ Soft pastel palettes.
- ❌ Rainbow accents.
- ❌ Semantic color (green for success, red for error). eko products communicate status through copy, not color.

**Derived alpha values** — the only colors that appear beyond the canonical four are alpha versions of `#111111` (for secondary/tertiary text: `0.72`, `0.52`, `0.32`) and `#FFFFFF` (for on-dark text: `0.80`, `0.60`). These are not new brand colors; they're transparent overlays of the canonical two.

---

# 06 · Icons

eko's icon system is two-tier:

1. **Brand Icons** — stroke-first, squared-off geometric set. Arrows (Left/Right/Up/Down), Check, View (eye), Scan-360, Focus (crosshair), Zoom-in, Download, Close. 360×360 viewBox, stroke ~30.
2. **Website Icons** — slightly lighter, still stroke-based, with a few filled shapes. Editorial context.

**Rules:**
- No icon font. No Lucide / Heroicons fallback — the eko set is bespoke.
- `currentColor` on every icon so it picks up `color:` from the parent.
- Uniform stroke weight across the set; match it when extending.
- **No emoji** as UI. **No unicode glyphs** as iconography.
- When an icon is missing, use a grey placeholder (same size, same radius) and flag it. Don't hand-roll a new SVG.

Icons shipped in `assets/icons/`: `arrow-left.svg`, `arrow-right.svg`, `view.svg`, `focus.svg`, `zoom-in.svg`, `scan360.svg`, `download.svg`, plus brand glyphs at `assets/icon-brain.svg`, `assets/icon-stroke.svg`, `assets/icon-close.svg`.

---

# 07 · Elements (working system — not Brand-Book-formalised)

The Brand Book is intentionally austere about elements; the following come from observed eko.com usage and keep surfaces consistent when applying the brand to products.

### Spacing

Multiples of 4: `4, 8, 10, 12, 16, 20, 24, 28, 32, 40, 50, 60, 80, 100, 160`. `100 px` is the desktop side gutter. `50 px` is the cadence between modules. Mobile uses a `20 px` gutter, `40 px` between modules.

### Grid

- Desktop: 12 columns, 1440 px wide, 40 px side padding, 10 px gutter.
- Mobile: 4 columns, 393 px wide, 20 px side padding.

### Radii

`4 / 6 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 70` px plus a signature nav-tuck (`0 0 50 px 50 px`). `70 px` is the pill-CTA radius. `40 px` is for hero swatches and media.

### Shadows / elevation

- **Nav chrome:** `0 0 3 px 0 rgba(17,17,17,0.30)` + `backdrop-filter: blur(12 px)`.
- **Card default:** `0 2 px 8 px rgba(17,17,17,0.08)`.
- **Card hover:** `0 8 px 24 px rgba(17,17,17,0.10)`.
- **No inset shadows. No purple glow. No coloured drop shadows.** The Brand Book is colour-disciplined; shadows are neutral.

### Borders

- Dividers are `1 px` hairlines in `#EBEBEB` (Neutral Gray).
- On dark, `1 px rgba(255,255,255,0.12)`.
- Cards are fill-only (`#EBEBEB` or `#FFFFFF`); no border.

### Motion

- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` for entrances, `cubic-bezier(0.4, 0, 0.2, 1)` elsewhere.
- Duration: 180 ms (micro) to 400 ms (module transitions).
- **No bounce. No springy overshoot.** Motion feels cinematic, not playful.
- Hover: opacity dip (0.9) or slight darken; never scale-up.
- Press: `scale(0.98)` and a colour deepen.

### Imagery

Real product photography in warm, lightly-filmic tones. Two signature textures: the painterly "Web Swirl" (atmospheric sweep) and the 3D "Eko File" badge (purple folder-glyph with ring reflections). Both bitmap, both hand-rendered-feeling. Full-bleed stills and motion clips are preferred for hero modules.

**Don't:** hand-drawn SVG illustrations, abstract 3D renders beyond the Eko File itself, icon-grid patterns.

### Transparency

Used only on the floating nav chrome (`backdrop-filter: blur(12 px)` + white at 90% opacity), on chips over imagery (`rgba(17,17,17,0.60)`), and on on-dark text overlays. Never on card surfaces.

---

# 08 · Brand Executions

*Omitted intentionally* — executions are built on-demand when the brand is applied to a real artifact. See `ui_kits/website/` for a full execution of eko.com's marketing homepage, and `landing_intl/` for an international landing-page prototype.

---

## Appendix — Homepage voice samples (observed, not Brand-Book-mandated)

Marketing copy observed on the live homepage. Use as tonal reference; the Brand Book's rules above take precedence whenever there's a conflict.

- "Building the future of commerce, item by item"
- "Technologists, marketers, product obsessives and filmmakers building the data layer for next-generation commerce."
- "Hand-captured, verified product visuals and data, because shoppers deserve The Real Thing."
- "Engineered for e-commerce today, optimized for the agentic future."
- Eyebrow copy pattern — short two- or three-word phrases, e.g. *Our Purpose*, *What We Enable*, *Meet the investors*, *eko in the press*.
- CTA copy pattern — plain, declarative, title-cased: *Contact Us*, *Solutions*, *Resources*, *About Us*.

---

## Caveats / known gaps

- The Brand Book has a full **Brand Executions** section (covers, posters, deck templates, social). Not recreated here — will be built on-demand.
- The **Icons** section of the Brand Book shows a broader icon family than what's exported into `assets/icons/`. Nine additional glyphs live in the Figma Website Icons frame and were not extracted. Flag if needed.
- Large motion assets (mp4/mov — Web Hero, Camera Arc, Ending) exist in the observed Figma file but aren't shipped here; only still PNGs.
- The Brand Book does **not** formalise a radius scale, a spacing scale, or a shadow system. The tokens in § 07 are the internal working system observed on eko.com — treat them as consistent defaults, not Brand Book mandates.
