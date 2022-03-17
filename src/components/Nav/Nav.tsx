import React, { useState, useEffect } from "react";
import Lists from "./Lists";
import AddForm from "./AddForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faStar,
  faCalendar,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { INavLink } from "./Interfaces";
import "./Nav.sass";

const defaultNavbarList = [
  { value: "Мой день", id: "мой-день", switched: "switchedOn", icon: faSun },
  { value: "Важно", id: "важно", switched: "", icon: faStar },
  {
    value: "Запланировано",
    id: "запланировано",
    switched: "",
    icon: faCalendar,
  },
  { value: "Задачи", id: "задачи", switched: "", icon: faHouse },
];

const Nav: React.FC = () => {
  const [navList, setNavList] = useState(() => {
    const localList = JSON.parse(localStorage.getItem("navList") as string);
    if (localList) {
      return localList;
    } else {
      return defaultNavbarList;
    }
  });
  useEffect(() => {
    console.log("newListUseEffect");
    localStorage.setItem("navList", JSON.stringify(navList));
  }, [navList]);

  const setNavListHandler = (newList: INavLink) => {
    for (let i = 0; i < navList.length; i++) {
      if (navList[i].id === newList.id) {
        console.log("SAME");
        return;
      }
    }
    console.log("setNavList");
    setNavList((prevList: INavLink[]) => [...prevList, newList]);
  };

  const [navState, setNavState] = useState("navbar-opened");
  const clickHandle: React.MouseEventHandler<SVGSVGElement> = (
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    console.log("setNavState");
    setNavState((prev) =>
      prev !== "navbar-closed" ? "navbar-closed" : "navbar-opened"
    );
  };

  const classes = [navState];
  return (
    <nav>
      <FontAwesomeIcon
        className={"burger-menu"}
        onClick={clickHandle}
        icon={faBars}
      />
      <div className={classes.join(" ")}>
        <Lists
          navList={navList}
          deleteList={(delList: INavLink) => {
            console.log("deleteList");
            return setNavList(
              navList.filter((el: INavLink) => el.id !== delList.id)
            );
          }}
        />
        <AddForm addNewList={setNavListHandler} />
      </div>
    </nav>
  );
};

export default Nav;
