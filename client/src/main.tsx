import { createRoot } from 'react-dom/client'
import App from './components/App/App.jsx'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './components/redux/store.js'
import './components/App/css/index.css'
import Store from './components/store/store.ts'

const storeInstance = new Store()

export const Context = React.createContext({ store: storeInstance })

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
