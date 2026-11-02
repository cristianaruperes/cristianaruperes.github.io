import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./components/Home";
import { Portfolio } from "./components/Portfolio";
import { NotFound } from "./components/NotFound";
import { LanguageProvider } from "./i18n/LanguageProvider";

const App: React.FC = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* Everything but the full portfolio is one page, linked by anchors. */}
          <Route index element={<Home />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
