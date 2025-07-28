import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home";
import Nosotros from "../pages/Nosotros";
import Servicios from "../pages/Servicios";
import Cursos from "../pages/Cursos";
import Contacto from "../pages/Contacto";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "nosotros", element: <Nosotros /> },
      { path: "servicios", element: <Servicios /> },
      { path: "cursos", element: <Cursos /> },
      { path: "contacto", element: <Contacto /> }
    ]
  }
]);
