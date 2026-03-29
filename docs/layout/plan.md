# Layout Migration Plan: design.html → TanStack Start

**Source:** `docs/homepage/design.html`
**Target:** TanStack Start (React 19, file-based routing, Tailwind CSS 4)

---

## 1. Design Analysis

The design file is a Hebrew RTL landing page for **"עדי"** — a law firm management and accounting SaaS product.

### Identified Sections

| Section | HTML Location | Notes |
|---|---|---|
| Navigation bar | `<nav class="fixed top-0 ...">` | Glass-morphism, fixed, logo + 6 module links + 2 CTA buttons |
| Hero | `<section class="pt-32 ...">` | 2-column grid: headline/CTA left, product screenshot right |
| Feature grid | `<section class="bg-surface-container-low ...">` | 3×3 grid of module cards with Material icons |
| Lead generation | `<section class="py-24 ...">` | 2-column: support ticket form + demo request form |
| Footer | `<footer class="bg-slate-50 ...">` | 4-column grid: brand/social, quick nav, support, contact |
| WhatsApp FAB | `<a class="fixed bottom-8 left-8 ...">` | Floating action button, fixed position |

### Structural Key Points

- **Language/Direction:** `lang="he"`, `dir="rtl"` — entire layout is RTL
- **Color Palette:** Navy/indigo (`#00003c` primary, `#000080` primary-container) — differs from current teal/green theme
- **Icons:** Google Material Symbols (font-based), not lucide-react
- **Fonts:** Heebo (Hebrew UI), Inter (Latin labels) — neither is currently loaded
- **Max-width:** `max-w-7xl` (1280px) — current project uses `min(1080px, ...)` via `.page-wrap`

---

## 2. Component Mapping

### Global Layout (rendered on every route via `__root.tsx`)

```
src/components/layout/
├── Header.tsx          ← replaces src/components/Header.tsx
└── Footer.tsx          ← replaces src/components/Footer.tsx

src/components/ui/
└── WhatsAppFab.tsx     ← new: floating WhatsApp button
```

**`Header.tsx`** (from `<nav class="fixed top-0 w-full z-50 glass-nav ...">`)
- Fixed position, `z-50`, glass-morphism background
- Logo: `<span>עדי</span>` styled `text-2xl font-black text-primary`
- Nav links (hidden until `xl`): 6 module names as `<Link>` components
- Right side: "צור קשר" text button + "בקשת דמו" primary CTA button

**`Footer.tsx`** (from `<footer class="bg-slate-50 ...">`)
- 4-column grid (`md:grid-cols-4`): Brand+social, Quick nav, Support links, Contact info
- Bottom bar: copyright text + terms/privacy links
- RTL social icon buttons (social, link, mail)

**`WhatsAppFab.tsx`** (from `<a class="fixed bottom-8 left-8 ...">`)
- Fixed position button with WhatsApp SVG
- Renders outside the main content flow, placed before `<Scripts />` in root

### Home Page Sections (rendered only on `/`)

The hero, feature grid, and lead gen sections belong in the **index route**, not the global layout. They are not repeated on other pages.

```
src/components/home/
├── HeroSection.tsx       ← from <section class="pt-32 pb-20 ...">
├── FeatureGrid.tsx       ← from <section class="bg-surface-container-low ...">
└── LeadGenSection.tsx    ← from <section class="py-24 ...">
```

**`HeroSection.tsx`**
- 2-column `lg:grid-cols-2` layout
- Left col: `<h1>` headline, description `<p>`, CTA button + phone number
- Right col: decorative blur blob + product screenshot in a card frame
- Screenshot: replace placeholder `<img>` with a local asset (`/public/dashboard-screenshot.png`) — source image to be provided

**`FeatureGrid.tsx`**
- Section heading + decorative divider bar
- 9 feature cards in `md:grid-cols-2 lg:grid-cols-3` grid
- Each card: icon container, title, description
- Icons via Material Symbols (`group`, `description`, `calendar_month`, `gavel`, `task_alt`, `schedule`, `receipt_long`, `calculate`, `account_balance`)

**`LeadGenSection.tsx`**
- 2-column `lg:grid-cols-2` layout; composes the two form sub-components below

**`SupportTicketForm.tsx`**
- Light background card with 3 fields
- On submit: opens `mailto:adi4clients@gmail.com` with subject + body pre-filled from form data

**`DemoRequestForm.tsx`**
- Primary-colored background card with 4 fields
- On submit: opens `mailto:adi4clients@gmail.com` with subject + body pre-filled from form data

---

## 3. Routing: `__root.tsx` Changes

The root shell component needs three categories of changes:

### 3a. HTML element attributes
```tsx
// Before
<html lang="en" suppressHydrationWarning>

// After
<html lang="he" dir="rtl" suppressHydrationWarning>
```

### 3b. `<head>` additions

Add to the `head()` return in `createRootRoute`:
```ts
links: [
  { rel: 'stylesheet', href: appCss },
  // Hebrew + Latin fonts from Google Fonts
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Heebo:wght@100..900&family=Inter:wght@100..900&display=swap',
  },
  // Material Symbols for icons
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap',
  },
],
meta: [
  { charSet: 'utf-8' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  { title: 'עדי - ניהול משרד עורכי דין והנהלת חשבונות' },
],
```

### 3c. Body changes
```tsx
function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="bg-background text-on-surface font-heebo antialiased">
        <Header />       {/* new layout/Header.tsx */}
        {children}
        <Footer />       {/* new layout/Footer.tsx */}
        <WhatsAppFab />  {/* new ui/WhatsAppFab.tsx */}
        <TanStackDevtools ... />
        <Scripts />
      </body>
    </html>
  )
}
```

The `ThemeToggle` component should be **removed** from the new header — the design has no theme toggle.

---

## 4. Styling Approach

### Strategy: Extend `src/styles.css`, preserve existing system

The current CSS variable + Tailwind setup is well-structured. The design.html uses a separate Tailwind config via CDN. The migration approach is to **translate** the design's color tokens into the existing CSS variable system.

### 4a. New CSS variables (add to `src/styles.css`)

The design uses Tailwind's semantic color naming (Material Design 3 tokens). Map these to new CSS variables in `:root`:

```css
/* Design palette — navy/indigo product theme */
--primary:              #00003c;
--primary-container:    #000080;
--primary-fixed:        #e0e0ff;
--primary-fixed-dim:    #bfc2ff;
--on-primary:           #ffffff;
--on-primary-fixed:     #00006e;
--on-primary-fixed-variant: #3239a3;
--on-primary-container: #777eea;
--inverse-primary:      #bfc2ff;
--secondary:            #5f5e5e;
--secondary-container:  #e4e2e1;
--secondary-fixed:      #e4e2e1;
--secondary-fixed-dim:  #c8c6c6;
--on-secondary:         #ffffff;
--on-secondary-fixed:   #1b1c1c;
--on-secondary-fixed-variant: #474747;
--on-secondary-container: #656464;
--tertiary:             #220000;
--tertiary-container:   #4d0000;
--tertiary-fixed:       #ffdad4;
--tertiary-fixed-dim:   #ffb4a8;
--on-tertiary:          #ffffff;
--on-tertiary-fixed:    #410000;
--on-tertiary-fixed-variant: #82271c;
--on-tertiary-container: #d96756;
--surface:              #f9f9f9;
--surface-bright:       #f9f9f9;
--surface-dim:          #dadada;
--surface-variant:      #e2e2e2;
--surface-tint:         #4b53bc;
--surface-container-lowest: #ffffff;
--surface-container-low: #f3f3f4;
--surface-container:    #eeeeee;
--surface-container-high: #e8e8e8;
--surface-container-highest: #e2e2e2;
--on-surface:           #1a1c1c;
--on-surface-variant:   #464653;
--inverse-surface:      #2f3131;
--inverse-on-surface:   #f0f1f1;
--outline:              #767684;
--outline-variant:      #c6c5d5;
--background:           #f9f9f9;
--on-background:        #1a1c1c;
--error:                #ba1a1a;
--error-container:      #ffdad6;
--on-error:             #ffffff;
--on-error-container:   #93000a;
```

### 4b. Tailwind theme extension (add to CSS via `@theme`)

```css
@theme {
  --font-heebo: "Heebo", sans-serif;
  --font-inter: "Inter", sans-serif;
  /* Map design color tokens to Tailwind utilities */
  --color-primary: var(--primary);
  --color-primary-container: var(--primary-container);
  --color-primary-fixed: var(--primary-fixed);
  --color-on-primary: var(--on-primary);
  --color-on-primary-container: var(--on-primary-container);
  --color-background: var(--background);
  --color-surface: var(--surface);
  --color-surface-container: var(--surface-container);
  --color-surface-container-low: var(--surface-container-low);
  --color-surface-container-high: var(--surface-container-high);
  --color-on-surface: var(--on-surface);
  --color-on-secondary-fixed-variant: var(--on-secondary-fixed-variant);
  --color-outline: var(--outline);
  --color-outline-variant: var(--outline-variant);
}
```

### 4c. New utility classes (add to `src/styles.css`)

```css
.glass-nav {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
}

.primary-gradient {
  background: linear-gradient(135deg, #00003c 0%, #000080 100%);
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
```

### 4d. Body base styles

Update `body` in `src/styles.css` to use `font-heebo` as default and remove the current teal/green background:

```css
body {
  font-family: var(--font-heebo);
  background-color: var(--background);
  color: var(--on-surface);
}
```

> **Note:** The existing `.page-wrap`, `.island-shell`, `.nav-link`, etc. classes can remain for now — they won't conflict unless explicitly used in new components. Clean-up is deferred.

---

## 5. Files Checklist

### Files to Create

- [ ] `src/components/layout/Header.tsx` — new RTL nav (replaces role of `Header.tsx`)
- [ ] `src/components/layout/Footer.tsx` — new 4-column footer (replaces role of `Footer.tsx`)
- [ ] `src/components/ui/WhatsAppFab.tsx` — floating WhatsApp action button
- [ ] `src/components/home/HeroSection.tsx` — hero section component
- [ ] `src/components/home/FeatureGrid.tsx` — 3×3 feature module grid
- [ ] `src/components/home/LeadGenSection.tsx` — layout wrapper for dual forms
- [ ] `src/components/home/SupportTicketForm.tsx` — support ticket form (mailto on submit)
- [ ] `src/components/home/DemoRequestForm.tsx` — demo request form (mailto on submit)

### Files to Modify

- [ ] `src/routes/__root.tsx`
  - Change `lang="en"` → `lang="he"`, add `dir="rtl"`
  - Update `head()` meta: title, font links, Material Symbols stylesheet
  - Update imports: use `layout/Header`, `layout/Footer`, add `WhatsAppFab`
  - Update `<body>` className: swap to `bg-background text-on-surface font-heebo`

- [ ] `src/routes/index.tsx`
  - Replace current placeholder content with `<HeroSection>`, `<FeatureGrid>`, `<LeadGenSection>`

- [ ] `src/styles.css`
  - Add new CSS color variables (design token set) to `:root`
  - Add `@theme` extensions for Tailwind color/font utilities
  - Add `.glass-nav`, `.primary-gradient`, `.material-symbols-outlined` classes
  - Update `body` base font and background color

### Files to Retire (do not delete yet — keep until new components are verified)

- `src/components/Header.tsx` — superseded by `src/components/layout/Header.tsx`
- `src/components/Footer.tsx` — superseded by `src/components/layout/Footer.tsx`

---

## 6. Decisions Made

1. **ThemeToggle:** Removed. The new header will not include a theme toggle.

2. **Screenshot image:** Keep the existing Google-hosted image URL as-is for now; no local asset needed.

3. **Form handling:** On submit, each form opens a `mailto:adi4clients@gmail.com` link with subject and body pre-filled from the form fields. No server function needed.

4. **Routing links in nav:** The 6 nav module links (`ניהול לקוחות`, etc.) use `<a href="#">` until those routes exist.

5. **Dark mode:** Not supported. The design is light-mode only. The existing `[data-theme="dark"]` styles in `styles.css` can be left in place but will be unreachable with the toggle removed.

6. **`about.tsx` route:** Future work — leave as-is.
