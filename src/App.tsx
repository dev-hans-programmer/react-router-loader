import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Menu from "./features/menu/menu";
import Home from "./ui/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

export default function App() {
  return <RouterProvider router={router}/>
}
