import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { TDesignResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "coms": path.resolve(__dirname, './src/components'),
      "pages": path.resolve(__dirname, './src/pages'),
      "img": path.resolve(__dirname, './src/assets'),
      "api": path.resolve(__dirname, './src/api')
    },
    extensions: ['.js', '.json', '.mjs', '.ts']
  },
  css: {
    preprocessorOptions: {
      scss: {
        charset: false
      }
    }
  },
  server: {
    proxy: {
      '/test': {
        target: 'http://127.0.0.1:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/test/, '')
      }

    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(),TDesignResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver(),TDesignResolver()],
    }),
  ]
})
