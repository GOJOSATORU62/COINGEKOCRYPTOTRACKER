import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <>
      <Navbar />{" "}
      {/*This navbar is the shared ui we want to have across pages */}
      <Outlet />{" "}
      {/*This outlet is the actual page which will be rendred along with the navbar */}
    </>
  );
}

export default MainLayout;
