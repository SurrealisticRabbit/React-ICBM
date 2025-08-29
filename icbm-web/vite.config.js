import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// The manifest is defined as a plain JavaScript object
const pwaManifest = {
  registerType: 'prompt',
  // Corrected typo: includeAssets
  includeAssets: ['favicon.ico', "apple-touch-icon.png", "maskable_icon.png"],
  manifest: {
    name: "React ICBM", // Changed to a more descriptive name
    short_name: "ICBM", // Changed to a more descriptive short name
    description: "A test project for an ICBM interface",
    icons: [
      {
        src: 'android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        // Corrected purpose: 'any' is the standard for general icons
        purpose: 'any' 
      },
      {
        src: 'android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any'
      },
      {
        src: 'apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'maskable_icon.png',
        sizes: '512x512',
        type: 'image/png',
        // The 'maskable' purpose is for special icons that can be cropped
        purpose: 'maskable',
      }
    ],
    theme_color: '#171717',
    background_color: '#f0e7db',
    display: "standalone",
    scope: '/',
    // Removed start_url to let the plugin set it automatically from 'base'
    orientation: 'portrait'
  }
};

export default defineConfig({
  base: '/React-ICBM/', 
  plugins: [react(), VitePWA(pwaManifest)],
});