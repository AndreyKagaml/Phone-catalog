# React & TypeScript Phone Catalog

A **responsive web application** for browsing and exploring a catalogue of mobile phones. The project is built with React and TypeScript, focusing on reusable components, client-side navigation, product data management and a structured frontend architecture.

---

## Live Preview

The application is deployed via GitHub Pages and is publicly accessible here:

[Live Demo](https://andreykagaml.github.io/Phone-catalog/)

---

## Design Reference
This project is implemented based on the following design specification:

https://www.figma.com/design/xMK2Dy0mfBbJJSNctmOuLW/Phone-catalog--V2--Rounded-Style-1?node-id=0-1&p=f

---

## Technologies Used

### Core
- **React** (v18.3.1) – building user interfaces with reusable components
- **TypeScript** (v5.2.2) – static typing and improved code reliability
- **SCSS** (v1.102.0) – styling and maintaining structured stylesheets

### State Management & Data
- **Redux Toolkit** (v2.12.0) – managing application state
- **TanStack Query** (v5.102.8) – managing asynchronous data fetching and caching
- **Zod** (v4.5.4) – data validation and type-safe schemas

### UI/UX
- **React Router** (v6.30.4) – client-side routing and navigation
- **React Paginate** (v8.3.0) – pagination for product lists
- **Classnames / CLSX** – conditional CSS class management
- **Vite Plugin SVGR** (v5.2.0) – importing SVG files as React components

### Localization
- **React i18next** (v17.0.13) – integrating translations into React components

### Development & Testing
- **Vite** (v5.3.1) – development server and build tool
- **ESLint** (v8.57.0) – code quality
- **Stylelint** (v16.7.0) – SCSS code quality
- **Prettier** (v3.3.2) – code formatting

---

## Features

- **Product Catalogue:** Browse mobile phones and explore available products.
- **Product Categories:** Navigate between different product categories.
- **Product Details:** View detailed information about individual products.
- **Sorting and Filtering:** Organize products according to available criteria.
- **Pagination:** Navigate through product lists.
- **Favorites:** Add products to a favorites list.
- **Shopping Cart:** Add products to the cart and manage selected items.
- **Client-side Navigation:** Navigate between pages without full page reloads.
- **Responsive Layout:** Adapted interface for different screen sizes and devices.
- **Sticky header:** Keeps the header visible as you scroll.
- **Scroll to Top Button:** Easily return to the top of the page.
- **Loader:** Indicates loading status for a better user experience.
- **Localization:** Support for multiple languages using i18next.

## Getting Started

Follow these steps to run the project locally.

### 1\. Clone the repository

Open your terminal and execute the following commands:

```bash
git clone https://github.com/AndreyKagaml/Phone-catalog.git
cd Phone-catalog
```

### 2\. Install dependencies

Install all required packages:

```bash
npm install
```

### 3\. Start the development server

Start the local development server:

```bash
npm start
```

---

## Author

**Andrii Kahamlyk**

GitHub: [AndreyKagaml](https://github.com/AndreyKagaml)
