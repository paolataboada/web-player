import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { ErrorHandlerProvider } from './global/errors/context/ErrorHandlerProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorHandlerProvider>
                <App />
            </ErrorHandlerProvider>
        </BrowserRouter>
    </Provider>
)