import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './app_presenter';
import ProductCatalog from './katalog_produk';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/katalog-produk" element={<ProductCatalog />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
