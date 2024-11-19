import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./features/pages/ErrorPage";
import PubMedArticlesPage from "./routes/pubmedarticles";
import DoajArticlesPage from "./routes/doajarticles";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pubmed",
    element: <PubMedArticlesPage />,
  },
  {
    path: "/doaj",
    element: <DoajArticlesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
