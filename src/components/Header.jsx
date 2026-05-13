import { Link, NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DevSite
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </NavLink>
            </li>

            <li>
              {/* <NavLink
                to="/about"
                className="hover:text-blue-600 transition-colors duration-200"
                style={({ isActive, isPending, isTransitioning }) => {
                  return {
                    fontWeight: isActive ? "bold" : "",
                    color: isPending ? "red" : "black",
                    viewTransitionName: isTransitioning ? "slide" : "",
                  };
                }}
              >
                About
              </NavLink> */}

              <NavLink
                to="/about"
                className={({ isActive, isPending, isTransitioning }) =>
                  `
    px-4 py-2 rounded-lg font-medium transition-all duration-300

    ${
      isActive
        ? "bg-blue-600 text-white shadow-md"
        : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
    }

    ${isPending ? "opacity-60 cursor-wait animate-pulse" : ""}

    ${isTransitioning ? "scale-95" : "scale-100"}
    `
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Button */}
        <Link to="/dashboard">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
            Dashboard
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
