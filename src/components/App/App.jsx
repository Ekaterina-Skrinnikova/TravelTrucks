import { Routes, Route } from "react-router-dom";
import HomePage from "../../page/HomePage/HomePage";
import CatalogPage from "../../page/CatalogPage/CatalogPage";
import DetailsPage from "../../page/DetailsPage/DetailsPage";
// import Features from "../../components/Features/Features";
// import Reviews from "../../components/Reviews/Reviews";

import Layout from "../Layout/Layout";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />

        <Route path="/catalog/:id" element={<DetailsPage />}>
          {/* <Route path="/features" element={<Features />} />
          <Route path="/reviews" element={<Reviews />} /> */}
        </Route>
      </Routes>
    </Layout>
  );
}
