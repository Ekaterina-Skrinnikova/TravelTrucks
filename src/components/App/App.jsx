import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// import HomePage from "../../page/HomePage/HomePage";
// import CatalogPage from "../../page/CatalogPage/CatalogPage";
// import DetailsPage from "../../page/DetailsPage/DetailsPage";
import Features from "../../components/Features/Features";
import Reviews from "../../components/Reviews/Reviews";
import Layout from "../Layout/Layout";
import { lazy, Suspense } from "react";
import Loader from "../Loader/Loader";

export default function App() {
  const HomePage = lazy(() => import("../../page/HomePage/HomePage"));
  const CatalogPage = lazy(() => import("../../page/CatalogPage/CatalogPage"));
  const DetailsPage = lazy(() => import("../../page/DetailsPage/DetailsPage"));

  return (
    <Layout>
      <Toaster />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<DetailsPage />}>
            <Route path="features" element={<Features />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </Layout>
  );
}
