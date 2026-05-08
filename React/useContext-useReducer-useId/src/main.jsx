import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FiltersProvider } from './context/filters.jsx'

const root = createRoot(document.getElementById('root'))
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>,
)
