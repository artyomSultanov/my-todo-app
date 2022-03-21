import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INavList, INavLink } from "./Interfaces";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const NavLists: React.FC<INavList> = ({
  navList,
  deleteList,
  switchOnList,
}) => {
  if (navList.length === 0)
    return <p className="navbar-empty-list__p">Нет списков дел</p>;
  return (
    <ul>
      {React.Children.toArray(
        navList.map((navLink: INavLink) => (
          <li className={navLink.switched}>
            <a
              href={`/${navLink.id}`}
              onClick={(e) => {
                e.preventDefault();
                switchOnList(navLink);
              }}
            >
              <FontAwesomeIcon icon={navLink.icon} />
              {navLink.value}
            </a>
            <FontAwesomeIcon
              className="delete-list__icon"
              icon={faXmark}
              onClick={() => deleteList(navLink.id)}
            />
          </li>
        ))
      )}
    </ul>
  );
};

export default NavLists;
