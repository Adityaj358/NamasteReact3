import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import ErrorPage from "./Components/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import ContactUs from "./Components/Contact";
import { Provider } from "react-redux";
import AppStore from "../utils/AppStore";
import userContext from "../utils/userContext";
import Cart from "./Components/Cart";
import Footer2 from "./Components/Footer2";
//import Grocery from "./Components/Grocery";

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <Provider store={AppStore}>
      <div>
        <Header />
        <Outlet />
        <Footer2/>
        <Footer />
      </div>
    </Provider>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/AboutUs",
        element: <AboutUs />,
      },
      {
        path: "/ContactUs",
        element: <ContactUs />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
      
            <Grocery />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouter} />);
