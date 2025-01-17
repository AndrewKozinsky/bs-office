import App from './App.jsx';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './components/redux/store.js';
import './index.css';
import Store from './components/store/store.js';

const storeInstance = new Store();

export const Context = React.createContext({ store: storeInstance });

ReactDOM.createRoot(document.getElementById('root')).render(
    <Context.Provider value={{ store: storeInstance }}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </Context.Provider>
);
