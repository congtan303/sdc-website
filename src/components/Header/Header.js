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
    <header class="header">
      <div class="top-header">
        <div class="container">
          <div class="row">
            <div class="col-lg-3">
              <div class="logo" ref={logoRef}>
                <h1>
                  <a href="#"> Bach Khoa Aptech </a>
                </h1>
                <div class="menuToggle" onClick={toggleMenu}></div>
              </div>
              <div class="navbar-collapse menu_collapse" ref={menuRef}>
                {dataMenu.map((data, index) => {
                  return <SubMenuParent data={data} key={index} />;
                })}
              </div>
            </div>
            <div class="col-lg-9">
              <nav>
                <ul class="main-menu">
                  <li>
                    <a href="#">Trang chủ</a>
                  </li>
                  <li class="dropdownmenu">
                    <a href="#">Về Bách Khoa-Aptech</a>
                    <ul class="sub-menu">
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
                      <li class="dropdownmenu">
                        <a href="#">Đào tạo</a>
                        <ul class="sub-menu">
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
      <div class="bot-header">
        <div class="container">
          <ul class="bot-header-menu">
            <li class="dropdownmenu">
              <a href="#">Blog Công nghệ</a>
              <ul class="sub-menu">
                <li class="dropdownmenu">
                  <a href="#">Tin tức-Video</a>
                  <ul class="sub-menu">
                    <li>
                      <a href="#">Tin nội bộ</a>
                    </li>
                  </ul>
                </li>
                <li class="dropdownmenu">
                  <a href="#">Công nghệ</a>
                  <ul class="sub-menu">
                    <li class="dropdownmenu">
                      <a href="#">Lập trình viên</a>
                      <ul class="sub-menu">
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
                    <li class="dropdownmenu">
                      <a href="#">Quản trị mạng</a>
                      <ul class="sub-menu">
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
            <li class="dropdownmenu">
              <a href="#">Các khóa học</a>
              <ul class="sub-menu">
                <li class="dropdownmenu">
                  <a href="#">BKAP EDU - ĐÀO TẠO CÙNG DOANH NGHIỆP</a>
                  <ul class="sub-menu">
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
                <li class="dropdownmenu">
                  <a href="#">CHƯƠNG TRÌNH ĐÀO TẠO APTECH</a>
                  <ul class="sub-menu">
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
            <li class="dropdownmenu">
              <a href="#">Học viên BKAP</a>
              <ul class="sub-menu">
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
        <div class="marquee-text">
          <div class="marquee">Làm trước học sau, khác biệt dẫn đầu - Xét học bạ nhận văn bằng CNTT Quốc tế - Cam kết việc làm lương từ 10 triệu đồng trở lên</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
