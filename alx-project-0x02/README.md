# Next.js Project Setup and Basics

This repository contains a comprehensive Next.js application built with TypeScript and Tailwind CSS. It demonstrates modern web development practices including component-based architecture, routing, API integration, and responsive design.

## Features

- **Next.js with Pages Router**: Modern React framework with file-based routing
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Reusable Components**: Modular and maintainable component architecture
- **API Integration**: Fetching data from external APIs (JSONPlaceholder)
- **Interactive UI**: Modals, forms, and dynamic content management

## Project Structure

```
alx-project-0x02/
├── components/
│   ├── common/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── PostCard.tsx
│   │   ├── PostModal.tsx
│   │   └── UserCard.tsx
│   └── layout/
│       └── Header.tsx
├── interfaces/
│   └── index.ts
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── about.tsx
│   ├── home.tsx
│   ├── index.tsx
│   ├── posts.tsx
│   └── users.tsx
├── public/
│   └── assets/
│       └── images/
├── styles/
│   └── globals.css
├── .eslintrc.json
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alx-project-0x02
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev -- -p 3000
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages

- **Home** (`/`): Welcome page with project overview
- **Home** (`/home`): Interactive page with cards and modal for adding posts
- **About** (`/about`): Information about the project with button component demos
- **Posts** (`/posts`): Displays posts fetched from JSONPlaceholder API
- **Users** (`/users`): Displays users fetched from JSONPlaceholder API

## Components

### Common Components

- **Button**: Reusable button with different sizes and shapes
- **Card**: Basic card component for displaying content
- **PostCard**: Specialized card for displaying post information
- **PostModal**: Modal component for adding new posts
- **UserCard**: Specialized card for displaying user information

### Layout Components

- **Header**: Navigation header with links to all pages

## Technologies Used

- **Next.js**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **ESLint**: Code linting and quality assurance

## API Integration

The application fetches data from:
- **JSONPlaceholder API**: For posts and users data
- **Posts API**: `https://jsonplaceholder.typicode.com/posts`
- **Users API**: `https://jsonplaceholder.typicode.com/users`

## Development

### Code Quality

- ESLint configuration for consistent code style
- TypeScript for type safety
- Component-based architecture for maintainability

### Best Practices

- Reusable components with TypeScript interfaces
- Responsive design with Tailwind CSS
- Clean separation of concerns
- Proper error handling for API calls

## License

This project is part of the ALX curriculum and is for educational purposes.