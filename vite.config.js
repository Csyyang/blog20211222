import { defineConfig } from 'vite'
import styleImport from 'vite-plugin-style-import';
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "coms": path.resolve(__dirname, './src/components'),
      "pages": path.resolve(__dirname, './src/pages')
    },
    extensions: ['.js','.json']
  },
  plugins: [vue(),
  styleImport({
    libs: [
      {
        libraryName: 'vant',
        esModule: true,
        resolveStyle: (name) => `vant/es/${name}/style/index`,
      },
    ],
  }),
  ]
})
