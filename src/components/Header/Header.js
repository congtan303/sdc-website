import React, { useRef, useState, useEffect } from "react";
import "../../styles/header.css";
import { NavLink, Link } from "react-router-dom";
import SubMenuParent from "../MegaMenu/SubMenuParent";
import SubMenuParentDestop from "../MegaMenuDestop/SubMenuParentDestop";
import MenuBottmParent from "../MenuBottomHeader/MenuBottmParent";
import axios from "axios";
import logo from "../../assets/image/logoSDC/logoSDCNewNew.png";

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
  // api menu
  useEffect(() => {
    const cutMainMenu = datamenudestop.slice(0, 5);
    SetMainMenu(cutMainMenu);
    const cutbottomMenu = datamenudestop.slice(5, 8);
    SetBottomMenu(cutbottomMenu);
  }, [datamenudestop]);

  // api chữ chạy
  const [marquees, setMarquees] = useState([]);
  useEffect(() => {
    axios.get("https://sdc.azurecloud.vn/api/news/list-new").then((response) => {
      //  console.log(response.data.data);
      setMarquees(response.data.data);
    });
  }, []);

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo" ref={logoRef}>
                <div className="logo-img">
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <div className="menuToggle" onClick={toggleMenu}></div>
              </div>
              <div className="navbar-collapse menu_collapse" ref={menuRef}>
                <ul className="clear mobi-menu">
                  {datamenudestop &&
                    datamenudestop.map((data, index) => {
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
            {databottomMenu &&
              databottomMenu.map((dataBottom, idx) => {
                return <MenuBottmParent data={dataBottom} key={idx} />;
              })}
          </ul>
        </div>
        <div className="marquee-text">
          <div className="marquee">{marquees && marquees.map((marquee) => <span key={marquee.id}>{`${marquee.title} - `}</span>)}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
