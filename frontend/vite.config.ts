import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        watch: {
            usePolling: true,
        },
        hmr: true
    }, resolve: {
        alias: {
            '@': resolve(__dirname, './src'),
            '@components': resolve(__dirname, './src/components'),
            '@types': resolve(__dirname, './src/types'),
            '@assets': resolve(__dirname, './src/assets'),
            '@hooks': resolve(__dirname, './src/hooks'),
            '@services': resolve(__dirname, './src/services'),
            '@utils': resolve(__dirname, './src/utils'),
            '@constants': resolve(__dirname, './src/constants'),
        }
    }
});