import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './app_presenter';
import ProductCatalog from './katalog_produk';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/trinity-steelindo" element={<App />} />
      {/* <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />

      Fallback for undefined routes */}
      <Route
        path="/trinity-steelindo/katalog-produk"
        element={<ProductCatalog />}
      />
    </Routes>
  );
};

export default AppRoutes;
