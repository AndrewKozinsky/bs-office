import * as React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import { BrowserRouter } from 'react-router-dom'

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
