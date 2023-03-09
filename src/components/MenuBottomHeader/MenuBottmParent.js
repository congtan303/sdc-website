import React from "react";
import MenuBottomChildren from "./MenuBottomChildren";
import { Link } from "react-router-dom";
const MenuBottmParent = ({ data }) => {
  return (
    <>
      <li class="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul class="sub-menu">
            {data.children.map((dataBottom, idx) => {
              return <MenuBottomChildren data={dataBottom} key={idx} />;
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default MenuBottmParent;
