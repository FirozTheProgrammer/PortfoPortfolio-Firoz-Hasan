import { Link, NavLink } from "react-router-dom";

const Navlink = () => {
  const NavLinks = (
    <>
      <li className="text-lg text-gray-400">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive ? "text-green-500" : isPending ? "pending " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg text-gray-400">
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isActive ? "text-green-500" : isPending ? "pending " : ""
          }
        >
          About
        </NavLink>
      </li>

      <li className="text-lg text-gray-400">
        <NavLink
          to={"/portfolio"}
          className={({ isActive, isPending }) =>
            isActive ? "text-green-500" : isPending ? "pending " : ""
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="text-lg text-gray-400">
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isActive ? "text-green-500" : isPending ? "pending " : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      {/* navbar content here */}
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-black bg-green-400  hover:bg-white  lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {NavLinks}
            </ul>
          </div>
          <Link to={"/"}>
            <p className="text-4xl font-bold">
              Firoz<span className="text-green-400">.</span>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link to={"/contact"}>
            <button className="btn  text-black bg-green-400  hover:bg-white ">
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navlink;
