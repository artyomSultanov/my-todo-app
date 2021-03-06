import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface INavLink {
  value: string;
  id: string;
  switched: string;
  icon: IconDefinition;
}
export interface INavList {
  navList: INavLink[];
  deleteList(id: string): void;
  switchOnList(switchedList: INavLink): void;
}
export interface IButtonToAddList {
  addNewList(newList: INavLink): void;
}
