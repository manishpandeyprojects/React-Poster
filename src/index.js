import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


import './index.css';
import App from './App';
import RootLayout from './routes/RootLayout';
import NewPost, { action as postAction } from './routes/NewPost';
import { LoadPosts } from './App';

const router = createBrowserRouter([

  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <App />,
        loader: LoadPosts,
        children: [
          {
            path: 'create-post',
            element: <NewPost />,
            action: postAction
          }
        ]
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
