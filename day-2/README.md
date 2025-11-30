# Simple Counter App

A lightweight and interactive counter application built with **React**, **TypeScript**, and **Vite**. This project demonstrates a clean component-based architecture with state management and modular styling.

## Features

- **Interactive Counter**: Easily increase or decrease the count using the provided buttons.
- **State Management**: Uses React's `useState` and `useEffect` hooks to manage and monitor the counter state.
- **Console Logging**: Tracks state changes (increments/decrements) in the browser console for debugging purposes.
- **Modular Components**: Built with reusable `Button` and `Display` components.
- **Styled with CSS Modules**: Ensures scoped and conflict-free styling for components.

## Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules

### Usage in App.tsx

The `App` component serves as the central logic hub. It initializes the counter state and defines the `increase` and `decrease` functions. These functions are passed as callbacks to the `Button` components, while the current `count` is passed to the `Display` component. A `useEffect` hook observes changes in `count`, comparing it with a `useRef` value to log whether the counter was increased or decreased.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install dependencies:**

    This project uses `pnpm`.

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

4.  Open your browser and navigate to the local server address (usually `http://localhost:5173`) to verify the app is running.

## Project Structure

```text
src/
├── components/
│   ├── button/      # Reusable button component
│   └── display/     # Component to show the current count
├── App.tsx          # Main application logic
└── main.tsx         # Entry point
```