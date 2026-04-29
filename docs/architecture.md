Piano Teacher Link — Architecture Overview
Overview

Piano Teacher Link is a Drupal-based directory platform designed to connect students with piano instructors. The system uses a component-driven theming approach built on top of the Radix (Bootstrap 5) base theme.

Tech Stack
Drupal 10
Radix Theme (Bootstrap 5)
Twig (component-based templates)
SCSS (custom design system)
DDEV (local development)
GitHub (version control)
Theming Approach
Component-Based Structure

UI is built using reusable Twig components instead of page-specific markup.

Examples:

elegance:navbar
elegance:nav
elegance:form-element
elegance:select

This keeps templates modular and maintainable.

SCSS Design System

Custom SCSS variables override Bootstrap defaults:

Minimal, square UI (border-radius: 0)
Neutral palette with warm tones
Consistent spacing via $spacer

Key principle:

Avoid inline styling and utility overrides when possible — rely on variables.

Content Architecture
Content Type: Teacher Profile

Fields include:

Name (node title)
Instruments (taxonomy)
Styles (taxonomy)
Location (text / taxonomy)
Contact Email
Lesson Type (online / in-person)
Taxonomies
Instruments
Styles
(Future: Location hierarchy)
Views
Teacher Directory (/teachers)
Exposed filters (instrument, etc.)
Uses custom themed form components
Renders teacher cards
Known Technical Debt
Contact pages are currently implemented directly in templates
Should be refactored into reusable components (tracked via GitHub issue)
Design Principles
Clean, minimal UI
Consistent spacing and alignment
Subtle interaction (hover, transitions)
Avoid over-animation
Future Improvements
Refactor page templates into components
Add location-based filtering (city/state)
Introduce user-managed profiles
Improve search/filter UX (horizontal filter bar)
Deployment
Local: DDEV
Build: SCSS compiled via npm (theme-level)
Hosting: (TBD / Cloudways planned)
Summary

The project prioritizes clean structure, maintainability, and a modern UI approach within Drupal’s ecosystem.
