const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold tracking-wide text-amber-400">
          Aabhushan
        </h1>

        <nav className="hidden md:flex gap-10 text-lg">
          {["Home", "About", "Projects", "Contact"].map((item) => (
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
      </div>
    </header>
  );
};

export default Navbar;
