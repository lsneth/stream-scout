import { defineConfig } from "cypress";
import path from 'path';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
      viteConfig: {
        resolve: {
          alias: {
            'next/link': path.resolve(__dirname, 'cypress/stubs/NextLink.tsx'),
            'next/image': path.resolve(__dirname, 'cypress/stubs/NextImage.tsx'),
            'next/font/google': path.resolve(
              __dirname,
              'cypress/stubs/NextFont.tsx',
            ),
          },
        },
      },
    },
    specPattern: 'cypress/component/**/*.cy.{ts,tsx}',
    supportFile: 'cypress/support/component.ts',
  },
});
