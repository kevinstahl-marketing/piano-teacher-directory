# 🎹 Piano Teacher Link

A modern directory platform connecting students with piano instructors for in-person and online lessons.

---

## 🚀 Overview

Piano Teacher Link is a Drupal-based web application designed to make it easy for students to discover and connect with qualified piano teachers.

The project focuses on:

* Clean, responsive UI
* Component-based theming
* Scalable content architecture
* Real-world usability for both students and instructors

---

## 🛠️ Tech Stack

* **Drupal 11**
* **Radix Theme (Bootstrap 5)**
* **Twig (component-based templating)**
* **SCSS (custom design system)**
* **DDEV (local development)**
* **GitHub (version control)**

---

## 🎯 Key Features

* 🎹 Teacher directory with filtering (instrument, etc.)
* 📄 Individual teacher profile pages
* 📬 Contact functionality for student inquiries
* 🎨 Custom theming system built on Radix
* 📱 Fully responsive layout
* ⚡ Lightweight UI interactions (hover, transitions, animations)

---

## 🧱 Architecture Highlights

* Component-based Twig structure (`elegance:*`)
* Reusable UI patterns for forms, navigation, and layout
* SCSS variables override Bootstrap for consistent design
* Clean separation between data (Drupal) and presentation (Twig)

See full architecture:
👉 `/docs/architecture.md`

---

## ⚙️ Setup

### Requirements

* DDEV
* Docker
* Node.js (v18+)
* Composer

### Install

```bash
git clone <repo-url>
cd piano-teacher-directory
ddev start
ddev composer install
ddev drush cr
```

### Theme Build

```bash
cd web/themes/custom/elegance
npm install
npm run dev
```

---

## 📁 Project Structure

```text
web/
  themes/custom/elegance/
    templates/
    src/scss/
    src/js/

docs/
  architecture.md
  setup.md
  theming.md
  roadmap.md
```

---

## 🎨 Theming Approach

* Built on Radix (Bootstrap 5)
* Custom SCSS variables define design system
* Square, minimal UI with warm neutral palette
* Components preferred over page-specific templates

See:
👉 `/docs/theming.md`

---

## 📌 Roadmap

* Refactor contact pages into reusable components
* Improve directory filtering UX
* Add location-based filtering
* Enable user-managed profiles

See:
👉 `/docs/roadmap.md`

---

## 🧠 Purpose

This project was built as a practical, production-style implementation of a Drupal-based platform, focusing on:

* Clean architecture
* Maintainability
* Real-world use cases
* Professional UI polish

---

## 📄 License

MIT 
