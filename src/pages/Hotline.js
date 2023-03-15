import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Hotline.css";
const Hotline = () => {
  const [dataConfigs, SetDataConfigs] = useState([]);
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/configs").then((res) => {
      SetDataConfigs(res.data.data);
    });
  }, []);
  return (
    <div className="hotline">
      <a href="tel:0905333999">
        <i className="fa fa-phone"></i>
        <span>{dataConfigs && dataConfigs[0]?.value}</span>
      </a>
    </div>
  );
};

export default Hotline;
