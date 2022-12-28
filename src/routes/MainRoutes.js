import { lazy } from 'react';

// project imports
import MainLayout from '../layout/MainLayout';
import Loadable from "../components/Loadable";

// page routing
const HomePage = Loadable(lazy(() => import("../views/home")));
const StorePage = Loadable(lazy(() => import("../views/store")));
const ProductDetail = Loadable(lazy(() => import("../views/productDetail")));
const CartPage = Loadable(lazy(() => import("../views/cart")));
const CheckoutPage = Loadable(lazy(() => import("../views/checkout")));
const OrderSuccessPage = Loadable(lazy(() => import("../views/orderSuccess")));



// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/home",
      element: <HomePage />,
    },
    {
      path: "/store/:storeId",
      element: <StorePage />,
    },
    {
      path: "/book/:bookId",
      element: <ProductDetail />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/cart/checkout",
      element: <CheckoutPage />,
    },
    {
      path: "/cart/success/:orderId",
      element: <OrderSuccessPage />,
    },
  ],
};

export default MainRoutes;
