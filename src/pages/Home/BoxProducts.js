import React, { useEffect, useState } from "react";
import "../../styles/BoxProducts.css";

import axios from "axios";
import { Link } from "react-router-dom";
import CardProject from "../../components/UI/CardProject/CardProject";
const Products = () => {
  const [dataproducts, SetDataproducts] = useState([]);
  //API project-students
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/project-students/list-project-new").then((res) => {
      SetDataproducts(res.data.data);
    });
  }, []);
  return (
    <section className="product">
      <div className="container">
        <CardProject data={dataproducts} />
        <div className="section__project-more">
          <Link to="/list-project-new" className="link-read-more ">
            Xem thêm <i className="fa-solid fa-angle-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
