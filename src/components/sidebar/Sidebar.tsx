import React, { useMemo } from "react";
import { matchPath, NavLink, useLocation } from "react-router-dom";
import "./Sidebar.scss";
import "./Routes";
import { routes, SidebarNavItem, sidebarNavItems } from "./Routes";

interface SidebarProps { }

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
        <h2 className="logo">Bandmate</h2>
      </div>
      {menuItems.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          className={`link ${currentRoute && currentRoute.path === item.path ? "active" : ""}`}
          aria-activedescendant={`link ${currentRoute && currentRoute.path === item.path ? "active" : ""}`}
        >
          <div className="menu-icon"> {item.icon}</div>
          <div className="menu-text">{item.name}</div>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
