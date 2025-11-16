// main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "./App";
import Home from "./components/Home";
import Chart from "./components/Chart";
import UMKM from "./components/UMKM";
import Article from "./components/Article";
import DetailUMKM from "./components/DetailUMKM";
import DetailArticle from "./components/DetailArticle";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <>
          <Home />
          <section className="-mt-20 md:-mt-24 lg:-mt-32 relative z-10">
            <Chart widthPercent={0.95} layout="row" />
          </section>
          <UMKM />
          <Article />
        </>
      </App>
    ),
  },

  {
    path: "/umkm",
    element: (
      <App>
        <UMKM />
      </App>
    ),
  },

  {
    path: "/umkm/:id",
    element: (
      <App>
        <DetailUMKM />
      </App>
    ),
  },

  {
    path: "/article",
    element: (
      <App>
        <Article />
      </App>
    ),
  },

  {
    path: "/article/:id",
    element: (
      <App>
        <DetailArticle />
      </App>
    ),
  },

  {
    path: "/register",
    element: (
      <App>
        <Register />
      </App>
    ),
  },

  {
    path: "/login",
    element: (
      <App>
        <Login />
      </App>
    ),
  },

  {
    path: "*",
    element: (
      <App>
        <NotFound />
      </App>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)