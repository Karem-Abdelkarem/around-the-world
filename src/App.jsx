import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Country from "./pages/Country";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        Component: Layout,
        ErrorBoundary: ErrorPage,
        children: [
          {
            index: true,
            Component: Home,
          },
          {
            path: ":country",
            Component: Country,
          },
        ],
      },
    ],
    {
      basename: "/around-the-world",
    },
  );

  return <RouterProvider router={router} />;
}

export default App;
