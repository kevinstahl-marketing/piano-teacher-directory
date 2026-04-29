# View System Notes

## Overview

The site currently uses Drupal Views to power several major listing pages:

- Homepage teacher preview section
- Teacher directory page
- Taxonomy term listing pages

These views all follow roughly the same structure:

1. Drupal View selects the relevant Teacher Profile nodes.
2. The View outputs each result using the Teacher Profile teaser.
3. The teaser template/component handles the visual card layout.
4. Page-level Twig templates provide wrappers, containers, spacing, and section layout.
5. Most styling should stay near the component or the specific page wrapper using it.

## Current Pattern

The preferred pattern is:

- Keep field/data logic out of random page templates where possible.
- Pass data into components directly from Twig or preprocess.
- Keep visual structure inside `components/component-name`.
- Use templates mainly for layout wrappers and component placement.

Example structure:

```text
View
  → Teacher Profile teaser
    → Teacher card/component
      → Component CSS
