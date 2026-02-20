import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10 font-mono">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-amber-400">
          Aabhushan
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-10 text-lg">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          {/* Toggle Button */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-2xl text-white"
          >
            {navOpen ? <RiCloseLine /> : <CiMenuFries />}
          </button>

          {/* Mobile Dropdown */}
          <nav
            className={`${
              navOpen ? "flex" : "hidden"
            } fixed top-16 right-0 w-full bg-black/70 backdrop-blur-md flex-col items-center py-8 space-y-6`}
          >
            {links.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white text-xl hover:text-amber-400 transition"
                onClick={() => setNavOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
