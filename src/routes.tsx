import React from 'react';
import {Route, Routes} from 'react-router-dom';
import App from './AppPresenter';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/trinity-steelindo" element={<App />} />
      {/* <Route path="/about" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />

      Fallback for undefined routes *
      <Route path="*" element={<PageNotFound />} /> */}
    </Routes>
  );
};

export default AppRoutes;
