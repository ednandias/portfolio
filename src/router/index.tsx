import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Home } from "../screens/Home";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}
