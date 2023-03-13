import React from "react";
import MenuBottomChildren from "./MenuBottomChildren";
import { Link } from "react-router-dom";
const MenuBottmParent = ({ data }) => {
  return (
    <>
      <li className="dropdownmenu">
        <Link to={`/${data.slug}`}>{data.title}</Link>
        {data.children ? (
          <ul className="sub-menu">
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
