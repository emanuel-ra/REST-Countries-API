import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./Layout";
import Countries from "../pages/Countries";
import Country from "../pages/Country";
import { GetCounty } from "../services/countries.service";

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
                path:'/country' ,                
                element: <Country />
            }
        ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
