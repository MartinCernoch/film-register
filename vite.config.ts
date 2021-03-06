import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    "port": 3005 
  },
  plugins: [
		vue(),
		WindiCSS()
	]
})
