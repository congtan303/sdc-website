import React from "react";
import { Link } from "react-router-dom";

const SubMenuChildrenDestop = ({ data }) => {
  return (
    <>
      <li className="dropdownmenu">
        <Link to={`/${data.slug}`}>{data.title}</Link>
        {data.children ? (
          <ul className="sub-menu">
            {data.children.map((data, index) => {
              return (
                <li key={index}>
                  <Link to={`/${data.slug}`}>{data.title}</Link>
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

export default SubMenuChildrenDestop;
