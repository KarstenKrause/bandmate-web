
import React, { useMemo } from "react";
import { Link, matchPath, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import "./Routes";
import { routes, SidebarNavItem, sidebarNavItems } from "./Routes";

interface SidebarProps {}

const Sidebar: React.FunctionComponent<SidebarProps> = () => {
  const menuItems: SidebarNavItem[] = sidebarNavItems;
  const location = useLocation();
  const currentRoute = useMemo(
    () => routes.find((route) => matchPath(location.pathname, route.path)),
    [location]
  );

  return (
    <div className="sidebar">
      <div className="top-section">
        <h1 className="logo">Bandmate</h1>
      </div>
      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className="link"
          aria-activedescendant="active"
        >
          <div>
            <span className="menu-icon">{item.icon}</span>
            <span className="link-text">{item.name}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
