import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenuChildrenMini = ({ data }) => {
  const [childrenMiniSubnav, setChildrenMiniSubnav] = useState(false);
  const showchildrenMiniSubnav = () => setChildrenMiniSubnav(!childrenMiniSubnav);
  return (
    <>
      <li>
        <Link to={`/${data.slug}`}>{data.title}</Link>
        <i className={`${data.children && childrenMiniSubnav ? "fa-solid fa-angle-down" : data.children ? "fa-solid fa-angle-right" : null}`} onClick={data.children && showchildrenMiniSubnav}></i>
        <ul className="mobi-sub-menu">
          {childrenMiniSubnav &&
            data.children.map((data, index) => (
              <li key={index}>
                <Link to={`/${data.slug}`}>{data.title}</Link>
              </li>
            ))}
        </ul>
      </li>
    </>
  );
};

export default SubMenuChildrenMini;
