# Streamflix - Netflix Clone App

**Streamflix** is a Netflix clone application built using **React**, **TypeScript**, and **Tailwind CSS**. It allows users to explore a vast collection of movies and TV shows, add content to their favorites list, and perform searches using filters like title and genre. The app is connected to the **TMDB API** for managing movie data and handling user authentication securely.

## Features

- **Content Exploration**: Users can browse through popular, trending, and favorite movies and TV shows.
- **Advanced Search**: Search for movies and TV shows using filters such as title and genre.
- **Favorites CRUD**: Users can add or remove content from their favorites list.
- **User Authentication**: Implements a custom authorization flow using session tokens provided by the TMDB API.
- **Dark/Light Theme**: Switch between dark and light themes using **Tailwind CSS** and **SCSS** variables.
- **Error Handling**: Comprehensive error management with `try-catch` blocks and error screens in case of issues with the API connection.

## 🛠 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS, Motion, Shadcn
- **Bundler**: Vite
- **Movie API**: TMDB

## React Hooks Used

- `useState`: Manages the state of the application.
- `useEffect`: Handles side effects and data synchronization.
- `useNavigate`: Provides navigation functionality between pages.
- `useLocation`: Retrieves the current route location.
- `useMemo`: Optimizes expensive calculations by memoizing results.
- `useSuspenseQuery`: (for handling data fetching with React Suspense).

## Other Tools and Libraries

- **Context API**: Global state management.
- **React Router**: Routing between pages.
- **Suspense and Lazy Loading**: Optimized component loading to improve performance.
- **Custom Hooks**: Custom hooks for specific functionality.
- **Utility Types**: TypeScript utility types for better data management.

## Authorization and Authentication Protocol

The authentication mechanism in the app uses a custom authorization flow, where users authorize the app to access their TMDB account through session tokens:

1. **Delegated Authentication**: Users authenticate with TMDB and grant permissions to the app.
2. **Authorization with Request Token**: A `request token` is obtained to authorize the app to access user data.
3. **Session-based Authentication**: The resulting `session_id` is used to authorize access to the user's content.

This flow is based on a custom authorization model, similar to OAuth, but is adapted to TMDB's unique structure.

## Data Structures

The app uses a variety of data structures for efficient data management:

- **Record**
- **Map**
- **Array**
- **Objects**

## Themes

The application supports a **dark mode** and **light mode**, allowing users to toggle between themes using **SCSS** variables and **Tailwind CSS**.

## Modular Structure

The app is structured in a modular way to ensure scalability and maintainability:

- **Reusable and modular components**.
- **Clear and specific interfaces and data types**.
- **Clean code and best practices**: Following principles of software development to maintain readability and maintainability.

## Future Features

Upcoming versions of the app will include:

- **Responsiveness**: Making the app responsive for mobile devices using Tailwind CSS breakpoints.
- **Rating System**: Allowing users to rate movies and TV shows.

## 🔧 Installation

Clone the repository and run the project locally:

```sh
git clone https://github.com/agustinpaul0/StreamFlix
cd streamflix
npm install
npm run dev
