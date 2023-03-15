import React, { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import bannerProject from "../../assets/image/BachKhoa/bannerBachKhoa.jpg";

import "../../styles/DetailProject.css";

import BoxReason from "../Home/BoxReason";
import BannerDetail from "../../components/UI/BannerDetail/BannerDetail";
import CardProject from "../../components/UI/CardProject/CardProject";
const DetailProject = () => {
  const [dataDetailProject, SetDataDetailProject] = useState([]);
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/project-students/list-project-new").then((res) => {
      SetDataDetailProject(res.data.data);
    });
  }, []);
  return (
    <main>
      <Header />
      <BannerDetail imgBanner={bannerProject} titleB="Làm trước" titleP="học sau" titleH2="Sản phẩm học viên" />
      <BoxReason />
      <section className="product">
        <div className="container">
          <CardProject data={dataDetailProject} />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default DetailProject;
