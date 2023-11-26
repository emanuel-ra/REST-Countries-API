import { NavLink } from "react-router-dom";
import { useMode } from "../hooks/useMode";

function Error404() {
  const { dark } = useMode();

  return (
    <div
      className={`w-full flex flex-col gap-3 justify-center items-center animate-fade-down animate-ease-in-out ${
        dark && "text-theme-dark"
      }`}
    >
      <h2 className="text-4xl font-bold">404</h2>
      <h3 className="text-3xl font-semibold">Not Found</h3>
      <h4 className="text-2xl">
        The resource requested could not be found on this server
      </h4>

      <span className="text-2xl">😥</span>

      <NavLink
        to={`/`}
        className={`btn gap-2 px-6 py-2
        ${dark ? "btn-dark" : "btn-ligth"} `}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
        Go Home
      </NavLink>
    </div>
  );
}

export default Error404;
