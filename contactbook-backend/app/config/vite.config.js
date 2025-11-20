// [Frontend Project]/vite.config.js (THAY THẾ TOÀN BỘ)

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // DÒNG NÀY RẤT QUAN TRỌNG!

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            // ĐỊNH NGHĨA ALIAS @/ CHÍNH XÁC
            '@': path.resolve(__dirname, './src')
        }
    }
})