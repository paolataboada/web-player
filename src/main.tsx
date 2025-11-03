import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AppThemeProvider } from './theme/AppThemeProvider.tsx'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { ErrorHandlerProvider } from './global/errors/context/ErrorHandlerProvider.tsx'
import { es } from "date-fns/locale"

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <AppThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={es}>
                <BrowserRouter>
                    <ErrorHandlerProvider>
                        <App />
                    </ErrorHandlerProvider>
                </BrowserRouter>
            </LocalizationProvider>
        </AppThemeProvider>
    </Provider>
)