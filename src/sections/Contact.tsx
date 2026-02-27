import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

const socials = [
  {
    icon: <FaGithub />,
    label: "GitHub",
    sub: "aabhushanCD",
    href: "https://github.com/aabhushanCD",
    color: "#6b7280",
    hoverColor: "#f1f1f1",
  },
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    sub: "aabhushan-dhakal",
    href: "https://www.linkedin.com/in/aabhushan-dhakal-7020b3226/",
    color: "#6b7280",
    hoverColor: "#0ea5e9",
  },
  {
    icon: <FaTwitter />,
    label: "Twitter",
    sub: "@your_twitter",
    href: "https://twitter.com/your_twitter",
    color: "#6b7280",
    hoverColor: "#38bdf8",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        #contact {
          font-family: 'DM Sans', sans-serif;
          background: #07090d;
          position: relative;
          overflow: hidden;
        }

        /* Top border line */
        #contact::before {
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1px;
          height: 80px;
          background: linear-gradient(to bottom, transparent, rgba(245,158,11,0.4));
        }

        /* Ambient glow */
        .contact-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Section label */
        .contact-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 32px;
        }

        .contact-label::before,
        .contact-label::after {
          content: '';
          display: block;
          width: 28px;
          height: 1px;
          background: #f59e0b;
        }

        /* Big heading */
        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3rem, 8vw, 6.5rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 24px;
        }

        .contact-heading .muted {
          color: #1f2937;
        }

        .contact-sub {
          font-size: 1rem;
          color: #4b5563;
          font-weight: 300;
          max-width: 420px;
          margin: 0 auto 48px;
          line-height: 1.75;
        }

        /* Email CTA */
        .email-cta {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.05em;
          background: #f59e0b;
          color: #07090d;
          padding: 14px 32px;
          border-radius: 100px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 0 0 0 rgba(245,158,11,0.3);
          margin-bottom: 64px;
        }

        .email-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(245,158,11,0.25);
          background: #fbbf24;
        }

        .email-cta svg {
          transition: transform 0.25s ease;
        }

        .email-cta:hover svg {
          transform: translateX(4px);
        }

        /* Or divider */
        .or-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          max-width: 320px;
          margin: 0 auto 48px;
        }

        .or-divider span {
          font-size: 0.72rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1f2937;
          white-space: nowrap;
        }

        .or-divider::before,
        .or-divider::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        /* Social cards */
        .socials-row {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 80px;
        }

        .social-card {
          display: flex;
          align-items: center;
          gap: 14px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 14px;
          padding: 14px 20px;
          text-decoration: none;
          transition: all 0.3s ease;
          min-width: 180px;
        }

        .social-card:hover {
          border-color: rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          transform: translateY(-3px);
        }

        .social-icon {
          font-size: 1.3rem;
          color: #374151;
          transition: color 0.2s ease;
          flex-shrink: 0;
        }

        .social-card:hover .social-icon {
          color: var(--hover-color);
        }

        .social-info-label {
          font-family: 'Syne', sans-serif;
          font-size: 0.85rem;
          font-weight: 700;
          color: #9ca3af;
          line-height: 1.2;
          transition: color 0.2s ease;
        }

        .social-card:hover .social-info-label {
          color: #f1f1f1;
        }

        .social-info-sub {
          font-size: 0.72rem;
          color: #374151;
          font-weight: 400;
          letter-spacing: 0.02em;
        }

        .social-arrow {
          margin-left: auto;
          color: #1f2937;
          font-size: 0.8rem;
          transition: transform 0.2s ease, color 0.2s ease;
        }

        .social-card:hover .social-arrow {
          transform: translate(2px, -2px);
          color: #4b5563;
        }

        /* Footer */
        .contact-footer {
          border-top: 1px solid rgba(255,255,255,0.04);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: gap;
          gap: 16px;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: grey;
          letter-spacing: 0.08em;
          font-weight: 400;
        }

        .footer-copy span {
          color: grey;
        }

        .footer-tagline {
          font-family: 'Syne', sans-serif;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: grey;
        }

        /* Reveal animations */
        .c-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s ease, transform 0.65s ease;
        }
        .c-reveal.visible { opacity: 1; transform: translateY(0); }
        .cr1 { transition-delay: 0.05s; }
        .cr2 { transition-delay: 0.15s; }
        .cr3 { transition-delay: 0.28s; }
        .cr4 { transition-delay: 0.4s; }
        .cr5 { transition-delay: 0.5s; }
      `}</style>

      <section ref={sectionRef} id="contact" className="py-28 px-6">
        <div className="contact-glow" />

        <div
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}
        >
          {/* Label */}
          <p
            className={`contact-label c-reveal cr1 ${visible ? "visible" : ""}`}
          >
            Get In Touch
          </p>

          {/* Heading */}
          <h2
            className={`contact-heading c-reveal cr2 ${visible ? "visible" : ""}`}
          >
            Let's build
            <br />
            <span className="muted">something</span>
            <br />
            great.
          </h2>

          {/* Subtext */}
          <p className={`contact-sub c-reveal cr3 ${visible ? "visible" : ""}`}>
            I'm always open to collaboration, freelance work, or just a friendly
            conversation. Drop me a line anytime.
          </p>

          {/* Email CTA */}
          <div className={`c-reveal cr3 ${visible ? "visible" : ""}`}>
            <a href="mailto:your-email@example.com" className="email-cta">
              Say Hello
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* OR divider */}
          <div
            className={`or-divider c-reveal cr4 ${visible ? "visible" : ""}`}
          >
            <span>or find me on</span>
          </div>

          {/* Social cards */}
          <div
            className={`socials-row c-reveal cr4 ${visible ? "visible" : ""}`}
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card"
                style={{ "--hover-color": s.hoverColor } as React.CSSProperties}
              >
                <span className="social-icon">{s.icon}</span>
                <span>
                  <div className="social-info-label">{s.label}</div>
                  <div className="social-info-sub">{s.sub}</div>
                </span>
                <svg
                  className="social-arrow"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </a>
            ))}
          </div>

          {/* Footer */}
          <div
            className={`contact-footer c-reveal cr5 ${visible ? "visible" : ""}`}
          >
            <p className="footer-copy">
              © 2025 <span>Aabhushan</span>. All rights reserved.
            </p>
            <p className="footer-tagline">Built with React + Tailwind</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
