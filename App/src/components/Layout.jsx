import { Outlet } from "react-router";
import Header  from "../components/Header"
import { useMode } from "../hooks/useMode"
export const Layout = () => {
    const {dark} = useMode()
  return (
    <>
      <div
        id="app"
        className={`relative min-h-screen flex flex-col ${
          !dark ? "body-theme-ligth" : "body-theme-dark"
        } `}
      >
        <nav>
          <Header />
        </nav>
        <main className={`[grid-area:main] flex flex-col p-6 gap-4`}>
            <Outlet />
        </main>
      </div>
    </>
  );
};
