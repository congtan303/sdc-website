import React, { useState } from "react";
import { Link } from "react-router-dom";

const SubMenuChildrenMini = ({ data }) => {
  const [childrenMiniSubnav, setChildrenMiniSubnav] = useState(false);
  const showchildrenMiniSubnav = () => setChildrenMiniSubnav(!childrenMiniSubnav);
  return (
    <>
      <ul className="mobi-sub-menu">
        <li>
          <Link href="#">{data.nameMiniMenu}</Link>
          <i className={`${data.miniMenu && childrenMiniSubnav ? data.iconDown : data.miniMenu ? data.iconRight : null}`} onClick={data.miniMenu && showchildrenMiniSubnav}></i>
          {childrenMiniSubnav &&
            data.miniMenu.map((data, index) => (
              <ul className="mobi-sub-menu">
                <li>
                  <Link href="#">{data.subjectName}</Link>
                </li>
              </ul>
            ))}
        </li>
      </ul>
    </>
  );
};

export default SubMenuChildrenMini;