import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import AllItems from "../components/AllItems/AllItems";
import NotFound from "../components/shared/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../routers/PrivateRoute";
import ArtCraftView from "../components/Home/ArtCrafts/ArtCraftView";
import MyList from "../components/MyList/MyList";
import AddItem from "../components/AddItem/AddItem";
import Update from "../components/UpdateUser/Update";
import UpdateItem from "../components/UpdateItem/UpdateItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://art-craft-server-two.vercel.app/craft"),
      },
      {
        path: "/all-items",
        element: <AllItems></AllItems>,
        loader: () => fetch("https://art-craft-server-two.vercel.app/craft"),
      },
      {
        path: "/add-item",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-list",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("https://art-craft-server-two.vercel.app/craft"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/item-view/:_id",
        element: (
          <PrivateRoute>
            <ArtCraftView></ArtCraftView>
          </PrivateRoute>
        ),
        loader: () => fetch("https://art-craft-server-two.vercel.app/craft"),
      },
      {
        path: "/item-update/:_id",
        element: (
          <PrivateRoute>
            <UpdateItem></UpdateItem>
          </PrivateRoute>
        ),
        // loader: () => fetch("/fakeData.json"),
        loader: ({ params }) =>
          fetch(`https://art-craft-server-two.vercel.app/craft/${params._id}`),
      },
    ],
  },
]);
export default router;
