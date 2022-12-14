import { faHouse, faMagnifyingGlass, faMessage, faPlusCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = (children) => {
const menuItems = [
  {
    path: "/",
    name: "Startseite",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },

  {
    path: "/add_post",
    name: "Beitrag erstellen",
    icon: <FontAwesomeIcon icon={faPlusCircle} />,
  },

  {
    path: "/search",
    name: "Suche",
    icon: <FontAwesomeIcon icon={faMagnifyingGlass} />,
  },

  {
    path: "/profile",
    name: "Profil",
    icon: <FontAwesomeIcon icon={faUser} />,
  },

  {
    path: "/messages",
    name: "Nachrichten",
    icon: <FontAwesomeIcon icon={faMessage} />,
  },

];

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="top-section">
          <h1 className="logo">Bandmate</h1>
        </div>
        {
          menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" aria-activedescendant="active">
              <div className="menu-icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))
        }
      </div>
      
    </div>
  );
};

export default Sidebar;
