import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="flex justify-center gap-10 items-center text-lg font-semibold my-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          All Product
        </NavLink>
        <NavLink
          to="/userInfo"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
         UserInfo
        </NavLink>
        <NavLink
          to="/signUp"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Sign Up
        </NavLink>
        <NavLink
          to="/signIn"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Sign In
        </NavLink>
        <NavLink
          to="/addProduct"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-gray-700"
          }
        >
          Add Product
        </NavLink>
      </nav>

      {/* Outlet to render nested routes */}
      <Outlet />
    </div>
  );
}

export default App;
