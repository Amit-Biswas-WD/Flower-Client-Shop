import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import Home from "../page/Home";
import AddProduct from "../page/AddProduct";
import AllProduct from "../page/AllProduct";
import SignIn from "../page/SignIn";
import SignUp from "../page/SignUp";
import AllProductDetails from "../components/AllProductDetails";
import Edit from "../components/Edit";
import UserInfo from "../page/UserInfo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/",
        element: <AllProduct />,
        loader: () => fetch(`http://localhost:5000/product`),
      },
      {
        path: "/allProductDetails/:id",
        element: <AllProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/edit/:id",
        element: <Edit />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/userInfo",
        element: <UserInfo />,
        loader: () => fetch(`http://localhost:5000/users`),
      },
    ],
  },
]);
