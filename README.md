# [Stream Scout](https://streamscout.lucasnethercott.com/)

## Description

A solution for quickly finding where a movie or TV show is currently available to stream, rent, or buy.
Stream Scout leverages [TMDB's API](https://developer.themoviedb.org/reference/intro/getting-started) to provide a simple cinema search experience.
View the deployment at [https://streamscout.lucasnethercott.com/](https://streamscout.lucasnethercott.com/).

## Stack

The frontend is built with TypeScript, React, and Next.js and is styled with TailWindCSS.
The data comes from a free database called [TMDB](https://www.themoviedb.org/?language=en-US).
To protect the API key, I created a few AWS lambda functions that actually make the calls to TMDB and call those from the app through AWS API Gateway.

## Todo

- improve loading states
- improve accessiblity
- unit/component tests
- refine design and styling
