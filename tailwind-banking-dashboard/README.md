# 🏦 Prospective Customer Segmentation

> A modern front-end UI project built with **React** and **Tailwind CSS**, showcasing a customer segmentation dashboard for a digital banking system.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 🚀 What I Built

A clean, modern landing page consisting of:

- 🔹 A **Navbar** with a branded button and title
- 🔹 A **Left Content** section with a heading, description, and icon
- 🔹 A **Right Content** section with 3 dynamic image cards, each representing a customer segment with a label and a color-coded button

---

## 🗂️ Project Structure

```
tailwind-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── section1/
│   │   │   ├── NavBar.jsx
│   │   │   ├── CenterContent.jsx
│   │   │   ├── LeftContent.jsx
│   │   │   ├── RightContent.jsx
│   │   │   └── Section1.jsx
│   │   └── section2/
│   │       └── Section2.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧠 What I Learned

### ⚛️ React

| Concept | Description |
|---|---|
| Component breakdown | Split UI into `NavBar`, `LeftContent`, `RightContent`, `CenterContent` |
| Arrays of objects | Store card data cleanly instead of hardcoding repeated JSX |
| `.map()` | Dynamically render components from data |
| `=> ()` vs `=> {}` | Implicit vs explicit return in arrow functions |
| Dynamic JSX | Pass data into JSX using `{}` syntax |
| `key` prop | Why React needs unique keys in lists |
| Template literals | Apply dynamic Tailwind classes using `` `${card.color}` `` |

### 🎨 Tailwind CSS

| Concept | Classes Used |
|---|---|
| Flexbox layout | `flex` `flex-col` `gap` `justify-between` `items-center` |
| Sizing | `w-full` `h-full` `w-[35%]` `w-3/5` |
| Rounded corners | `rounded-[4rem]` `rounded-full` |
| Positioning | `relative` `absolute` `inset-0` `top-` `left-` `bottom-` |
| Centering | `left-1/2 -translate-x-1/2` |
| Image clipping | `overflow-hidden` |
| Dark overlay | `absolute inset-0 bg-black/60` |
| Z-index layering | `z-10` `z-30` |
| Object fit | `object-cover` |
| Google Fonts | `@import` in CSS + `@theme` in Tailwind v4 |
| Arbitrary values | `w-[35%]` `rounded-[4rem]` `bg-[#hex]` |

---

## 🛠️ Tech Stack

| Tech | Purpose |
|---|---|
| [React](https://reactjs.org/) | UI library |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Vite](https://vitejs.dev/) | Build tool & dev server |
| [Remix Icons](https://remixicon.com/) | Icon library |
| [Google Fonts](https://fonts.google.com/) | Fira Code font |

---

## 📦 Getting Started

```bash
# Clone the repo
git clone https://github.com/anjumhere/customer-segmentation-tailwind.git

# Navigate into the project
cd tailwind-project

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 👨‍💻 Author

**Adnan Anjum**
GitHub: [@anjumhere](https://github.com/anjumhere)

---

> Built while learning React and Tailwind CSS from scratch. 🚀
