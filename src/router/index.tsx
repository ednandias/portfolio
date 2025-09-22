import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../pages/Home";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
