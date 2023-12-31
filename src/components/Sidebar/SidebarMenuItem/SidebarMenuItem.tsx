import { NavLink } from "react-router-dom";
import { useSidebarContext } from "../context";

import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from "@mui/icons-material/Groups";

type SidebarMenuItemProps = {
  text: string;
  to: "" | "settings" | "customers-list";
};

const sidebarIcons = {
  [""]: <DashboardIcon sx={{ color: "#6225AF", width: 36, height: 36 }} />,
  ["customers-list"]: (
    <GroupsIcon sx={{ color: "#6225AF", width: 36, height: 36 }} />
  ),
  settings: <SettingsIcon sx={{ color: "#6225AF", width: 36, height: 36 }} />,
};

export const SidebarNavLink = ({ text, to }: SidebarMenuItemProps) => {
  const { isExpanded } = useSidebarContext();
  return (
    <NavLink to={to} className={`flex items-center duration-0 pl-5`}>
      {sidebarIcons[to]}
      <p
        className={`flex text-primary text-2xl font-bold items-center min-w-max ${
          isExpanded ? "opacity-100  pl-8 pr-8" : "opacity-0 pl-0 pr-0"
        } transition-all`}
      >
        {text}
      </p>
    </NavLink>
  );
};
