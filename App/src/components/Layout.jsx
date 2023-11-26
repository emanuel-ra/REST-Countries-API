import { Outlet } from "react-router";
import Header  from "../components/Header"
import { useMode } from "../hooks/useMode"
export const Layout = () => {
    const {dark} = useMode()
  return (
    <>
      <div
        id="app"
        className={`relative min-h-screen flex flex-col min-w-[375px] lg:min-w-[1440px] max-w-[1440px] ${
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
