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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/AllItems",
        element: <AllItems></AllItems>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/AddItem",
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: "/MyList",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/craft"),
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
        loader: () => fetch("/fakeData.json"),
      },
    ],
  },
]);
export default router;
