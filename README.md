# Lilac (Next.js Version)

This is an exact port of the Lilac website to Next.js using JavaScript and Tailwind CSS.

## Setup

1.  **Install Dependencies**
    Since there were permission issues during setup, please run the following command manually:
    ```bash
    npm install
    ```
    If you encounter permission errors, you may need to use `sudo` or fix your npm permissions.

2.  **Run Development Server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Structure

-   `app/`: Main application pages and layout (App Router).
-   `components/`: Reusable UI components (Navbar, Hero, etc.).
-   `public/`: Static assets (images).
-   `styles/`: Global styles (if any supplementary styles were needed).

## Features

-   **Animations**: Custom `RevealOnScroll` component for scroll-triggered fade-ins.
-   **Styling**: Tailwind CSS for utility-first styling.
-   **Fonts**: Google Fonts (Lato, Playfair Display) optimized via `next/font`.
