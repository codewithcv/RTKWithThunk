import { Outlet } from "react-router";
import NavBar from "./NavBar";

const RootLayout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
};

export default RootLayout;
