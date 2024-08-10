import react from '@vitejs/plugin-react-swc';
import {defineConfig} from 'vitest/config';

export default defineConfig(({ mode }) => ({
    plugins: [react()],
    resolve: {
        conditions: mode === 'test' ? ['browser'] : [],
    },
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.js'],
    },
}));