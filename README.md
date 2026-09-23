# React Projects

A collection of six standalone React applications demonstrating progressive mastery of the React ecosystem — from core hooks and Context API fundamentals to full-stack blogging with Appwrite BaaS, Redux Toolkit state management, and TinyMCE rich-text editing.

---

## Table of Contents

- [Projects Overview](#projects-overview)
- [Features](#features)
- [Tech Stack & Prerequisites](#tech-stack--prerequisites)
- [Project Structure](#project-structure)
- [Setup & Installation](#setup--installation)
- [Usage](#usage)

---

## Projects Overview

| # | Project | Description |
|---|---------|-------------|
| 1 | **Mega-Blog** | Full-stack blogging platform with Appwrite authentication, CRUD posts, image uploads, and a rich-text editor |
| 2 | **React_router** | Multi-page app demonstrating React Router v7 with nested layouts (Home, About, Contact, GitHub) |
| 3 | **minicontext** | Minimal demo of the React Context API for sharing user state between Login and Profile components |
| 4 | **password_generator** | Configurable password generator with adjustable length, optional numbers, and special characters |
| 5 | **themeswitcher** | Light/dark theme toggle built with Context API and Tailwind CSS `dark:` utilities |
| 6 | **toList** | Todo list manager with add, edit, delete, toggle-complete, and `localStorage` persistence |

---

## Features

### Mega-Blog
- User registration and email/password authentication via Appwrite
- Session persistence — auto-login on page reload via `getCurrentUser()`
- Create, read, update, and delete blog posts (full CRUD)
- Rich-text content editing with TinyMCE (image embedding, tables, code blocks, etc.)
- Featured image upload and preview via Appwrite Storage
- Post status management (`active` / `inactive`)
- Auto-generated URL slugs from post titles
- Protected routes with an `AuthLayout` guard component
- Centralized state management with Redux Toolkit (`auth` slice)
- Client-side routing with React Router v7 (nested layout with Header/Footer)

### React_router
- Client-side routing with `createBrowserRouter` and nested `<Outlet />` layout
- Shared persistent Header and Footer across all pages
- Four routed pages: Home, About, Contact, GitHub

### minicontext
- React Context API for global user state management
- Login form that sets user context on submission
- Profile component that reads and displays the logged-in user's name
- Conditional rendering based on authentication state

### password_generator
- Random password generation from uppercase letters
- Configurable password length via range slider (6–100 characters)
- Optional inclusion of numeric digits
- Optional inclusion of special characters (`~!@#$%^&*()_+-=[]`)
- One-click copy to clipboard with visual text selection

### themeswitcher
- Light and dark theme toggling
- Theme state managed via Context API with a custom `useTheme` hook
- Dynamic HTML class manipulation for Tailwind CSS `dark:` variant support
- Product card component demonstrating themed UI

### toList (Todo List)
- Add new todo items
- Inline editing of existing todos
- Delete individual todos
- Toggle completion status per item
- Persistent storage via `localStorage` (survives page reloads)
- State shared across components via Context API with a custom `useTodo` hook

---

## Tech Stack & Prerequisites

### Common Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | `^19.2.6` | UI library |
| [Vite](https://vite.dev/) | `^8.0.12` | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | `^4.3.0` | Utility-first styling *(all projects except minicontext)* |
| [ESLint](https://eslint.org/) | `^10.3.0` | Code linting |

### Mega-Blog Specific

| Technology | Purpose |
|------------|---------|
| [Appwrite SDK](https://appwrite.io/) `^25.2.0` | Backend-as-a-Service (Auth, Database, Storage) |
| [Redux Toolkit](https://redux-toolkit.js.org/) `^2.12.0` | Global state management |
| [React Redux](https://react-redux.js.org/) `^9.3.0` | React bindings for Redux |
| [React Router DOM](https://reactrouter.com/) `^7.15.1` | Client-side routing |
| [React Hook Form](https://react-hook-form.com/) `^7.76.1` | Performant form handling |
| [TinyMCE React](https://www.tiny.cloud/) `^6.3.0` | WYSIWYG rich-text editor |
| [html-react-parser](https://github.com/remarkablemark/html-react-parser) `^6.1.2` | Parse HTML strings into React elements |
