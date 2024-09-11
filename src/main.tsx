import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router/index';
import { Provider } from 'react-redux';
import { StrictMode } from 'react'
import { store } from './store';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
