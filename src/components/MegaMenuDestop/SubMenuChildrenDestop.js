import React from "react";
import { Link } from "react-router-dom";

const SubMenuChildrenDestop = ({ data }) => {
  return (
    <>
      <li className="dropdownmenu">
        <Link href="#">{data.title}</Link>
        {data.children ? (
          <ul className="sub-menu">
            {data.children.map((data, index) => {
              return (
                <li key={index}>
                  <Link href="#">{data.title}</Link>
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
