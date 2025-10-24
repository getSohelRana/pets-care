import { createBrowserRouter } from "react-router";
import Layout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Profile from "../pages/Profile";
import PetDetails from "../components/PetDetails/PetDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import AuthLayout from "../layout/AuthLayout";
import Loading from "../pages/Loading";
import PetsAll from "../components/PetDetails/PetsAll";
import PetsAllCards from "../components/PetDetails/PetsAllCards";
import PrivateRoutes from "../provider/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("/pets.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/petsDetails/:serviceId",
        element: <PrivateRoutes>
          <PetDetails></PetDetails>
        </PrivateRoutes>
      },
      {
        path: "/services",
        Component: Services,
        loader: () => fetch("/pets.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/pets_all_details",
        Component: Services,
        loader: () => fetch("/pets.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
    ],
  },
  {
    path: "*",
    element: <p>errro page</p>,
  },
]);
export default router;
