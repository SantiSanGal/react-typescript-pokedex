import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { router } from './router/index';
import { StrictMode } from 'react'
import './index.css'
import { store } from './store/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>  
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
