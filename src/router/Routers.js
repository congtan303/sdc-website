import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailNews from "../pages/PageDetailNews/DetailNews";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
      <Route path="/detail-news/:id" element={<DetailNews />}></Route>
    </Routes>
  );
};

export default Routers;
