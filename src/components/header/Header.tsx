import { FC } from "react";
import NavbarHeader from "./NavbarHeader";

const Header: FC = () => {
  return (
    <>
      <header>
        <h1>{import.meta.env.VITE_APP_NAME}</h1>
      </header>
    </>
  );
};

export default Header;
