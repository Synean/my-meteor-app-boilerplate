import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { meteor } from 'meteor-vite/plugin';

export default defineConfig({
  plugins: [
    svelte({
      configFile: 'svelte.config.mjs'
    }),
    meteor({
        clientEntry: 'client/entry-vite.ts',
        serverEntry: 'server/entry-vite.ts',
        enableExperimentalFeatures: true, // Required to enable server bundling.
        stubValidation: {
          warnOnly: true,
        }
    })
  ],
})