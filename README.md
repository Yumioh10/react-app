# React + TanStack Router Boilerplate

A minimal boilerplate for building React applications with TanStack Router, TypeScript, and Vite.

## Features

- ⚡️ [Vite](https://vite.dev) - Fast build tool and dev server
- ⚛️ [React](https://react.dev) - UI library
- 🧭 [TanStack Router](https://tanstack.com/router) - Type-safe routing
- 📘 [TypeScript](https://www.typescriptlang.org) - Type safety
- 🔧 [ESLint](https://eslint.org) - Code linting
- 🛠️ [TanStack Router Devtools](https://tanstack.com/router) - Development tools

## Getting Started

### Install Dependencies

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

### Build

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Preview

```bash
pnpm preview
# or
npm run preview
# or
yarn preview
```

## Project Structure

```
src/
├── routes/          # Route definitions
│   ├── __root.tsx   # Root route layout
│   ├── index.tsx    # Home route (/)
│   └── about.tsx    # About route (/about)
├── router.tsx       # Router configuration
├── main.tsx         # Application entry point
└── index.css        # Global styles
```

## Adding Routes

Create new route files in the `src/routes/` directory. TanStack Router will automatically pick them up and generate the route tree.

Example: Create `src/routes/contact.tsx` for a `/contact` route.

## Learn More

- [TanStack Router Documentation](https://tanstack.com/router/latest)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
# react-app
