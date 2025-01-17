import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { store } from './components/redux/store'
import Store from './components/store/store'
import './index.css'

const storeInstance = new Store()

export const Context = createContext({ store: storeInstance })

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(
	<Context.Provider value={{ store: storeInstance }}>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</Context.Provider>,
)
