import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./features/cart/cart";
import Menu, {loader as menuLoader} from "./features/menu/menu";
import CreateOrder from "./features/order/create-order";
import Order from "./features/order/order";
import AppLayout from "./ui/app-layout";
import Home from "./ui/home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
      },
    ]
  }
  
]);

export default function App() {
  return <RouterProvider router={router}/>
}
