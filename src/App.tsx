import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Portfolio } from "./components/Portfolio";
import { Publications } from "./components/Publications";
import { NotFound } from "./components/NotFound";
import { LanguageProvider } from "./i18n/LanguageProvider";

const App: React.FC = () => (
  <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="experience" element={<Experience />} />
          <Route path="education" element={<Education />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="publications" element={<Publications />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </LanguageProvider>
);

export default App;
