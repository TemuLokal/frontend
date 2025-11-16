import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import DetailUMKM from "./components/DetailUMKM";
import DetailArticle from "./components/DetailArticle";
import UMKM from "./components/UMKM";
import Article from "./components/Article";
import Register from "./components/Register";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/umkm",
    element: <UMKM />,
  },
  {
    path: "/umkm/:id",
    element: <DetailUMKM />,
  },
  {
    path: "/article",
    element: <Article />,
  },
  {
    path: "/article/:id",
    element: <DetailArticle />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
