// import "./styles.css";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductDetailPage from "./Pages/ProductDetailPage";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <SearchBox />
        <HomePage />
      </Layout>
    )
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />
  },
  {
    path: "*",
    element: <PageNotFound />
  }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
    // <div className="container">
    //   <Layout>

    //   </Layout>
    // </div>
  );
}
