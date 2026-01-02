# CAFECA Official Web

The official website for CAFECA, dedicated to building a decentralized corporate infrastructure leveraging biometric technology and blockchain digital signatures.

## Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Linting & Formatting**: ESLint, Prettier

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/CAFECA-IO/cafeca.com.tw.git
    cd cafeca.com.tw
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

### Docker Swarm Deployment

To build and serve the application on a specific port (e.g., 10015):

```bash
npm run swarm
```

## Project Structure

-   `src/app`: Next.js App Router pages and layouts.
    -   `[locale]`: Dynamic route segment for internationalization.
-   `src/components`: Reusable UI components.
    -   `common`: Global components like `Navbar`, `Footer`.
    -   `landing_page`: Components specific to the landing page sections.
-   `src/locales`: JSON translation files for supported languages.
-   `src/constants`: Configuration constants and environment variable mappings.
-   `src/i18n`: Configuration for `next-intl` (routing, request handling).

## Internationalization (i18n)

This project supports multiple languages using `next-intl`. The supported locales are:

-   English (`en`)
-   Traditional Chinese (`zh-tw`) - Default
-   Simplified Chinese (`zh-cn`)
-   Korean (`ko`)
-   Japanese (`ja`)

The URL structure follows the pattern `/[locale]/...`. For example:
-   `/zh-tw` (Home - Traditional Chinese)
-   `/en` (Home - English)

## License

Copyright © CAFECA Inc. All rights reserved.
