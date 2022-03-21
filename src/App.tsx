import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import { NavigationContext } from "./context";
import "./App.sass";
import { INavLink } from "./components/Nav/Interfaces";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const defaultActiveList: INavLink = {
  value: "Мой день",
  id: "my-day",
  switched: "switchedOn",
  icon: faSun,
};

const App = () => {
  const [activeList, setActiveList] = useState(defaultActiveList);
  const handleActiveList = (newActiveList: INavLink) => {
    if (activeList.id !== newActiveList.id) {
      console.log("handleActiveList");
      setActiveList(() => newActiveList);
    }
  };

  return (
    <>
      <NavigationContext.Provider value={handleActiveList}>
        <Nav />
      </NavigationContext.Provider>
      <Main value={activeList.value} id={activeList.id} />
    </>
  );
};

export default App;
