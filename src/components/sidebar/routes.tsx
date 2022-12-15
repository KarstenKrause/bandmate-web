import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faMagnifyingGlass,
  faMessage,
  faPlusCircle,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import HomePage from "../../pages/home/Home";
import PostCreationPage from "../../pages/post-creation/PostCreation";
import SearchPage from "../../pages/search/Search";
import ProfilePage from "../../pages/profile/Profile";
import MessengerPage from "../../pages/messenger/Messenger";

export enum RoutePath {
  AUTHENTICATION = "/auth",
  HOME = "/home",
  CREATE_POST = "/create_post",
  SEARCH = "/search",
  PROFILE = "/profile",
  MESSAGES = "/messages",
}

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

export const sidebarNavItems: SidebarNavItem[] = [
  {
    name: "Startseite",
    path: RoutePath.HOME,
    icon: <FontAwesomeIcon icon={faHouse} />,
  },

  {
    name: "Beitrag erstellen",
    path: RoutePath.CREATE_POST,
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },

  {
    name: "Suche",
    path: RoutePath.SEARCH,
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },

  {
    name: "Profil",
    path: RoutePath.PROFILE,
    icon: <FontAwesomeIcon icon={faUser} />,
  },

  {
    name: "Nachrichten",
    path: RoutePath.MESSAGES,
    icon: <FontAwesomeIcon icon={faMessage} />,
  },
];

export const routes: Route[] = [
  {
    name: "Startseite",
    path: RoutePath.HOME,
    sidebarNavItems: sidebarNavItems,
    component: HomePage,
  },

  {
    name: "Beitrag erstellen",
    path: RoutePath.CREATE_POST,
    sidebarNavItems: sidebarNavItems,
    component: PostCreationPage,
  },

  {
    name: "Suche",
    path: RoutePath.SEARCH,
    sidebarNavItems: sidebarNavItems,
    component: SearchPage,
  },

  {
    name: "Profil",
    path: RoutePath.PROFILE,
    sidebarNavItems: sidebarNavItems,
    component: ProfilePage,
  },

  {
    name: "Nachrichten",
    path: RoutePath.MESSAGES,
    sidebarNavItems: sidebarNavItems,
    component: MessengerPage,
  },
];

