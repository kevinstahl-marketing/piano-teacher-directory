# Teacher Directory (Quick Notes)

Path: `/teachers`

## What it is
Drupal View showing Teacher Profiles with filters + cards + pagination.

---

## Key Twig Files

Main page layout:
views-view--teacher-directory--page-directory.html.twig

Grid wrapper:
views-view-unformatted--teacher-directory--page-directory.html.twig

Teacher card:
views-view-fields--teacher-directory--page-directory.html.twig

Filters form:
form--views-exposed-form-teacher-directory-page-directory.html.twig

Filter fields (scoped overrides):
form-element--name--field-instruments-target-id.html.twig
form-element--name--field-styles-target-id.html.twig
form-element--name--field-country-target-id.html.twig

---

## Structure

Hero  
Filters (exposed form)  
Grid (cards)  
Pager  

---

## Rules (don’t forget)

- Layout = form override, NOT form-element
- Grid = views-view-unformatted
- Card = views-view-fields
- Don’t touch global form templates unless necessary

---

## After changes

ddev drush cr
