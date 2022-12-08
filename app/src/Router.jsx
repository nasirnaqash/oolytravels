import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FactoryProvider from "./context/FactoryContext";
import {
  HomePage,
  AboutUsPage,
  DestinationPage,
  PackagesPage,
  PackagesDetailsPage,
  DestinationDetailsPage,
  EnquirePage,
} from "./pages";
import { Toaster } from "react-hot-toast";

const Router = () => {
  return (
    <FactoryProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationPage />} />
          <Route
            path="/destinations/:id"
            element={<DestinationDetailsPage />}
          />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/packages/:id" element={<PackagesDetailsPage />} />

          <Route path="/enquire" element={<EnquirePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </BrowserRouter>
    </FactoryProvider>
  );
};

export default Router;
