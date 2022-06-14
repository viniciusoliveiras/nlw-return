import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

import { peerDependencies, dependencies } from './package.json';

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'nlwReturn',
      formats: ['cjs', 'es'],
      fileName: format => `index.${format}.js`,
    },

    rollupOptions: {
      output: {
        inlineDynamicImports: true,
      },
      external: [
        ...Object.keys(dependencies),
        ...Object.keys(peerDependencies),
      ],
    },
    target: 'esnext',
    sourcemap: true,
  },

  define: {
    'process.env': {},
  },
});
