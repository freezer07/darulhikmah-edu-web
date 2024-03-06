import { FC } from "react";
import { Nav, NavDropdown } from "react-bootstrap";

// Components
import { MenuList } from "./MenuList";

export const MenuComponents: FC = () => {
  return (
    <>
      {MenuList &&
        MenuList.map((menu) => {
          const isDropdown = menu?.dropdown;
          if (isDropdown) {
            const menuItemList = menu?.menuList || [];
            return (
              <NavDropdown key={menu.name} title={menu.title} id={menu.name}>
                {menuItemList.map((meuItem) => {
                  return (
                    <NavDropdown.Item key={meuItem.name} href={meuItem.path}>
                      {meuItem.title}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            );
          } else {
            return <Nav.Link href={menu.path}>{menu.name}</Nav.Link>;
          }
        })}
    </>
  );
};
