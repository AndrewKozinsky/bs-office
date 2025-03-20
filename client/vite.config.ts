import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
	server: {
		host: true, // Allow network access (e.g., 192.168.1.195)
	},
})
