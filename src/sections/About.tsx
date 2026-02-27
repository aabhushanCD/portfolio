import profile from "../assets/whatshero.jpg";
import { useEffect, useRef, useState } from "react";

const techStack = {
  left: [
    "JavaScript (ES6+)",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Nest.js",
  ],
  right: ["PostgreSQL", "MySQL", "Python", "Django", "C / C++", "C# & .NET"],
};

const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Tech Stack", value: "12+" },
  { label: "Focus", value: "Backend" },
];

const About = () => {
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
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .about-section {
          font-family: 'DM Sans', sans-serif;
          background: #080c10;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: '';
          position: absolute;
          top: -200px;
          right: -200px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-section::after {
          content: '';
          position: absolute;
          bottom: -200px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 179, 237, 0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .section-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #f59e0b;
        }

        .about-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          line-height: 1.0;
          letter-spacing: -0.03em;
          color: #f1f1f1;
        }

        .about-heading span {
          color: #f59e0b;
          position: relative;
          display: inline-block;
        }

        .about-heading span::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #f59e0b, transparent);
          border-radius: 2px;
        }

        .body-text {
          color: #9ca3af;
          line-height: 1.8;
          font-size: 1rem;
          font-weight: 300;
        }

        .body-text strong {
          color: #e5e7eb;
          font-weight: 500;
        }

        .stat-card {
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          padding: 20px 24px;
          background: rgba(255,255,255,0.02);
          backdrop-filter: blur(10px);
          transition: border-color 0.3s ease, background 0.3s ease;
        }

        .stat-card:hover {
          border-color: rgba(245, 158, 11, 0.3);
          background: rgba(245, 158, 11, 0.03);
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #f59e0b;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #6b7280;
          margin-top: 4px;
          font-weight: 500;
        }

        /* Image card */
        .image-wrapper {
          position: relative;
        }

        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          aspect-ratio: 3/4;
          max-height: 520px;
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s ease;
        }

        .image-frame:hover img {
          transform: scale(1.04);
        }

        .image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(8,12,16,0.6) 0%, transparent 60%);
          pointer-events: none;
        }

        .image-border-glow {
          position: absolute;
          inset: -1px;
          border-radius: 25px;
          background: linear-gradient(135deg, rgba(245,158,11,0.4), rgba(99,179,237,0.2), transparent 60%);
          z-index: -1;
        }

        .image-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          z-index: 10;
          background: rgba(8,12,16,0.85);
          border: 1px solid rgba(245,158,11,0.3);
          border-radius: 10px;
          padding: 10px 16px;
          backdrop-filter: blur(12px);
        }

        .image-badge-name {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #f1f1f1;
        }

        .image-badge-title {
          font-size: 0.72rem;
          color: #f59e0b;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-top: 2px;
        }

        /* Decorative corner */
        .corner-decor {
          position: absolute;
          top: -12px;
          right: -12px;
          width: 80px;
          height: 80px;
          border-top: 2px solid rgba(245,158,11,0.5);
          border-right: 2px solid rgba(245,158,11,0.5);
          border-radius: 0 12px 0 0;
          pointer-events: none;
        }

        .corner-decor-bl {
          position: absolute;
          bottom: -12px;
          left: -12px;
          width: 60px;
          height: 60px;
          border-bottom: 2px solid rgba(99,179,237,0.3);
          border-left: 2px solid rgba(99,179,237,0.3);
          border-radius: 0 0 0 12px;
          pointer-events: none;
        }

        /* Tech stack */
        .tech-section-title {
          font-family: 'Syne', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #6b7280;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .tech-section-title::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.06);
        }

        .tech-pill {
          display: inline-block;
          padding: 5px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px;
          font-size: 0.82rem;
          color: #d1d5db;
          transition: all 0.2s ease;
          cursor: default;
          font-weight: 400;
        }

        .tech-pill:hover {
          background: rgba(245,158,11,0.08);
          border-color: rgba(245,158,11,0.25);
          color: #fcd34d;
          transform: translateY(-1px);
        }

        /* Divider */
        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          margin: 32px 0;
        }

        /* Fade in animations */
        .fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-1 { transition-delay: 0.1s; }
        .delay-2 { transition-delay: 0.2s; }
        .delay-3 { transition-delay: 0.3s; }
        .delay-4 { transition-delay: 0.4s; }
        .delay-5 { transition-delay: 0.5s; }
        .delay-6 { transition-delay: 0.6s; }

        @media (max-width: 768px) {
          .about-heading { font-size: 2.5rem; }
          .image-frame { max-height: 380px; aspect-ratio: 4/5; }
        }
      `}</style>

      <section ref={sectionRef} id="about" className="about-section py-28 px-6">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Header */}
          <div className={`fade-up ${visible ? "visible" : ""}`}>
            <p className="section-label mb-5">About Me</p>
            <h2 className="about-heading mb-14">
              Building the web,
              <br />
              <span>one system</span> at a time.
            </h2>
          </div>

          {/* Main Grid */}
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr", gap: "60px" }}
            className="md:grid-cols-about"
          >
            {/* --- LEFT: Text Column --- */}
            <div
              style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}
            >
              {/* Stat row */}
              <div
                className={`fade-up delay-1 ${visible ? "visible" : ""}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "12px",
                  marginBottom: "36px",
                }}
              >
                {stats.map((s) => (
                  <div className="stat-card" key={s.label}>
                    <div className="stat-value">{s.value}</div>
                    <div className="stat-label">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Bio */}
              <div className={`fade-up delay-2 ${visible ? "visible" : ""}`}>
                <p className="body-text mb-5">
                  I'm <strong>Aabhushan</strong>, a passionate Computer Science
                  student and full-stack developer focused on building{" "}
                  <strong>scalable, real-world applications</strong>. I
                  specialize in backend development using the MERN stack and
                  enjoy designing efficient systems that solve practical
                  problems.
                </p>
                <p className="body-text mb-5">
                  I have hands-on experience developing production-ready
                  features — including
                  <strong> authentication systems</strong>,{" "}
                  <strong>REST APIs</strong>, file handling, cloud integrations,
                  and database architecture. Currently building an advanced
                  <strong> Learning Management System (LMS)</strong> combining
                  academic learning, skill-based courses, and interactive
                  features.
                </p>
                <p className="body-text">
                  Beyond development, I actively deepen my knowledge in{" "}
                  <strong>DSA</strong>,<strong> Network Security</strong>, and{" "}
                  <strong>DevOps</strong>. My goal is to become a highly skilled
                  backend and DevOps engineer who builds reliable, secure, and
                  scalable digital products.
                </p>
              </div>

              <div className="divider" />

              {/* Tech Stack */}
              <div className={`fade-up delay-3 ${visible ? "visible" : ""}`}>
                <p className="tech-section-title">Tech Stack</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {[...techStack.left, ...techStack.right].map((tech) => (
                    <span className="tech-pill" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* --- RIGHT: Image Column --- */}
            <div
              className={`image-wrapper fade-up delay-4 ${visible ? "visible" : ""}`}
              style={{ display: "none" }}
              id="about-image-col"
            >
              <div className="corner-decor" />
              <div className="corner-decor-bl" />
              <div className="image-border-glow" />
              <div className="image-frame">
                <img src={profile} alt="Aabhushan" />
                <div className="image-badge">
                  <div className="image-badge-name">Aabhushan</div>
                  <div className="image-badge-title">Full-Stack Developer</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Responsive grid via inline style override for md+ */}
        <style>{`
          @media (min-width: 768px) {
            #about-image-col { display: block !important; }
            .about-section > div > div[style*="grid-template-columns: 1fr"] {
              grid-template-columns: 1.1fr 0.9fr !important;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
