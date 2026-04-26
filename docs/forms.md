# Form Theming Approach

Forms use Drupal Form API. Do not rebuild markup manually.

## Structure
- Twig overrides handle layout
- Component templates handle styling (input, label, etc.)
- container.html.twig is modified conditionally for field wrappers

## Key Pattern
Use:
attributes.hasClass('field--widget-*')

to safely target field containers.

## Notes
- children = full rendered form
- element = raw form structure
- Prefer Bootstrap utilities over custom CSS
