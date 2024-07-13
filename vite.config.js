import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import autoprefixer from 'autoprefixer';

export default defineConfig({
  plugins: [
    react(),
    {
      postcss: {
        plugins: [
          autoprefixer(),
        ],
      },
    },
  ],
});
