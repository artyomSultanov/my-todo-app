import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { INavLink } from "./Interfaces";

const NavLink: React.FC<{
  navLink: INavLink;
  handleSwitch(id: string): void;
  handleDelete(id: string): void;
}> = ({ navLink, handleSwitch, handleDelete }) => {
  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement>,
    id: string
  ): void => {
    event.preventDefault();
    handleSwitch(id);
  };

  return (
    <li className={navLink.switched}>
      <div className="link-block__div">
        <FontAwesomeIcon icon={navLink.icon} />
        <Link to={`/${navLink.id}`}>
          <span onClick={(e) => handleClick(e, navLink.id)}>
            {navLink.value}
          </span>
        </Link>
      </div>
      <FontAwesomeIcon
        className="delete-list__icon"
        icon={faXmark}
        onClick={() => handleDelete(navLink.id)}
      />
    </li>
  );
};

export default NavLink;
