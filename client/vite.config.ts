import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

const key = path.resolve(__dirname, './src/localhost+1-key.pem')
const cert = path.resolve(__dirname, './src/localhost+1.pem')

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: path.resolve(__dirname, './src'),
		},
	},
	server: {
		https: {
			key: fs.readFileSync(key),
			cert: fs.readFileSync(cert),
		},
		host: true, // Allow network access (e.g., 192.168.1.195)
		// port: 443, // вы можете выбрать любой порт
	},
})
