import React, { useRef, useState, useEffect } from "react";
import "../../styles/header.css";
import { NavLink, Link } from "react-router-dom";

import SubMenuParent from "../MegaMenu/SubMenuParent";

import SubMenuParentDestop from "../MegaMenuDestop/SubMenuParentDestop";

import MenuBottmParent from "../MenuBottomHeader/MenuBottmParent";
import axios from "axios";
import logo from "../../assets/image/logo/logo-bkap-edu.png";

const Header = () => {
  const menuRef = useRef(null);
  const logoRef = useRef(null);

  const toggleMenu = () => {
    menuRef.current.classList.toggle("changeMenu");
    logoRef.current.classList.toggle("active");
  };
  const [datamenudestop, SetDataMenuDestop] = useState([]);
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/menus").then((res) => {
      SetDataMenuDestop(res.data.data);
    });
  }, []);

  const [mainMenu, SetMainMenu] = useState([]);
  const [databottomMenu, SetBottomMenu] = useState([]);
  useEffect(() => {
    const cutMainMenu = datamenudestop.slice(0, 5);
    SetMainMenu(cutMainMenu);
    const cutbottomMenu = datamenudestop.slice(5, 8);
    SetBottomMenu(cutbottomMenu);
  }, [datamenudestop]);

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo" ref={logoRef}>
                <div className="logo-img">
                  <img src={logo} alt="logo" />
                </div>
                <div className="menuToggle" onClick={toggleMenu}></div>
              </div>
              <div className="navbar-collapse menu_collapse" ref={menuRef}>
                <ul className="clear mobi-menu">
                  {datamenudestop.map((data, index) => {
                    return <SubMenuParent data={data} key={index} />;
                  })}
                </ul>
              </div>
              {/* test api */}
            </div>
            <div className="col-lg-9">
              <nav>
                <ul className="main-menu">
                  {mainMenu &&
                    mainMenu.map((data, index) => {
                      return <SubMenuParentDestop data={data} key={index} />;
                    })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-header">
        <div className="container">
          <ul className="bot-header-menu">
            {databottomMenu.map((dataBottom, idx) => {
              return <MenuBottmParent data={dataBottom} key={idx} />;
            })}
          </ul>
        </div>
        <div className="marquee-text">
          <div className="marquee">Làm trước học sau, khác biệt dẫn đầu - Xét học bạ nhận văn bằng CNTT Quốc tế - Cam kết việc làm lương từ 10 triệu đồng trở lên</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
