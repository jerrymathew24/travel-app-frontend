import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CategoryProvider } from './context/category-context.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DateProvider } from './context/date-context.jsx'
import { FilterProvider } from './context/filter-context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FilterProvider>
        <CategoryProvider>
          <DateProvider>
            <App />
          </DateProvider>
        </CategoryProvider>
      </FilterProvider>
    </BrowserRouter>
  </StrictMode>,
)
