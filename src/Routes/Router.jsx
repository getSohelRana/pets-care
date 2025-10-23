import { createBrowserRouter } from "react-router";
import Layout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import PetDetails from "../components/PetDetails/PetDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch('/pets.json'),
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path : '/petsDetails/:serviceId',
        Component: PetDetails,
      },
      // {
      //   path: '/allpets',
      //   element: <p>all pets</p>
      // }

    ],
  },
  {
    path: "/auth",
    element: <p>auth lay out </p>,
  },
  {
    path : '*',
    element: <p>errro page</p>
  }
]);
export default router;
