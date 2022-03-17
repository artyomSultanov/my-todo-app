import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavList, INavLink } from "./Interfaces";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Lists: React.FC<INavList> = ({ navList, deleteList }) => {
  if (navList.length === 0)
    return <p className="navbar-empty-list">Нет списков дел</p>;
  return (
    <ul>
      {React.Children.toArray(navList.map((navLink: INavLink) => (
        <li className={navLink.switched}>
            <a href={`/${navLink.id}`}>
              <FontAwesomeIcon icon={navLink.icon} />
              {navLink.value}
            </a>
          <FontAwesomeIcon
            className="delete-list"
            icon={faXmark}
            onClick={() => deleteList(navLink)}
          />
        </li>
      )))}
    </ul>
  );
};

export default Lists;
