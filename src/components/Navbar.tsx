import { useState, useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RiCloseLine } from "react-icons/ri";

const links = ["Home", "About", "Projects", "Contact"];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section tracker
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.toLowerCase());
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .navbar {
          font-family: 'DM Sans', sans-serif;
          transition: all 0.4s ease;
        }

        .navbar.scrolled {
          background: rgba(7, 9, 13, 0.88);
          border-color: rgba(255,255,255,0.06);
          box-shadow: 0 4px 40px rgba(0,0,0,0.4);
        }

        .navbar.top {
          background: transparent;
          border-color: transparent;
        }

        .nav-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: -0.03em;
          color: #f1f1f1;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 2px;
        }

        .nav-logo .accent {
          color: #f59e0b;
        }

        .nav-logo .bracket {
          color: #374151;
          font-weight: 400;
          font-size: 1rem;
          font-family: 'DM Sans', monospace;
        }

        /* Desktop nav links */
        .nav-link {
          position: relative;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b7280;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.25s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #f59e0b;
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #e5e7eb;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #fbbf24;
        }

        /* Nav pill indicator */
        .nav-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #22c55e;
          background: rgba(34,197,94,0.07);
          border: 1px solid rgba(34,197,94,0.15);
          border-radius: 100px;
          padding: 4px 10px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
        }

        .nav-pill-dot {
          width: 5px;
          height: 5px;
          background: #22c55e;
          border-radius: 50%;
          animation: pulse-green 2s ease-in-out infinite;
        }

        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50% { box-shadow: 0 0 0 4px rgba(34,197,94,0); }
        }

        /* Mobile menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: rgba(7,9,13,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 40;
          transform: translateX(100%);
          transition: transform 0.45s cubic-bezier(0.77, 0, 0.175, 1);
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 8vw, 4rem);
          letter-spacing: -0.03em;
          color: #1f2937;
          text-decoration: none;
          padding: 10px 0;
          transition: color 0.2s ease, transform 0.2s ease;
          display: block;
        }

        .mobile-link:hover,
        .mobile-link.active {
          color: #f59e0b;
          transform: translateX(8px);
        }

        .mobile-link-index {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.7rem;
          letter-spacing: 0.12em;
          color: #374151;
          vertical-align: super;
          margin-right: 6px;
          font-weight: 400;
        }

        .mobile-close {
          position: absolute;
          top: 24px;
          right: 24px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          cursor: pointer;
          transition: all 0.2s ease;
          font-size: 1.4rem;
        }

        .mobile-close:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.3);
          color: #f59e0b;
        }

        .mobile-footer {
          position: absolute;
          bottom: 40px;
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1f2937;
          font-family: 'DM Sans', sans-serif;
        }

        /* Hamburger */
        .menu-btn {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9ca3af;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.2s ease;
          position: relative;
          z-index: 60;
        }

        .menu-btn:hover {
          background: rgba(245,158,11,0.08);
          border-color: rgba(245,158,11,0.25);
          color: #f59e0b;
        }

        .menu-btn.active {
          border-color: rgba(245,158,11,0.3);
          color: #f59e0b;
        }

        /* Divider line in mobile menu */
        .mobile-divider {
          width: 40px;
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 16px auto;
        }
      `}</style>

      {/* Mobile overlay menu */}
      <div className={`mobile-menu ${navOpen ? "open" : ""}`}>
        <button className="mobile-close" onClick={() => setNavOpen(false)}>
          <RiCloseLine />
        </button>

        <nav>
          {links.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`mobile-link ${active === item.toLowerCase() ? "active" : ""}`}
              onClick={() => setNavOpen(false)}
            >
              <span className="mobile-link-index">0{i + 1}</span>
              {item}
            </a>
          ))}
        </nav>

        <div className="mobile-footer">Aabhushan · Portfolio · 2025</div>
      </div>

      {/* Main navbar */}
      <header
        className={`navbar fixed top-0 w-full z-50 border-b ${scrolled ? "scrolled" : "top"}`}
        style={{ backdropFilter: scrolled ? "blur(20px)" : "none" }}
      >
        <div
          style={{ maxWidth: "1100px" }}
          className="mx-auto flex justify-between items-center px-6 py-4"
        >
          {/* Logo */}
          <a href="#home" className="nav-logo">
            <span className="bracket">[</span>
            Aabhush<span className="accent">an</span>
            <span className="bracket">]</span>
          </a>

          {/* Desktop links + pill */}
          <div className="hidden md:flex items-center gap-10">
            <nav className="flex gap-10">
              {links.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link ${active === item.toLowerCase() ? "active" : ""}`}
                >
                  {item}
                </a>
              ))}
            </nav>
            <span className="nav-pill">
              <span className="nav-pill-dot" />
              Open to work
            </span>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden menu-btn ${navOpen ? "active" : ""}`}
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <CiMenuFries />
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
