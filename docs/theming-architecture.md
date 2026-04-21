# Theming Architecture

## Overview

Theme uses a component-based approach with Radix as the base.

Structure:
- Radix components (base)
- Elegance components (custom)
- Twig overrides (page, block, menu)

## Layers

- Page level → layout (`page-footer.twig`, etc.)
- Block level → structure (`block--*.twig`)
- Menu level → data rendering (`menu--*.twig`)
- Component level → reusable UI (`footer-nav.twig`, hero, etc.)

## Rules

- Do NOT modify Radix components directly
- Always create elegance:* components for customization
- Use Twig overrides instead of hacking markup inline
