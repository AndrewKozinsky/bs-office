import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './components/App/css/index.scss'

const domNode = document.getElementById('root')
const root = createRoot(domNode)
const queryClient = new QueryClient()

root.render(
	<QueryClientProvider client={queryClient}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</QueryClientProvider>,
)
