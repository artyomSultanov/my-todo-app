import React from "react";
import { INavLink } from "./components/Nav/Interfaces";

export const NavigationContext = React.createContext(
  {} as (navLink: INavLink) => void
);
