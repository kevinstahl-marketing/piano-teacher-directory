# Setup Guide

## Requirements

* DDEV
* Docker
* Node.js (v18+ recommended)
* Composer

---

## Install

```bash
git clone <repo>
cd piano-teacher-directory
ddev start
ddev composer install
ddev drush cr
```

---

## Theme Build

```bash
cd web/themes/custom/elegance
npm install
npm run dev
```

---

## Access Site

```text
https://piano-teacher-directory.ddev.site
```

---

## Notes

* SCSS is compiled at the theme level
* Clear cache after Twig changes:

```bash
ddev drush cr
```
