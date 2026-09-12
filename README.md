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

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (ships with Node.js)
- An **Appwrite** instance (cloud or self-hosted) — *required only for Mega-Blog*
- A **TinyMCE API key** — *required only for Mega-Blog's rich-text editor*

---

## Project Structure

```
React-projects/
├── Mega-Blog/                    # Full-stack blog application
│   ├── .env.sample               # Environment variable template
│   ├── package.json
│   ├── vite.config.js
│   ├── index.html
│   └── src/
│       ├── main.jsx              # Router configuration & app entry
│       ├── App.jsx               # Root layout (auth check, Header, Footer)
│       ├── conf/
│       │   └── Conf.jsx          # Environment config reader
│       ├── appwrite/
│       │   ├── Auth.jsx          # AuthService (signup, login, logout)
│       │   └── Config.jsx        # Service (posts CRUD, file storage)
│       ├── Store/
│       │   ├── Store.jsx         # Redux store configuration
│       │   └── AuthSlice.jsx     # Auth state slice (login/logout)
│       └── components/
│           ├── Index.js          # Barrel exports
│           ├── AuthLayout.jsx    # Protected route guard
│           ├── Header/           # Navigation bar + logout button
│           ├── Footer/           # Site footer
│           ├── post-form/
│           │   └── PostForm.jsx  # Create/edit post form
│           ├── RTE.jsx           # TinyMCE rich-text editor wrapper
│           ├── PostCard.jsx      # Post preview card
│           └── pages/            # Route pages (Home, AllPosts, Post, etc.)
│
├── React_router/                 # Routing demo
│   ├── package.json
│   └── src/
│       ├── main.jsx              # Route definitions
│       ├── Layout.jsx            # Shared Header/Outlet/Footer layout
│       └── components/
│           ├── Header/
│           ├── Footer/
│           ├── Home/
│           ├── About/
│           ├── Contact/
│           └── Github/
│
├── minicontext/                  # Context API demo
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── context/
│       │   ├── UserContext.jsx
│       │   └── UserContextprovider.jsx
│       └── components/
│           ├── Login.jsx
│           └── profile.jsx
│
├── password_generator/           # Password generator tool
│   ├── package.json
│   └── src/
│       └── App.jsx               # All logic in a single component
│
├── themeswitcher/                 # Dark/light theme toggle
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── Context/
│       │   └── Theme.jsx         # ThemeContext + useTheme hook
│       └── Components/
│           ├── Themebtn.jsx
│           └── Card.jsx
│
├── toList/                       # Todo list with localStorage
│   ├── package.json
│   └── src/
│       ├── App.jsx
│       ├── Context/
│       │   ├── TodoContext.jsx   # TodoContext + useTodo hook
│       │   └── Index.jsx         # Barrel export
│       └── Components/
│           ├── TodoForm.jsx
│           └── Todoitem.jsx
│
├── .gitignore
└── README.md
```

---

## Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yay1503/React-projects.git
cd React-projects
```

### 2. Install Dependencies

Each sub-project maintains its own `node_modules`. Install them individually:

```bash
# Install all projects at once
cd Mega-Blog      && npm install && cd ..
cd React_router   && npm install && cd ..
cd minicontext    && npm install && cd ..
cd password_generator && npm install && cd ..
cd themeswitcher  && npm install && cd ..
cd toList         && npm install && cd ..
```

### 3. Configure Environment (Mega-Blog Only)

Copy the sample environment file and fill in your Appwrite credentials:

```bash
cd Mega-Blog
cp .env.sample .env
```

Edit `.env` with your values:

```env
VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="your_project_id"
VITE_APPWRITE_DATABASE_ID="your_database_id"
VITE_APPWRITE_COLLECTION_ID="your_collection_id"
VITE_APPWRITE_BUCKET_ID="your_bucket_id"
```

> **Note:** You also need a TinyMCE API key. Add `VITE_TINYMCE_API_KEY="your_key"` to your `.env` file for the rich-text editor to load.

### 4. Run a Project

Start any project's dev server:

```bash
cd <project-folder>
npm run dev
```

Vite will start a local dev server (default: `http://localhost:5173`).

### 5. Build for Production

```bash
cd <project-folder>
npm run build    # Output → dist/
npm run preview  # Preview the production build locally
```

---

## Usage

### Mega-Blog

1. Navigate to `http://localhost:5173`
2. **Sign up** with your email and password to create an account
3. **Log in** — the app persists your session across reloads
4. Click **Add Post** to create a new blog entry with a title, rich-text content, and featured image
5. Browse **All Posts** to see every post; click any post card to read the full article
6. As the post author, use the **Edit** / **Delete** buttons on the post detail page
7. **Log out** via the header button to end your session

### React_router

1. Navigate to `http://localhost:5173`
2. Use the navigation header to switch between **Home**, **About**, **Contact**, and **GitHub** pages
3. Observe the persistent header/footer layout across all routes

### minicontext

1. Navigate to `http://localhost:5173`
2. Enter a **username** and **password** in the login form and click **Submit**
3. The Profile component will render `Welcome <username>` — demonstrating shared state via Context

### password_generator

1. Navigate to `http://localhost:5173`
2. Adjust the **length slider** (6–100) to set password length
3. Toggle the **Numbers** checkbox to include digits
4. Toggle the **Characters** checkbox to include special characters
5. Click **Copy** to copy the generated password to your clipboard

### themeswitcher

1. Navigate to `http://localhost:5173`
2. Toggle the **theme switch** in the top-right corner to swap between light and dark modes
3. Observe the product card re-styling in real time

### toList (Todo List)

1. Navigate to `http://localhost:5173`
2. Type a todo in the input field and click the **Add** button
3. Click the **checkbox** to mark a todo as complete/incomplete
4. Click the **pencil icon** to enter edit mode; modify the text and save
5. Click the **delete icon** to remove a todo
6. Refresh the page — your todos persist via `localStorage`

---

<p align="center">
  Built with ⚛️ React &nbsp;·&nbsp; ⚡ Vite &nbsp;·&nbsp; 🎨 Tailwind CSS
</p>
