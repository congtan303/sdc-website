import React from "react";
import MenuBottomMiniChildren from "./MenuBottomMiniChildren";
import { Link } from "react-router-dom";
const MenuBottomChildren = ({ data }) => {
  return (
    <>
      <li class="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul class="sub-menu">
            {data.children.map((dataBottom, idx) => {
              return <MenuBottomMiniChildren data={dataBottom} key={idx} />;
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default MenuBottomChildren;
