// import React from "react";
export const dataMenu = [
  {
    id: "01",
    parentMenu: "Trang Chủ",
    link: "/",
  },
  {
    id: "02",
    parentMenu: "Blog Công nghệ",
    link: "/",
    iconRight: "fa-solid fa-angle-right",
    iconDown: "fa-solid fa-angle-down",
    childrenMenu: [
      {
        nameMenu: "Tin tức-Video",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
        ChildrenMiniMenu: [
          {
            nameMiniMenu: "Tin nội bộ",
            link: "/",
          },
        ],
      },
      {
        nameMenu: "Công nghệ",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
        ChildrenMiniMenu: [
          {
            nameMiniMenu: "Lập trình viên",
            link: "/",
            iconRight: "fa-solid fa-angle-right",
            iconDown: "fa-solid fa-angle-down",
            miniMenu: [
              {
                subjectName: "Lập trình PHP",
                link: "/",
              },
              {
                subjectName: "Lập trình Androi",
                link: "/",
              },
              {
                subjectName: "Lập trình C#",
                link: "/",
              },
              {
                subjectName: "Lập trình Java",
                link: "/",
              },
            ],
          },
          {
            nameMiniMenu: "Quản trị mạng",
            link: "/",
            iconRight: "fa-solid fa-angle-right",
            iconDown: "fa-solid fa-angle-down",
            miniMenu: [
              {
                subjectName: "MCSA-Quản trị cơ sở hạ tầng",
                link: "/",
              },
              {
                subjectName: "CCNA-Quản trị HĐH",
                link: "/",
              },
              {
                subjectName: "Security-Bảo mật Quốc tế nghề CNTT",
                link: "/",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "03",
    parentMenu: "Về Bách Khoa-Aptech",
    link: "/",
    iconRight: "fa-solid fa-angle-right",
    iconDown: "fa-solid fa-angle-down",
    childrenMenu: [
      {
        nameMenu: "Giới thiệu chung",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
      },
      {
        nameMenu: "Thư viện ảnh",
        link: "/",
      },
      {
        nameMenu: "Thư viện Video",
        link: "/",
      },
      {
        nameMenu: "Sự kiện",
        link: "/",
      },
      {
        nameMenu: "Đào tạo",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
        ChildrenMiniMenu: [
          {
            nameMiniMenu: "GIẢNG VIÊN",
            link: "/",
          },
          {
            nameMiniMenu: "LỊCH ĐÀO TẠO",
            link: "/",
          },
          {
            nameMiniMenu: "THÔNG BÁO",
            link: "/",
          },
          {
            nameMiniMenu: "BIỂU MẪU - VĂN BẢN",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "04",
    parentMenu: "Các khóa học",
    link: "/",
    iconRight: "fa-solid fa-angle-right",
    iconDown: "fa-solid fa-angle-down",
    childrenMenu: [
      {
        nameMenu: "BKAP EDU - ĐÀO TẠO CÙNG DOANH NGHIỆP",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
        ChildrenMiniMenu: [
          {
            nameMiniMenu: "Chương trình dài hạn",
            link: "/",
          },
          {
            nameMiniMenu: "Chương trình ngắn hạn",
            link: "/",
          },
          {
            nameMiniMenu: "Chương trình trung hạn",
            link: "/",
          },
        ],
      },
      {
        nameMenu: "CHƯƠNG TRÌNH ĐÀO TẠO APTECH",
        link: "/",
        iconRight: "fa-solid fa-angle-right",
        iconDown: "fa-solid fa-angle-down",
        ChildrenMiniMenu: [
          {
            nameMiniMenu: "Đào tạo dài hạn",
            link: "/",
          },
          {
            nameMiniMenu: "Đào tạo ngắn hạn",
            link: "/",
          },
        ],
      },
    ],
  },
  {
    id: "05",
    parentMenu: "Tuyển sinh",
    link: "/",
  },
  {
    id: "06",
    parentMenu: "Học viên BKAP",
    link: "/",
    iconRight: "fa-solid fa-angle-right",
    iconDown: "fa-solid fa-angle-down",
    childrenMenu: [
      {
        nameMenu: "Ấn tượng học viên",
        link: "/",
      },
      {
        nameMenu: "Câu chuyện thành công",
        link: "/",
      },
      {
        nameMenu: "Việc làm học viên",
        link: "/",
      },
      {
        nameMenu: "Sản phẩm học viên",
        link: "/",
      },
    ],
  },
  {
    id: "07",
    parentMenu: "Tuyển dụng",
    link: "/",
  },
  {
    id: "08",
    parentMenu: "Liên hệ",
    link: "/",
  },
];
