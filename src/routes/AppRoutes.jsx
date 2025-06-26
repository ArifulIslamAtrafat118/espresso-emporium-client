import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout/RootLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    path: "/text",
    element: <h1 className="text-8xl ">text page</h1>,
  },
]);
