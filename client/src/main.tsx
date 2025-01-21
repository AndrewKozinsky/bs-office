import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './components/redux/store.js'
import './components/App/css/index.css'

const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
)
