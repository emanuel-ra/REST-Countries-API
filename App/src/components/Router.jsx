import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import Countries from "../pages/Countries";
import Country from "../pages/Country";
import { GetCounty } from "../services/countries.service";
import Error404 from "./Error404";

function Router() {
  const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout />,
        children:[
            {
                path: "/",
                element: <Countries />,
            },
            {
                path:'/country/:n' ,                
                element: <Country />
            },
            { path: "*", element: <Error404 /> },
        ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
