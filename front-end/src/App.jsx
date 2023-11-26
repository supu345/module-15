import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "./page/List-Page";
import SavePage from "./page/save-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/registration" element={<SavePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
