import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Cart from "./features/cart/cart";
import Menu, { loader as menuLoader } from "./features/menu/menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/create-order";
import Order, { loader as orderLoader } from "./features/order/order";
import { createOrder } from "./services/api-restaurant";
import AppLayout from "./ui/app-layout";
import Error from "./ui/error";
import Home from "./ui/home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        errorElement: <Error />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
