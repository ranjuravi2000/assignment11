import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">EmployeeHub</h2>

      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          About
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar