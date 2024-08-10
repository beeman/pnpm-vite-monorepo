import {defineConfig} from 'vite'
import {viteStaticCopy} from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'dist',
    target: 'node20',
    rollupOptions: {
      input: 'src/index.ts',
      output: {
        format: 'cjs',
        entryFileNames: '[name].js',
      },

    },
    minify: false,
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'package.json',
          dest: '',
        },
      ],
    }),
  ],
})
