import React, { useEffect, useState } from "react";
import "../../styles/BoxProducts.css";

import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [dataproducts, SetDataproducts] = useState([]);
  //API project-students
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/project-students")
      .then((res) => {
      SetDataproducts(res.data.data.data);
    });
  }, []);
  return (
    <section className="product">
      <div className="container">
        <div className="section__title-product">
          <div className="title row justify-content-start text-violet">
            <div className="col-md-3">
              <h2>
                <span>SẢN PHẨM</span>HỌC VIÊN
              </h2>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="title-caps">
                <p>Sản phẩm thực chiến của sinh viên khi tham gia các khóa học tại Bách Khoa - Aptech</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section__content-product">
          <div className="row">
            {dataproducts &&
              dataproducts.map((product, index) => (
                <div className="col-md-6 col-lg-4 " key={index}>
                  <div className="st-product-item">
                    <img src={product.image_url} className="img-fluid lazy" alt="" />
                    <div className="st-product-item-overlay">
                      <span className="js-video-button" data-video-id="bbjLCHI82bY"></span>
                    </div>
                    <div className="st-product-item-caps">
                      <h3>
                        <Link to="/">{product.title}</Link>
                      </h3>
                      <p>{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div>
            <Link to="/" className="link-read-more">
              Xem thêm <i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
