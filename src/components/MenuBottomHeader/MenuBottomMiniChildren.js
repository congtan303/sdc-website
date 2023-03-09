import React from "react";
import { Link } from "react-router-dom";

const MenuBottomMiniChildren = ({ data }) => {
  return (
    <>
      <li class="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul class="sub-menu">
            {data.children.map((dataBottom, idx) => {
              return (
                <li key={idx}>
                  <Link href="#">{dataBottom.title}</Link>
                </li>
              );
            })}
          </ul>
        ) : (
          ""
        )}
      </li>
    </>
  );
};

export default MenuBottomMiniChildren;
