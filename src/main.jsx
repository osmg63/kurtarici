import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFoundPage from './Pages/NotFoundPage';
import App from './Pages/App';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
