import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Link, RouterProvider } from "react-router";
import { router } from "./routes/AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
