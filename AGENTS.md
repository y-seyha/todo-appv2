# Agent Guidelines: React Todo App

This document provides context, architecture details, and coding conventions for AI agents working in this repository.

---

## 1. Project Overview

A modern, accessible **Todo Application** built with:
- **React 19** + **Vite 8** (ESM)
- **Tailwind CSS v4** + `@tailwindcss/vite`
- **shadcn/ui** (`base-nova` style powered by `@base-ui/react`)
- **Lucide Icons** (`lucide-react`)
- **Geist Font** (`@fontsource-variable/geist`)

---

## 2. Directory Structure

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
│   │   └── utils.js        # `cn` utility export
│   ├── App.jsx             # Main application state & card layout
│   ├── index.css           # Tailwind v4 theme, keyframes, color variables
│   └── main.jsx            # Application entry point
├── components.json         # shadcn CLI configuration
├── eslint.config.js        # ESLint flat config with Vite React Refresh
├── package.json
└── vite.config.js          # Vite config with `@` alias & Tailwind plugin
```

---

## 3. Design System & Theme

### Color Palette (`.dark`)
The application is styled with a custom dark palette in [src/index.css](file:///e:/Dichi%20Course/07_ReactJS/react-todo-app/src/index.css):
- **Background**: `#171717` (`--background` / `bg-background`)
- **Card**: `#1F1F1F` (`--card` / `bg-card`)
- **Foreground / Text**: `#EDE9E3` (`--foreground` / `text-foreground`)
- **Primary / Sage**: `#89A88F` (`--primary` / `bg-primary`, `text-primary`)
- **Secondary / Input**: `#292929` (`--secondary`, `--input`, `--muted`)
- **Muted Text**: `#A8A29E` (`--muted-foreground`)
- **Accent / Destructive**: `#C98B8B` (`--accent`, `--destructive`)
- **Border**: `rgba(255, 255, 255, 0.08)` (`--border` / `border-border`)

### Layout Guidelines
- **Screen Centering**: [src/App.jsx](file:///e:/Dichi%20Course/07_ReactJS/react-todo-app/src/App.jsx) uses `min-h-screen min-h-dvh flex items-center justify-center p-4 sm:p-6`.
- **Card Dimensions**: `<Card>` has a minimum height of `min-h-[580px] sm:min-h-[620px]` with `flex flex-col` and `my-auto` so it does not jump or collapse when switching between filters or when lists are empty.
- **CardContent**: Uses `flex-1 flex flex-col` with `<TodoList>` expanding via `flex-1 min-h-[220px]`.
- **CardFooter**: Anchored to the bottom using `mt-auto`.

---

## 4. shadcn & Base UI Conventions

- **Primitive Library**: Components in `src/components/ui/` use `@base-ui/react` primitives (not Radix).
- **Active / Checked States**: Base UI uses standard data attributes:
  - Tabs active state: `data-active:bg-background data-active:text-foreground`
  - Checkbox checked state: `data-checked:bg-primary data-checked:border-primary`
- **Tooltips**:
  - Always wrap the application in `<TooltipProvider>` (configured in `App.jsx`).
  - Use the `render` prop on `<TooltipTrigger>` (e.g. `render={<Button ... />}`) to prevent nesting invalid button elements.
- **Import Alias**: Always import project files using the `@/` path alias configured in `vite.config.js` and `jsconfig.json`.

---

## 5. Development Workflows & Scripts

```bash
# Start local development server
npm run dev

# Run production build validation
npm run build

# Run linting check
npm run lint

# Add new shadcn components
npx shadcn add <component-name> -y
```

---

## 6. Coding Standards for Agents

1. **Accessibility**: All interactive icon-only buttons must have descriptive `aria-label` attributes and keyboard focus outlines (`focus-visible:ring-*`).
2. **Lint Cleanliness**: Maintain 0 ESLint errors. Components should avoid unused imports and keep CVA constants compatible with React Refresh.
3. **Responsive Stability**: Do not remove `min-h-[580px] sm:min-h-[620px]` or centering flex utilities without user confirmation.
