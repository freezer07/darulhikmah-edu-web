import React from "react";

export interface MenuItemProps {
  name?: string;
  title?: string;
  path?: string;
  icon?: string;
}

export interface MenuListProps extends MenuItemProps {
  dropdown?: boolean;
  menuList?: MenuItemProps[];
}

export const MenuList: MenuListProps[] = [
  // no-dropdown
  {
    title: "หน้าแรก",
    name: "หน้าแรก",
    path: "/",
    icon: "",
  },
  {
    title: "ยอดบริจาค ล่าสุด",
    name: "การบริจาค",
    path: "/",
    icon: "",
  },
  // dropdown
  // {
  //   title: "Dropdown",
  //   dropdown: true,
  //   menuList: [
  //     { title: "Action", name: "Action", path: "#action/3.1", icon: "" },
  //     { title: "Another action", name: "Another action", path: "#action/3.2", icon: "" },
  //     { title: "Something", name: "Something", path: "#action/3.3", icon: "" },
  //     { title: "Separated link", name: "Separated link", path: "#action/3.4", icon: "" },
  //   ],
  // },
];
