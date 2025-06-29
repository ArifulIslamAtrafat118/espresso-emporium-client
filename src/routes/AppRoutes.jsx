import { createBrowserRouter } from "react-router";
import App from "../App";
import RootLayout from "../layouts/RootLayout/RootLayout";
import AddCoffeeForm from "../components/AddCoffee/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails/CoffeeDetails";
import UpdateCoffeeDetails from "../components/UpdateCoffeeDetails/UpdateCoffeeDetails.jsx.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
  },
  {
    path: "/add-coffee",
    Component: AddCoffeeForm
  },
  {
    path: "/edit/:id",
    loader: async({params})=>await fetch(`http://localhost:4000/coffee/details/${params.id}`),
    Component: UpdateCoffeeDetails,
  },
  {
    path: "/coffee/details/:id",
    loader: async({params})=>await fetch(`http://localhost:4000/coffee/details/${params.id}`,),
    Component: CoffeeDetails
  },
  
]);
