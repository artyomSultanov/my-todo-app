import React, { useState, useEffect, useContext } from "react";
import { NavigationContext } from "../../context";
import NavLists from "./NavLists";
import NavForm from "./NavForm";
import { INavLink } from "./Interfaces";
import "./Nav.sass";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faStar,
  faCalendar,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
const defaultNavbarList = [
  { value: "Мой день", id: "my-day", switched: "switchedOn", icon: faSun },
  { value: "Важно", id: "important", switched: "", icon: faStar },
  {
    value: "Запланировано",
    id: "planned",
    switched: "",
    icon: faCalendar,
  },
  { value: "Задачи", id: "tasks", switched: "", icon: faHouse },
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

  // handleSetNavList - добавляет список
  const handleSetNavList = (newList: INavLink) => {
    for (let i = 0; i < navList.length; i++) {
      if (navList[i].id === newList.id) {
        return;
      }
    }
    console.log("setNavList");
    setNavList((prevList: INavLink[]) => [...prevList, newList]);
  };

  const [navState, setNavState] = useState("navbar-opened");
  const handleClick: React.MouseEventHandler<SVGSVGElement> = (
    event: React.MouseEvent<SVGSVGElement>
  ) => {
    console.log("setNavState");
    setNavState((prev) =>
      prev !== "navbar-closed" ? "navbar-closed" : "navbar-opened"
    );
  };

  // handleDeleteList - удаляет список
  const handleDeleteList = (id: string) => {
    let isSwitchedOn = false;
    const newList = navList.filter((elem: INavLink) => {
      if (elem.id === id && elem.switched !== "") isSwitchedOn = true;
      return elem.id !== id;
    });
    // после удаления списка в Main отображается первый список
    if (isSwitchedOn) handleActiveList(newList[0]);
    setNavList(() => {
      if (isSwitchedOn) {
        return newList.map((elem: INavLink, index: number) =>
          index === 0 ? { ...elem, switched: "switchedOn" } : elem
        );
      } else return newList
    });
  };

  // handleSwitchOnList - фокусируется на списке
  const handleActiveList = useContext(NavigationContext);
  const handleSwitchOnList = (switchedList: INavLink) => {
    const newList = navList.map((elem: INavLink) => {
      if (elem.id === switchedList.id)
        return { ...elem, switched: "switchedOn" };
      if (elem.id !== switchedList.id) return { ...elem, switched: "" };
      return elem;
    });
    handleActiveList(switchedList);
    setNavList(() => newList);
  };

  const classes = [navState];
  return (
    <nav>
      {/* Иконка по скрытию списка */}
      <FontAwesomeIcon
        className={"burger-menu__icon"}
        onClick={handleClick}
        icon={faBars}
      />
      <div className={classes.join(" ")}>
        <NavLists
          navList={navList}
          deleteList={handleDeleteList}
          switchOnList={handleSwitchOnList}
        />
        <NavForm addNewList={handleSetNavList} />
      </div>
    </nav>
  );
};

export default Nav;
