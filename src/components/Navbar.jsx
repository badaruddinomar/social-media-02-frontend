import { Link } from "react-router-dom";
import { navLinks } from "../data/data";

const Navbar = () => {
  return (
    <nav className="w-[100%] h-[60px]">
      {/* container-- */}
      <div className="w-[1000px] mx-auto flex items-center justify-between h-[100%]">
        {/* logo-- */}
        <div>
          <h1>
            <Link to={"/"} className="text-[white] font-ternary text-[20px]">
              Breads
            </Link>
          </h1>
        </div>
        {/* navlinks-- */}
        <div>
          <ul className="flex">
            {navLinks.map((link) => {
              return (
                <li
                  key={link.icon}
                  className="mx-[10px] text-[20px] hover:opacity-[.5] transition-all duration-300"
                >
                  <Link to={link.path} className="text-[white]">
                    {<link.icon />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
