# Pulsar UI 🌟

Pulsar UI is a lightweight, modular, and responsive UI component library built with Astro and plain CSS. Designed for simplicity and performance, Pulsar UI provides a collection of accessible, reusable components that seamlessly integrate into any Astro project.

## 🚀 Features
Modular Components: Use only what you need with fully encapsulated components.
Zero Dependencies: Built with plain CSS—no Tailwind, no frameworks.
Themeable: Easily customize styles with CSS variables.
Performance-Optimized: Minimal JavaScript and CSS for fast-loading UIs.
Accessible by Default: Follows accessibility best practices, including ARIA roles and keyboard navigation.
Static-First: Perfectly optimized for Astro's static-first approach.
📦 Installation
Coming soon: Once Pulsar UI is published to NPM, you can install it directly with:

```bash
npm install pulsar-ui
```

For now, clone this repository to get started:

```bash
git clone https://github.com/<your-username>/pulsar-ui.git
```

## 🛠️ Usage
Import and use components in your Astro project:

```Astro
---
import Button from 'pulsar-ui/components/Button.astro';
---

<Button variant="primary" size="large">Click Me</Button>
```
Include global styles in your astro.config.mjs or directly in your project:

```javascript
import 'pulsar-ui/dist/styles.css';
```
## 📚 Documentation
Explore the full list of components and usage examples in the documentation (Coming soon!).

## 🧩 Components
Component	Description
Button	A versatile button with variants and sizes.
Modal	An accessible dialog for overlays.
Grid	A flexible grid layout system.
Navbar	A responsive navigation bar.
Input	Form input elements with error handling.
🛠️ Development
Clone the repository and install dependencies:

```bash
git clone https://github.com/<your-username>/pulsar-ui.git
cd pulsar-ui
npm install
```
Run the development server:

```bash
npm run dev
```
Build the library:

```bash
npm run build
```
## 📄 License
Pulsar UI is open-source and licensed under the MIT License.
