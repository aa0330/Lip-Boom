import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({

  server: {
    // 设置server端口号. 默认5173
    port: 3000,
    open: '/',          // 自动打开浏览器运行页面  路由地址为'/'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [react()],
})
