import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DetailNews from "../pages/PageDetailNews/DetailNews";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Bachkhoa from "../pages/BachKhoaBox/Bachkhoa";
import ReadMore from "../pages/PageReadMore/ReadMore";
import DetailProject from "../pages/PageDetailProjects/DetailProject";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/trang-chu" element={<Home />}></Route>
      {/* <Route path='*' element={<NotFound />}></Route> */}
      <Route path="/detail-news/:id" element={<DetailNews />}></Route>
      <Route path="/ve-bach-khoa-aptech" element={<Bachkhoa />}></Route>
      <Route path="/xem-them" element={<ReadMore />}></Route>
      <Route path="/list-project-new" element={<DetailProject />}></Route>
    </Routes>
  );
};

export default Routers;
