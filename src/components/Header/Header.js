import React, { useRef } from "react";
import "../../styles/header.css";
import { NavLink, Link } from "react-router-dom";
import { dataMenu } from "../MegaMenu/SidebarData";
import SubMenuParent from "../MegaMenu/SubMenuParent";

const Header = () => {
  const menuRef = useRef(null);
  const logoRef = useRef(null);
  const toggleMenu = () => {
    menuRef.current.classList.toggle("changeMenu");
    logoRef.current.classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="logo" ref={logoRef}>
                <h1>
                  <a href="#"> Bach Khoa Aptech </a>
                </h1>
                <div className="menuToggle" onClick={toggleMenu}></div>
              </div>
              <div className="navbar-collapse menu_collapse" ref={menuRef}>
                {dataMenu.map((data, index) => {
                  return <SubMenuParent data={data} key={index} />;
                })}
              </div>
            </div>
            <div className="col-lg-9">
              <nav>
                <ul className="main-menu">
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li className="dropdownmenu">
                    <a href="#">Về Bách Khoa-Aptech</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Giới thiệu chung</a>
                      </li>
                      <li>
                        <a href="#">Thư viện ảnh</a>
                      </li>
                      <li>
                        <a href="#">Thư viện Video</a>
                      </li>
                      <li>
                        <a href="#">Sự kiện</a>
                      </li>
                      <li className="dropdownmenu">
                        <a href="#">Đào tạo</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">Giới thiệu chung</a>
                          </li>
                          <li>
                            <a href="#">Thư viện ảnh</a>
                          </li>
                          <li>
                            <a href="#">Thư viện Video</a>
                          </li>
                          <li>
                            <a href="#">Sự kiện</a>
                          </li>
                          <li>
                            <a href="#">Đào tạo</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Tuyển sinh</a>
                  </li>
                  <li>
                    <a href="#">Tuyển dụng</a>
                  </li>
                  <li>
                    <a href="#">Liên hệ</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="bot-header">
        <div className="container">
          <ul className="bot-header-menu">
            <li className="dropdownmenu">
              <a href="#">Blog Công nghệ</a>
              <ul className="sub-menu">
                <li className="dropdownmenu">
                  <a href="#">Tin tức-Video</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Tin nội bộ</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdownmenu">
                  <a href="#">Công nghệ</a>
                  <ul className="sub-menu">
                    <li className="dropdownmenu">
                      <a href="#">Lập trình viên</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">Lập trình PHP</a>
                        </li>
                        <li>
                          <a href="#">Lập trình Android</a>
                        </li>
                        <li>
                          <a href="#">Lập trình C#</a>
                        </li>
                        <li>
                          <a href="#">LẬP trình Java</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdownmenu">
                      <a href="#">Quản trị mạng</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="#">MCSA-Quản trị cơ sở hạ tầng</a>
                        </li>
                        <li>
                          <a href="#">CCNA-Quản trị HĐH</a>
                        </li>
                        <li>
                          <a href="#">Security-Bảo mật quốc tế nghề CNTT</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdownmenu">
              <a href="#">Các khóa học</a>
              <ul className="sub-menu">
                <li className="dropdownmenu">
                  <a href="#">BKAP EDU - ĐÀO TẠO CÙNG DOANH NGHIỆP</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Chương trình dài hạn</a>
                    </li>
                    <li>
                      <a href="#">Chương trình ngắn hạn</a>
                    </li>
                    <li>
                      <a href="#">Chương trình trung hạn</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdownmenu">
                  <a href="#">CHƯƠNG TRÌNH ĐÀO TẠO APTECH</a>
                  <ul className="sub-menu">
                    <li>
                      <a href="#">Đào tạo dài hạn</a>
                    </li>
                    <li>
                      <a href="#">Đào tạo ngắn hạn</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="dropdownmenu">
              <a href="#">Học viên BKAP</a>
              <ul className="sub-menu">
                <li>
                  <a href="#">Ấn tượng học viên</a>
                </li>
                <li>
                  <a href="#">Câu chuyện thành công</a>
                </li>
                <li>
                  <a href="#">Việc làm học viên</a>
                </li>
                <li>
                  <a href="#">Sản phẩm học viên</a>
                </li>
              </ul>
            </li>
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
