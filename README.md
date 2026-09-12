# Task Flow — Modern React Todo App

A sleek, accessible, and responsive task management application built with **React 19**, **Vite**, **Tailwind CSS v4**, and **shadcn/ui** (`base-nova` style powered by `@base-ui/react`).

---

## 🎯 Purpose of This Project

The primary purpose of this project is to build a modern, production-grade Todo application that demonstrates modern React best practices and bleeding-edge web technologies:

1. **Modern Component Architecture**: Moving away from ad-hoc HTML controls and styling toward headless, accessible UI primitives using **shadcn/ui** and **Base UI** (`@base-ui/react`).
2. **Next-Generation Styling**: Utilizing **Tailwind CSS v4** with CSS variable-driven themes, OKLCH/hex color tokens, and smooth micro-animations.
3. **Flawless User Experience**: Delivering a centered, distraction-free interface with stable dimensions, live search, multi-view filters with badge counters, real-time completion progress, and keyboard accessibility.

---

## 📖 What Happened: The Evolution

This application evolved through several key milestones:

1. **Initial Setup**: Started as a React + Vite application with custom dark styling and basic input elements.
2. **shadcn/ui Setup & Integration**:
   - Initialized the shadcn CLI with the `base-nova` preset and Base UI primitives.
   - Installed core UI components: `Card`, `Button`, `Input`, `Checkbox`, `Badge`, `Tabs`, `Separator`, and `Tooltip`.
   - Replaced all raw HTML inputs, buttons, and tab controls with accessible shadcn components.
3. **Build & Config Fixes**:
   - Resolved path alias resolution in `vite.config.js` (`@` pointing to `./src`).
   - Configured ESLint to support standard shadcn CVA exports (`allowConstantExport: true`).
4. **Theme Synchronization**:
   - Synced the shadcn `.dark` theme variables with custom dark palette tokens (`#171717` background, `#1F1F1F` card, `#89A88F` sage primary, `#C98B8B` accent/destructive).
5. **Layout & UX Polish**:
   - Centered the container vertically and horizontally on all screen sizes using `min-h-screen min-h-dvh flex items-center justify-center`.
   - Added a stable minimum height (`min-h-[580px] sm:min-h-[620px]`) and flexible list container (`flex-1 min-h-[220px]`) to ensure the card never jumps or collapses when switching between active, completed, or empty lists.

---

## ✨ Features

- ⚡ **Add & Complete Tasks**: Quick task entry via Enter key or Add button, paired with accessible animated checkboxes.
- 🔍 **Live Search**: Instant real-time filtering with search icon prefix and one-click clear button.
- 🏷️ **Status Filters**: Tabs to switch between **All**, **Active**, and **Completed** tasks, each with dynamic count badges.
- 📊 **Progress Tracking**: Real-time progress bar and "X of Y Done" status badge reflecting overall task completion.
- 🗑️ **Bulk Actions**: Dedicated "Clear completed" button anchored at the bottom with a count indicator.
- 💬 **Interactive Tooltips**: Tooltips on quick actions (Delete task, Clear search) using `@base-ui/react/tooltip`.
- 📱 **Fully Responsive**: Perfectly centered on desktop and mobile screens, with a stable card height that prevents layout shifts.
- 🎨 **Custom Dark Theme**: Cohesive dark aesthetic styled with curated contrast and typography from `@fontsource-variable/geist`.

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **React 19** | Component framework & reactive state management |
| **Vite 8** | High-performance ESM build tool and development server |
| **Tailwind CSS v4** | Modern utility-first styling with theme CSS variables |
| **shadcn/ui** | Accessible UI component primitives (`base-nova` style) |
| **@base-ui/react** | Headless component primitives powering shadcn components |
| **Lucide React** | Consistent, crisp icons across the application |
| **Geist Font** | Modern variable sans-serif typography |

---

## 📂 Project Structure

```text
react-todo-app/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── ui/             # shadcn Base UI primitives
│   │   │   ├── badge.jsx
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── checkbox.jsx
│   │   │   ├── input.jsx
│   │   │   ├── separator.jsx
│   │   │   ├── tabs.jsx
│   │   │   └── tooltip.jsx
│   │   ├── TodoFilter.jsx  # Tabs filter ("all" | "active" | "completed")
│   │   ├── TodoFooter.jsx  # Remaining count & Clear Completed action
│   │   ├── TodoHeader.jsx  # App title, date, progress bar & stats badge
│   │   ├── TodoInput.jsx   # Add task input & submit button
│   │   ├── TodoItem.jsx    # Individual task row with checkbox & delete
│   │   ├── TodoList.jsx    # Task list & animated empty states
│   │   └── TodoSearch.jsx  # Search bar with clear button
│   ├── lib/
│   │   └── utils.js        # `cn` class merger utility
│   ├── App.jsx             # Main state orchestration & card layout
│   ├── index.css           # Tailwind v4 theme, keyframes, and color variables
│   └── main.jsx            # Application root
├── components.json         # shadcn configuration
├── eslint.config.js        # ESLint flat configuration
├── package.json
└── vite.config.js          # Vite configuration with @ alias
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation
1. Clone or open the project folder:
   ```bash
   cd react-todo-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the local development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
Create a production-ready bundle:
```bash
npm run build
```

### Linting
Check code quality:
```bash
npm run lint
```
