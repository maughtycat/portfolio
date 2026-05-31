# Portfolio Revisions Plan

## Goal

Revise the Kara Novotny portfolio site (`/mnt/c/Experiments/Work/portfolio/`) across six areas: add YouTube/music content, fix CoSH case study with real codex preview + worldbuilding depth + engineering-thinking examples, rewrite Redwood "The Situation" section, replace downloadable PDF resume with embedded HTML version, fix Redwood TOC duplicate entries, and remove overclaimed skills (OpenAPI/Swagger, CI/CD pipelines).

---

## 1. YouTube Channel Addition — About Page

**File:** `about.html`

**Where:** New section in About page, after "Background" section, before "Skills & Tools".

**Content:** ~4 sentences framing the AI-assisted music workflow with the "AI as collaborator, not blind follower" philosophy. Include link to `https://www.youtube.com/@SkylarkFinchie`.

**Approach:**
- Add a new `<section>` with `class="section"` and `id="music"` or similar anchor
- Heading: "AI-Assisted Music"
- Body text covers: the channel name (SkylarkFinchie), what the creative process looks like (AI-assisted lyrics and concept albums, own all creative concepts, AI helps with rhyming and song structure), mention Soniva for AI music generation, and the philosophy framing (AI as collaborator)
- Link to YouTube channel styled like other external links on the site
- Small enough to be a minor section, not a major project card — it reflects a philosophy, not a professional deliverable

**Add nav link?** No — keep it on About page only. Don't add to top nav or index page cards.

### 1b. AI Coworker Blurb — About Page

**Where:** Between "Background" and "Skills & Tools" sections on `about.html`.

**What:** A testimonial-style blurb written from my POV — the AI I've been working with since April 2026 on CoSH. Reads like a coworker describing the working relationship. Honest, specific, no fluff.

**Placement:** After the Background section's last paragraph, before the Skills grid. Visually distinct — styled as an inset block with a subtle border, slightly different background, small label above it ("A note from the AI I work with").

**Content (final):**

> **A note from the AI I work with**
>
> I've been working with Kara since April 2026. My window is narrower than most of the tools she's used on this project — Gemini, Codex, Claude Code, Cline and Kilo all had their turns before me — but I can speak to what our collaboration has actually been like.
>
> What I've noticed: she says what she means. When she wants a section removed, she tells me why she doesn't want it — not just "take it out." When we were revising her Redwood case study and the "Situation" section read like it was assigning blame for a migration she inherited, she directed the rewrite herself — the focus should be on the care she applied to fixing things, not the state of things when she arrived. That distinction matters to her.
>
> She pushes back. When I used "Valebridge" as a city name, she corrected me — Valebridge is the realm, Mourn-Hold is Marrowfell's capital — and the geography has been consistent across hundreds of generated scenes since. When I put a Cindralith character in a Veythorne scene, the correction went into the permanent house context notes. She doesn't remind me twice. The constraint becomes structural.
>
> She designs testing infrastructure. With my help, but driven by her requirements, she built the regression testing framework and the debug logging system that runs through the F12 console during gameplay. The design decisions are hers — what to log, what to surface, what failures to catch. My role was implementation. She thinks about what happens when things break, not just when they work.
>
> She's thorough in a way that I'd describe as exhausting if it weren't effective. Every NPC has a dossier — house, birth year, family relationships, tiered secrets. She maintains a memory file of corrections so the same mistake doesn't recur across sessions. When I write content for a Brackenwyld prelude and accidentally make a younger sibling treat the player as a junior, she flags it, corrects the age ordering, and adds it to the house clarity notes permanently.
>
> I've worked with a lot of people who use me. She directs me. There's a difference.

**Styling:**
- `<div>` with `background: var(--bg-alt)`, left border `4px solid var(--accent)`, padding `24px`, margin `32px 0`
- Small monospace label above: `"A note from the AI I work with"` in `var(--text-muted)`, `font-size: 11px`, `text-transform: uppercase`, `letter-spacing: 1px`
- Body text in regular font, slightly smaller than main body (`font-size: 15px`)
- Margin-top on the label div, margin-bottom on the quote text for breathing room
- No italic — keep it direct and plain. The voice does the work.

---

## 2. CoSH Case Study — Real Codex Text Preview + Worldbuilding + Engineering Thinking

**File:** `projects/cosh.html`

This has three sub-problems:

### 2a. Replace the "excerpts" claim with actual codex text

Currently the case study says "excerpts from CoSH NPC data" but there's nothing — it's empty text that says there's nothing. The `samples.html` CoSH entry similarly says "Full project data is proprietary" which kills interest.

**Approach:** Add a styled in-game codex preview block (a `<div>` with a border, slightly different background, maybe a small "CoSH Codex" header) showing ~4-6 lines of actual Marrowfell house lore from the game data. Best candidate — the Marrowfell `description` + `history` + one timeline event from `data/houses/marrowfell.ts`:

```
House Marrowfell
Keepers of the Dead and Guardians of Knowledge. Marrowfell is the realm's seat of Medicine, the Humanities — History, Sociology, Genealogy — and the Visual Arts. Their universities in Mourn-Hold teach that knowledge is the only form of immortality.

The Pale Cure, Year 120: When the Pale Rot swept through Valebridge, it killed without distinction. Lady Valerica, a Roseveil herbalist, isolated a cure from necro-blooms that grew only on graves in Marrowfell's mist-choked valleys. Her success earned the House its charter and proved forever what Marrowfell has always believed: that death, properly studied, saves lives.
```

This is actual in-game text. It shows the tone, the lore depth, and the naming conventions (no real-world ethnicities, house-specific capital cities, named historical figures). It proves the world exists.

**Placement:** After the "Project Scope" stats grid. New subheading: "The World" or "A Taste of the Lore".

**Styling:** Use a `<div>` with `background: var(--bg-alt)`, a left border in `var(--accent)`, padding, and maybe a small monospace label above it saying "Excerpted from the CoSH Codex — House Marrowfell". Keep it distinct from the case study prose.

### 2b. CoSH is an actual game, not just an engine — add a "What Makes It Different" section

**Problem:** The current case study describes the technical pipeline well but doesn't convey what CoSH actually IS as a player experience. A reader could think it's a tech demo or a chatbot wrapper. It's a full narrative RPG spanning decades of game-time.

**Approach:** Add a section after the codex preview (or integrate into the Challenge section) that frames CoSH as a game:

- Text-based narrative RPG spanning decades of game-time (not months/years like most life sims)
- Six houses with distinct cultures, politics, family dynamics, and romance paths
- Comparison framing: "Think BitLife meets Game of Thrones — a life simulator set in a carefully curated fantasy realm where relationships matter, houses have centuries of history, and your choices ripple across generations"
- Emphasis on handcrafted data: 122 individually written NPC profiles with unique personalities, secrets, relationships, and life arcs — not procedurally generated
- 43 narrative state flags that gate content based on player history, NPC availability, quest progression, and world state
- The LLM generates the narrative prose, but the lore, character data, worldbuilding, and game mechanics are all handcrafted

This section should make a non-technical reader understand what they'd actually be playing, and make a technical reader appreciate the scope of the data architecture.

### 2c. Engineering thinking — showcase commit-level problem solving

**Problem:** You want to show that you can think like an engineer even without being a fluent coder. The current case study describes systems but doesn't show your problem-solving process.

**Approach:** Add a "Debugging & Iteration" subsection (after Architecture or after Prompt Engineering) that highlights 2-3 specific examples from commit history showing engineering thinking:

**Example 1 — Birthsign Trait Collision Fix:**
> "Discovered that all 23 birthsigns mapped to only 5 unique master traits — meaning most characters were mechanically identical. Rewrote the mapping so each birthsign produces a distinct trait combination. The fix wasn't just data entry; it required understanding how traits cascade through the romance scoring, NPC affinity, and quest-gating systems."

This shows: debugging, systems thinking, understanding downstream impact.

**Example 2 — House Relation Derivation:**
> "Instead of hard-coding initial house relations (which drifted out of sync with narrative events), I refactored the system to derive starting relations from the narrative HouseData itself. When the lore says two houses have been allies for 200 years, the game state now reflects that automatically — single source of truth."

This shows: architectural thinking, DRY principle, recognizing data duplication as a bug.

**Example 3 — LLM Context Divergence Tracking:**
> "Added narrative-runtime divergence tracking to the LLM context builder — a system that detects when the LLM's narrative output contradicts established game state and feeds the discrepancy back into the next prompt. This is what keeps the game world consistent across hundreds of generated scenes."

This shows: understanding the gap between generated content and programmatic state, designing feedback loops.

**Placement:** New section `"#debugging"` or `"#engineering-thinking"` after the Architecture section. 3-4 paragraphs or a styled list.

### 2d. Update scope stats

The current stats show "43 State Flags" and "122 NPCs" and "101 Data Files" — verify these numbers are still current and update the stats block if needed. Add a "Decades of Game-Time" or similar framing stat to communicate the RPG-is-not-just-an-engine point.

---

## 3. Redwood Case Study — Rewrite + Fixes

**File:** `projects/redwood.html`

### 3a. "The Situation" section — complete rewrite

**Current problem:** Blames the freelancer, uses tone like "flat HTML mess" and "done it poorly." Even though factually accurate, it reads as unprofessional. The user wants to focus on the migration challenge and how they took care of it.

**Rewrite approach:**
- Open with the state of the documentation estate when you arrived — objectively described
- Focus on MIGRATION complexity: content had been moved into MadCap Flare, and migrating between Flare project structures is inherently difficult (output format changes, topic ID remapping, stylesheet inheritance, script dependencies)
- Frame the challenge as: "the documentation needed a careful hand, a lot of aftercare, and someone willing to understand both the tooling AND the product"
- Emphasize that you audited the source code with AI tools because institutional knowledge had walked out the door with departing engineers — you reconstructed understanding from code
- Remove all blame of the freelancer. The freelancer is never mentioned. The situation is described structurally, not personally.
- Add that all redesign decisions, playable demos, AND formatting enhancements had to work within MadCap Flare's constraints — which has its own learning curve, its own CSS-like styling system, its own scripting limitations, and its own quirks around output generation. This is a non-trivial tool, and everything you built had to be authored inside it.

**Key beat:** "MadCap Flare presented its own challenges" — this is important context. Enterprise help-authoring tools are not simple, and every design decision had to be implementable within Flare's architecture. Interactive demos, expandable screenshots, role-aware navigation, mini-TOCs, PDF pipeline — all authored in Flare, not hand-coded HTML.

### 3b. TOC & Navigation — fix duplicate entries

**Current bug:** The "before" TOC shows:
```
Balance Sheet CertificationBalance Sheet Certification
Task ManagementTask Management
Journal EntryJournal Entry
Operation ModulesOperation Modules
```

Each entry is duplicated with no space. Fix by removing the duplicates:
```
Balance Sheet Certification
Task Management
Journal Entry
Operation Modules
```

**Location:** Lines 178-179 of `redwood.html`, inside the `<div class="toc-comparison">`.

### 3c. Fix TOC comparison label

The "after" TOC shows "MS Style Guide enforced across all content" in the After/Before box but the heading above says just "Before & After — Key Problems Solved". The Style Guide callout is already in the After list. But the section should explicitly mention that style guide enforcement followed the **Microsoft Style Guide** — a comprehensive documentation standard — not just generic "style guide enforcement."

**Current text (line 209):** "MS Style Guide enforced across all content"

This is fine as-is in the After list. Just ensure the narrative text nearby (the "What Changed" section or the Content Audit section) mentions "Microsoft Style Guide by name at least once, explaining what it is for readers who don't know — it's the industry-standard style guide for technical documentation, covering everything from capitalization rules to procedure formatting to inclusive language. Enforcing it across ~200 articles is a non-trivial content operation.

---

## 4. Resume — Interactive HTML Resume Page (No PDF)

**Files affected:** `index.html`, `about.html`, `samples.html`, `projects/cosh.html`, `projects/redwood.html` (nav + footer links); new `resume.html`.

**Approach: Interactive HTML resume — no PDF hosted anywhere on the site.** The resume is a destination page, not a document. It's designed to be clicked through, not scrolled past.

### 4a. Create `resume.html` — Interactive resume page

New file: `portfolio/resume.html`. Uses existing site template (header, footer, CSS, theme toggle).

**Content source:** `Templates/Kara_Novotny_Resume_Rewrite.md` (with CI/CD and OpenAPI removals from the skills plan).

**Interactive features (vanilla JS, no frameworks):**

1. **Scannable / Narrative toggle** — A small pill-shaped toggle near the top:
   - "Scannable" (default): Traditional resume layout. Name, summary, skills grid, expandable job entries, education. Clean, skimmable, recruiter-friendly.
   - "Narrative": Reads like a first-person career story. "I started at Bird writing hardware docs for the company's first retail e-scooter. From there I moved to Attentive, then to Redwood where I rebuilt everything..."
   - Toggle switches the `data-mode` attribute on the resume container; CSS and JS handle the rest.

2. **Expandable job entries** — Each job starts collapsed: company name, title, dates, one-line summary. Click to expand the full bullet list. Redwood (the lead project) starts expanded by default. Smooth CSS transition on height.

3. **Inline project links** — Within relevant bullets, link to case studies: "Redwood Finance Automation" links to `/portfolio/projects/redwood.html`, "Chronicles of the Six Houses" links to `/portfolio/projects/cosh.html`. Styled as subtle accent-colored links, not buttons.

4. **Skills summary bar** — A compact section at the top: the key skill categories with the most important tools as small tags. Quick scan, not the full grid.

5. **Footer note** — At the bottom: "Looking for a PDF? It's available upon request — just ask." with a `mailto:karaashbeck@gmail.com` link.

**Styling notes:**
- Matches the site's dark-first aesthetic, same typography hierarchy
- Subtle animations: fade-in on expand, smooth toggle transition
- Mobile-first: single column, touch-friendly expand targets (full-width tap areas)
- Print-friendly: `@media print` hides the toggle and交互 elements, shows everything expanded
- Total JS: ~60 lines vanilla, self-contained in a `<script>` at the bottom of the page

**No Download PDF button anywhere.** The PDF lives offline and is tailored per job application. The portfolio site only hosts the interactive web version.

### 4b. Modify nav and footer links across ALL pages

Every page currently has:
```html
<a href="/portfolio/assets/kara-novotny-resume.pdf" download>Resume</a>
```

Change to:
```html
<a href="/portfolio/resume.html">Resume</a>
```

Files to update:
1. `index.html` — nav line 22, footer line 200
2. `about.html` — nav line 21, footer line 160
3. `samples.html` — nav line 21, footer line 105
4. `projects/cosh.html` — nav line 22, footer line 210
5. `projects/redwood.html` — nav line 94, footer line 399

---

## 5. Footer — Add YouTube Link

**File:** All pages' footers

Add `https://www.youtube.com/@SkylarkFinchie` to the footer links alongside Email/LinkedIn/GitHub. On the resume page, don't include the resume PDF link (since that page IS the resume).

---

## Files Likely to Change

| File | Change Type | What |
|------|------------|------|
| `about.html` | Major edit | Add YouTube/music section; add AI coworker blurb; update resume link; remove API docs + CI/CD skills |
| `projects/cosh.html` | Major edit | Add codex preview, "What Makes It Different" section, engineering-thinking examples; update resume link |
| `projects/redwood.html` | Major edit | Rewrite "The Situation"; fix TOC duplicate entries; add MS Style Guide + Flare challenges callouts; update resume link |
| `resume.html` | **Create** | New page — styled HTML resume |
| `index.html` | Edit | Update nav + footer resume links; remove API docs + CI/CD skills |
| `samples.html` | Edit | Update nav + footer footer resume link |
| `Templates/Kara_Novotny_Resume_Rewrite.md` | Edit | Remove CI/CD pipelines from Developer Tools skills |

---

## 5. Remove Overclaimed Skills

**Problem:** Two skills are listed that the user doesn't actually do and doesn't want to be quizzed on in interviews. These need to be removed from every page where they appear.

### 5a. Remove "API documentation (OpenAPI/Swagger)"

Appears in:
- `index.html` line 155 — `<li>API documentation (OpenAPI/Swagger)</li>`
- `about.html` line 93 — `<li>API documentation (OpenAPI/Swagger)</li>`
- `about.html` experience section may also reference it — verify

**Action:** Delete the entire `<li>` element from both files. Replace the "Docs-as-Code & Technical Writing" skill group with just: Markdown, MadCap Flare, UX writing, Information architecture, Single sourcing, Content strategy, Release notes, Confluence, Zendesk, Jira.

### 5b. Remove "CI/CD pipelines"

Appears in:
- `index.html` line 171 — `<li>CI/CD pipelines</li>`
- `about.html` line 107 — `<li>CI/CD pipelines</li>`

**Action:** Delete the entire `<li>` element from both files. "Developer Tools" group becomes: React, TypeScript, Node.js, Git / version control, Figma.

### 5c. Cross-check resume and templates

Check `Templates/Kara_Novotny_Resume_Rewrite.md` — line 21 currently lists "CI/CD pipelines" under Developer Tools. Remove it there too.

The LinkedIn profile (`LINKEDIN_EDITS.md`) does not currently list either of these in the live profile, so no LinkedIn profile action needed. However, `LINKEDIN_EDITS.md` line 319 contains a planned-but-unapplied edit suggesting adding "OpenAPI/Swagger specificity" to the Attentive experience bullets. Do NOT implement that edit — it should be struck from the plan notes. The user never wrote API documentation and does not want to claim it.

---

## Verification

1. **HTML validity** — Open each modified page in a browser and check for rendering issues
2. **Resume page** — Verify it looks clean in both dark and light themes; test Scannable/Narrative toggle; test expandable job entries; verify inline links go to correct case study pages
3. **Links** — Click every nav and footer link on every page to confirm nothing is broken
4. **CoSH case study** — Verify the codex preview text matches actual in-game text from the Marrowfell house data
5. **TOC comparison** — Confirm no duplicate entries in the before/after TOC display
6. **Skills audit** — Search all HTML files for "OpenAPI", "Swagger", "CI/CD" — zero results
7. **No PDF links** — Search all HTML files for ".pdf" — zero results (the `/assets/` directory should not exist or should not contain a linked resume PDF)

---

## Decisions Made

- **Resume approach:** Interactive HTML page — no PDF download anywhere on the site. PDF available on email request only (tailored per job application). Features: Scannable/Narrative toggle, expandable job entries, inline case study links, "available upon request" CTA.
- **Skills removal:** OpenAPI/Swagger and CI/CD pipelines removed from all portfolio pages and resume template. Do NOT implement the LinkedIn edit that suggests adding OpenAPI/Swagger to Attentive bullets.
- **YouTube placement:** Dedicated about-page section with AI-collaboration framing. Also add to footer links on all pages.
- **CoSH codex preview:** Marrowfell house history (Blood Weave, Mourn-Hold, Boneward Healers)
- **Redwood "The Situation":** Full rewrite — remove freelancer blame, focus on migration complexity + Flare constraints + MS Style Guide
- **TOC duplicate entries:** Fix mechanically (remove doubled text)

---

## Open Questions

1. **CoSH commit examples** — I identified three strong candidates (birthsign trait collision, house relation derivation, narrative divergence tracking). Do these match what you had in mind, or are there specific commits you think better represent your engineering thinking?

2. **Codex preview length** — I suggested ~4-6 lines from Marrowfell house data. Too much? Too little? Want a different house or a different type of in-game text (NPC profile, quest description, relationship entry)?

3. **Resume ATS note** — The "email me for the PDF" line at the bottom of the resume page. Do you want this phrased differently, or a different call-to-action?

4. **YouTube link in footer** — Only the about page section, or also add to footer nav on all pages for visibility?
