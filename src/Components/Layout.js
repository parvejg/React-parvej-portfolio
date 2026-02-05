import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./navbar";

export const Layout = () => {
  return (
    <div>
        <Navbar></Navbar>
      <main>
          <Outlet />

      </main>
      <Footer />
    </div>
  );
};
