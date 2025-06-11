import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import SearchResultsPage from "./pages/SearchResults";
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
        {
          index: true,
          element: <Home />, // Render Homepage for the index route
        },
        {
            path: "searchresults",
            element: <SearchResultsPage />,
          },
         ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
);
