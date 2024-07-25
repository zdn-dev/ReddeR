import { Outlet} from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar/>
      <main>
      <Outlet />
      </main>
    </>
  );
};

export default Layout;
