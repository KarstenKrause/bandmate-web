import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass, faMessage, faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";

export enum RoutePath {
  AUTHENTICATION = "/auth",
  HOME = "/home",
  ADD_POST = "/add_post",
  SEARCH = "/search",
  PROFILE = "/profile",
  MESSAGES = "/messages",
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: "Startseite",
    path: RoutePath.HOME,
    icon: <FontAwesomeIcon icon={faHouse} />,
  },

  {
    name: "Beitrag erstellen",
    path: RoutePath.ADD_POST,
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },

  {
    name: "Suche",
    path: RoutePath.SEARCH,
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },

  {
    name: "Profil",
    path: RoutePath.PROFILE,
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },

  {
    name: "Nachrichten",
    path: RoutePath.MESSAGES,
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },
];

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: JSX.Element;
}

export interface Route {
  name: string;
  path: RoutePath;
  sidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;

}