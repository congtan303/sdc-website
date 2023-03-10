import React from "react";
import "../../../styles/bkStyle/BannerBk.css";
import imgBk from "../../../assets/image/BachKhoa/bannerBachKhoa.jpg";
const BannerBk = () => {
  return (
    <section className="banner-bk">
      <div className="inner-header-title">
        <img src={imgBk} alt="img-Bk" className="img-fluid" />
        <div className="inner-header-title-caps">
          <div className="container">
            <h3 className="title-Banner1">Hành trình 21 năm </h3>
            <h2 className="title-Banner2">ĐÀO TẠO NHÂN LỰC CNTT </h2>
            <h3 className="title-Banner3">Chất lượng cao (2003 - 2023) </h3>
            <p>
              Vì <span className="title-banner4">1 triệu </span> nhân lực CNTT chất lượng cao
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerBk;
