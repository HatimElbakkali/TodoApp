# TodoApp

A simple Todo application built with React and TypeScript. It lets you list, create, update and complete todos, using a shared form component for both creating and editing.

## Tech Stack

<p> <img src="https://skillicons.dev/icons?i=react,ts,vite,tailwind,eslint" alt="Tech stack icons" /> </p>

Librarys:
Axios · React Router · React Hook Form

## Features

- List all todos
- Create a new todo
- Update an existing todo
- Mark a todo as completed
- Form validation (required title)
- Single reusable `TodoForm` component for create and update

## Project Structure

```
src/
├── Api/
│   ├── axios.ts          # Axios instance and base configuration
│   └── Todo.ts           # API functions (get, create, update...)
├── components/
│   ├── Layout.tsx        # Global layout
│   ├── NavBar.tsx        # Navigation bar
│   └── Todo/
│       ├── TodoCreate.tsx
│       ├── TodoForm.tsx  # Shared form (create + update)
│       ├── TodoList.tsx
│       └── TodoUpdate.tsx
├── Data/
│   └── database.json     # Mock data
├── modules/
│   └── TodoModel.ts      # Todo model
├── App.tsx               # Routes
├── index.css
└── main.tsx              # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone <your-repo-url>
cd TodoApp
npm install
```

### Run the app

```bash
npm run dev
```

The app runs on `http://localhost:5173` by default.

### Mock API

The data lives in `src/Data/database.json`. If you use [json-server](https://github.com/typicode/json-server) to serve it:

```bash
npx json-server --watch src/Data/database.json --port 3000
```

Then make sure the `baseURL` in `src/Api/axios.ts` matches that port.

## Scripts

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the dev server         |
| `npm run build`   | Build for production         |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint                   |

## How the Form Works

`TodoForm` reads the `id` from the URL with `useParams`:

- No `id` → create mode (empty default values)
- With `id` → update mode (default values fetched from the API)

On submit, it calls `Api.create` or `Api.update`, then redirects to the todo list.

## Possible Improvements

- Replace the `TodoModel` class with a TypeScript `interface`
- Add delete confirmation
- Use React Query for data fetching and caching
- Add filters (all / completed / pending)
- Add tests

## 📬 Connect

If you want to see more of my work or contact me:
Portfolio: [https://hatimelbakkali.web.app/](https://hatimelbakkali.web.app/)

Thank you!

---

Made with ❤️ by **Hatim Elbakkali**.