import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header className="flex bg-blue-400 p-2 text-black justify-between">
        <div className="left">Logo</div>
        <nav className="nav flex gap-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">contact</NavLink>
        </nav>
      </header>

      <div className="flex items-center justify-center h-screen text-9xl">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
