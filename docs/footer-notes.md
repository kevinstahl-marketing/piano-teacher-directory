## What we built

We rebuilt the footer so it matches the Figma layout more closely.

The footer now has:
- 1 brand column
- 3 menu columns:
  - Quick Links
  - Support
  - Legal

The layout is controlled in Twig and the links are managed through Drupal menus.

## How it works

The footer is split across a few layers:

- `page-footer.twig`
  - controls the outer footer layout
  - contains the brand column
  - renders `page.footer`

- footer menu block overrides
  - each footer menu block acts as its own Bootstrap column

- `menu--*.html.twig`
  - each footer menu points to the custom `footer-nav` component

- `footer-nav.twig`
  - styles footer links vertically
  - keeps footer menu styling separate from the main nav

## Files involved

- `templates/components/page-footer/page-footer.twig`
- `templates/menu/menu--footer-quick-links.html.twig`
- `templates/menu/menu--footer-support.html.twig`
- `templates/menu/menu--footer-legal.html.twig`
- `templates/block/block--system-menu-block--footer-quick-links.html.twig`
- `templates/block/block--system-menu-block--footer-support.html.twig`
- `templates/block/block--system-menu-block--footer-legal.html.twig`
- `components/footer-nav/footer-nav.twig`

## Important decisions

- We did not modify `radix:nav` directly.
- We created a separate `footer-nav` component so footer styling stays isolated.
- We did not keep all footer links in one menu.
- We split footer navigation into separate menus for cleaner CMS structure.
- Each footer menu block is its own grid column.
- `page.footer` should not be wrapped in another Bootstrap column, since the blocks already handle that.

## How to edit later

### To change footer layout
Edit:
- `page-footer.twig`

### To change footer link styling
Edit:
- `footer-nav.twig`

### To change footer column headings
Edit:
- the footer-specific block override templates

### To add or remove links
Go to Drupal admin:
- `/admin/structure/menu`

### To place or move footer menus
Go to:
- `/admin/structure/block`
