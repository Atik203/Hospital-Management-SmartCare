import { Outlet } from "react-router-dom";
import NavbarComponent from "../components/Navbar/NavbarComponent";

const Root = () => {
  return (
    <div className="max-w-[1440px]	mx-auto">
      <div className="max-w-[1240px] mx-auto">
        <NavbarComponent></NavbarComponent>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
