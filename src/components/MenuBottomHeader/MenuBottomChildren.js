import React from "react";
import MenuBottomMiniChildren from "./MenuBottomMiniChildren";
import { Link } from "react-router-dom";
const MenuBottomChildren = ({ data }) => {
  return (
    <>
      <li className="dropdownmenu">
        <Link to={`/${data.slug}`}>{data.title}</Link>
        {data.children ? (
          <ul className="sub-menu">
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
