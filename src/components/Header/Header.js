import React, { useRef, useState, useEffect } from "react";
import "../../styles/header.css";
import { NavLink, Link } from "react-router-dom";
import { dataMenu } from "../MegaMenu/SidebarData";
import SubMenuParent from "../MegaMenu/SubMenuParent";
import { dataDestop } from "../MegaMenuDestop/dataDestop";

import SubMenuParentDestop from "../MegaMenuDestop/SubMenuParentDestop";
import { dataBottomMenu } from "../MenuBottomHeader/MenuBottomData";
import MenuBottmParent from "../MenuBottomHeader/MenuBottmParent";
import axios from "axios";

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
    <header class="header">
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="logo" ref={logoRef}>
                <h1>
                  <Link href="#"> Bach Khoa Aptech </Link>
                </h1>
                <div class="menuToggle" onClick={toggleMenu}></div>
              </div>
              <div class="navbar-collapse menu_collapse" ref={menuRef}>
                <ul class="clear mobi-menu">
                  {datamenudestop.map((data, index) => {
                    return <SubMenuParent data={data} key={index} />;
                  })}
                </ul>
              </div>
              {/* test api */}
            </div>
            <div class="col-lg-9">
              <nav>
                <ul class="main-menu">
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
      <div class="bot-header">
        <div class="container">
          <ul class="bot-header-menu">
            {databottomMenu.map((dataBottom, idx) => {
              return <MenuBottmParent data={dataBottom} key={idx} />;
            })}
          </ul>
        </div>
        <div class="marquee-text">
          <div class="marquee">Làm trước học sau, khác biệt dẫn đầu - Xét học bạ nhận văn bằng CNTT Quốc tế - Cam kết việc làm lương từ 10 triệu đồng trở lên</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
