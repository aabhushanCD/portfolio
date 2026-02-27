import cv from "../assets/aabhuCv.pdf";
import { useEffect, useState } from "react";

const roles = [
  "Full Stack Developer",
  "Backend Engineer",
  "Systems Thinker",
  "DevOps Learner",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 70);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

        #home {
          font-family: 'DM Sans', sans-serif;
          background: #07090d;
        }

        /* Animated grid bg */
        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
        }

        /* Orbs */
        .orb-amber {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 65%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-60%, -60%);
          animation: floatA 8s ease-in-out infinite;
          pointer-events: none;
        }

        .orb-blue {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 65%);
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(10%, 10%);
          animation: floatB 10s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes floatA {
          0%, 100% { transform: translate(-60%, -60%) scale(1); }
          50% { transform: translate(-55%, -65%) scale(1.08); }
        }

        @keyframes floatB {
          0%, 100% { transform: translate(10%, 10%) scale(1); }
          50% { transform: translate(15%, 5%) scale(1.05); }
        }

        /* Noise overlay */
        .noise {
          position: absolute;
          inset: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
          pointer-events: none;
        }

        /* CV button */
        .cv-btn {
          position: fixed;
          top: 24px;
          right: 28px;
          z-index: 50;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 9px 20px;
          background: rgba(7,9,13,0.8);
          border: 1px solid rgba(245,158,11,0.4);
          border-radius: 100px;
          color: #fbbf24;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          text-decoration: none;
          backdrop-filter: blur(16px);
          transition: all 0.3s ease;
        }

        .cv-btn:hover {
          background: rgba(245,158,11,0.1);
          border-color: rgba(245,158,11,0.7);
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(245,158,11,0.15);
        }

        .cv-btn svg {
          width: 14px;
          height: 14px;
        }

        /* Main heading */
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 24px;
        }

        .hero-eyebrow span {
          display: block;
          width: 28px;
          height: 1px;
          background: #f59e0b;
        }

        .hero-eyebrow em {
          color: #f59e0b;
          font-style: normal;
        }

        .hero-name {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 9vw, 7.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 16px;
        }

        .hero-name .dot {
          color: #f59e0b;
        }

        .hero-role-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 28px;
          min-height: 36px;
        }

        .hero-role-label {
          font-size: 0.75rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4b5563;
          font-weight: 500;
        }

        .hero-role-text {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          font-weight: 600;
          color: #93c5fd;
          min-width: 280px;
          text-align: left;
        }

        .cursor {
          display: inline-block;
          width: 2px;
          height: 1.1em;
          background: #93c5fd;
          margin-left: 2px;
          vertical-align: middle;
          animation: blink 1s step-end infinite;
          border-radius: 1px;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .hero-sub {
          max-width: 540px;
          color: #6b7280;
          font-size: 1rem;
          line-height: 1.75;
          font-weight: 300;
          margin-bottom: 44px;
        }

        /* CTA buttons */
        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #07090d;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          padding: 13px 28px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.4);
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(245,158,11,0.3);
          background: #fbbf24;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #9ca3af;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          font-size: 0.9rem;
          padding: 13px 28px;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          color: #f1f1f1;
          border-color: rgba(255,255,255,0.25);
          background: rgba(255,255,255,0.04);
          transform: translateY(-3px);
        }

        /* Scroll indicator */
        .scroll-hint {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          color: #374151;
          font-size: 0.68rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, #f59e0b, transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.1); }
        }

        /* Stagger reveal */
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          animation: revealUp 0.7s ease forwards;
        }

        .r1 { animation-delay: 0.1s; }
        .r2 { animation-delay: 0.25s; }
        .r3 { animation-delay: 0.4s; }
        .r4 { animation-delay: 0.55s; }
        .r5 { animation-delay: 0.7s; }

        @keyframes revealUp {
          to { opacity: 1; transform: translateY(0); }
        }

        /* Decorative side text */
        .side-text {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-size: 0.65rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: grey;
          white-space: nowrap;
          font-weight: 500;
          display: none;
        }

        @media (min-width: 1024px) {
          .side-text { display: block; }
        }

        /* Location badge */
        .location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 12px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 100px;
          font-size: 0.75rem;
          color: #4b5563;
          margin-bottom: 32px;
        }

        .location-dot {
          width: 6px;
          height: 6px;
          background: #22c55e;
          border-radius: 50%;
          box-shadow: 0 0 6px #22c55e;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 6px #22c55e; }
          50% { box-shadow: 0 0 12px #22c55e, 0 0 20px rgba(34,197,94,0.3); }
        }
      `}</style>

      {/* Fixed CV Button */}
      <a href={cv} target="_blank" rel="noreferrer" className="cv-btn">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        Resume
      </a>

      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      >
        {/* Background layers */}
        <div className="hero-grid" />
        <div className="orb-amber" />
        <div className="orb-blue" />
        <div className="noise" />

        {/* Side decoration */}
        <span className="side-text">Aabhushan · Portfolio · 2025</span>

        {/* Main content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Available badge */}
          <div
            className={`location-badge reveal r1 ${mounted ? "" : "opacity-0"}`}
          >
            <span className="location-dot" />
            Available for opportunities
          </div>

          {/* Eyebrow */}
          <p className={`hero-eyebrow reveal r2 ${mounted ? "" : "opacity-0"}`}>
            <span />
            Hey there — I'm
            <em>Aabhushan</em>
            <span />
          </p>

          {/* Name */}
          <h1 className={`hero-name reveal r2 ${mounted ? "" : "opacity-0"}`}>
            Aabhushan<span className="dot">.</span>
          </h1>

          {/* Typewriter role */}
          <div
            className={`hero-role-row reveal r3 ${mounted ? "" : "opacity-0"}`}
          >
            <span className="hero-role-label">I'm a</span>
            <span className="hero-role-text">
              {displayed}
              <span className="cursor" />
            </span>
          </div>

          {/* Subtitle */}
          <p className={`hero-sub reveal r4 ${mounted ? "" : "opacity-0"}`}>
            Backend-focused full-stack developer building scalable systems,
            secure architectures, and modern interactive web experiences with
            the MERN stack.
          </p>

          {/* CTA buttons */}
          <div
            className={`flex flex-wrap gap-4 justify-center reveal r5 ${mounted ? "" : "opacity-0"}`}
          >
            <a href="#projects" className="cta-primary">
              View Projects
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="cta-secondary">
              Contact Me
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="scroll-hint">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>
    </>
  );
};

export default Hero;
