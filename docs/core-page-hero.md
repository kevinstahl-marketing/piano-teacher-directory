# Core Page Hero – Current State (IMPORTANT)

## What we changed today

### 1. Node override is now active
We are using:
- node--core-page.html.twig

This controls the actual page content layout.

DO NOT edit page.html.twig for hero stuff anymore.

---

### 2. Hero system moved to preprocess_node

We created:

function elegance_preprocess_node()

This builds a clean `hero` variable and passes it to Twig.

This ONLY works for:
- node templates (not page templates)

If hero breaks → check this first.

---

### 3. Twig now expects `hero`, NOT raw fields

We are no longer doing:
- content.field_hero_*

We are doing:
- hero.title
- hero.button_1.url
- etc.

If something is missing → fix preprocess, not Twig.

---

### 4. Header and footer are NOT part of this system

They live in:
- page.html.twig
- radix components (page-navigation, page-footer)

Do NOT try to control them from node templates.

---

## Mental model (DO NOT FORGET)

page.html.twig
→ wraps everything (header/footer)

node--core-page.html.twig
→ controls the actual page content (hero + fields)

preprocess_node
→ prepares data for that content

---

## If something breaks

1. dump(hero) → is it null?
   - YES → preprocess_node issue
   - NO → Twig issue

2. Is this the correct template?
   - check Twig debug suggestions

3. Did we clear cache?
   - drush cr

---

## Next session

- Finish hero UI (image + spacing + responsiveness)
- Clean button rendering
- Possibly move hero into its own Twig component later

---

## Reminder

We are building:
- page-specific hero (NOT a block)
- clean data layer (preprocess)
- clean layout layer (Twig)

DO NOT go backwards into messy field rendering
