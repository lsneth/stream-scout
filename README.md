# [Stream Scout](https://streamscout.lucasnethercott.com/)

Stream Scout is a small web application that helps you quickly discover where movies
and television shows are available to stream, rent, or buy. The user interface is
built with TypeScript, React, and Next.js, and is styled with TailwindCSS. All requests
to [TMDB](https://developer.themoviedb.org/reference/intro/getting-started) are
proxied through AWS Lambda functions to keep the API key private.

**Live demo:** [https://streamscout.lucasnethercott.com/](https://streamscout.lucasnethercott.com/)

## Stack

- **Next.js** and **React** for the front end
- **TypeScript** throughout the codebase
- **TailwindCSS** for styling
- **AWS Lambda** + **API Gateway** to fetch data from TMDB
- **Cypress** for tests

## Onboarding

### Prerequisites

- Node.js 18 or later
- npm

### Installation

```bash
git clone https://github.com/lsneth/stream-scout.git
cd stream-scout
npm install
```

### Available scripts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `npm run dev`   | Start the development server at `http://localhost:3000`. |
| `npm run build` | Create an optimized production build.                    |
| `npm start`     | Run the built application in production mode.            |
| `npm run lint`  | Lint the project with ESLint.                            |
| `npm run test:e2e` | Execute the Cypress end-to-end tests.              |
| `npm run test:ct`  | Execute Cypress component tests.                   |

A pre-commit hook is configured to run `npm run test:codex` automatically, so commits may
take a little longer to complete.

## Project structure

- `src/app` – Next.js routes and shared components
- `services` – helper functions that call the AWS endpoints
- `types` – TypeScript type definitions
- `cypress` – end-to-end and component tests

## Todo

- improve loading states and speed
- improve accessibility
- more extensive testing
- refine design and styling
- user authentication and watchlists
- watchlist notifications
