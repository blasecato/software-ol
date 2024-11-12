/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import { Menu } from "../menu/Menu";
import useMenuContext from "../../hooks/useMenuContext";

const Layout = () => {
  const { isMenuOpen }: any = useMenuContext()

  return (
    <section className="Layout">
      <aside className="flex-btw">
        <Header />
        <div className="container container-child">
          {isMenuOpen &&
            <Menu />
          }
          <div className={`content ${isMenuOpen && 'content-min'}`}>
            <Outlet />
          </div>
        </div>
      </aside>
    </section>
  );
};

export default Layout;
