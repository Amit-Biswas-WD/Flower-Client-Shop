import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../page/Home";
import AddProduct from "../page/AddProduct";
import AllProduct from "../page/AllProduct";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import AllProductDetails from "../components/AllProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/allProduct",
        element: <AllProduct />,
        loader: () => fetch(`http://localhost:5000/product`)
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
    ],
  },
]);
