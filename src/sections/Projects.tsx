import { useEffect, useRef, useState } from "react";
import ProjectCard from "../components/ProjectCard";
const projects = [
  {
    title: "Smart Learn LMS",
    description:
      "Full-featured Learning Management System with authentication, video courses, quizzes, and discussion forums. Built for real-world academic and skill-based learning.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "REST API"],
    link: "https://github.com/aakashstha1/EduPal_FYP",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with theme toggle, modern UI, and backend message handling. Supports rooms, presence indicators, and persistent history.",
    tech: ["React", "Express", "Socket.io", "MongoDB"],
    link: "https://chat-app-olive-psi.vercel.app/",
  },
  {
    title: "Social Media",
    description:
      "A feature-rich social networking app where users can post, like, comment, and share content. Includes authentication, real-time updates, and a responsive design.",
    tech: ["React", "Tailwind", "MongoDb", "socket.io", "Node.js"],
    link: "https://app-wine-nine.vercel.app/",
  },
];

const Projects = () => {
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

        #projects {
          background: #07090d;
          position: relative;
          overflow: hidden;
        }

        #projects::before {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245,158,11,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .projects-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
        }

        .projects-label::before {
          content: '';
          display: block;
          width: 32px;
          height: 1px;
          background: #f59e0b;
        }

        .projects-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 800;
          letter-spacing: -0.03em;
          line-height: 1;
          color: #f1f1f1;
          margin-bottom: 16px;
        }

        .projects-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.95rem;
          color: #4b5563;
          font-weight: 300;
          max-width: 400px;
          line-height: 1.7;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr); }
        }

        .card-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .card-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cd1 { transition-delay: 0.1s; }
        .cd2 { transition-delay: 0.25s; }
        .cd3 { transition-delay: 0.4s; }

        /* bottom CTA */
        .projects-cta {
          margin-top: 48px;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .projects-cta-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), transparent);
        }

        .projects-cta-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #4b5563;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: color 0.2s ease;
        }

        .projects-cta-link:hover {
          color: #f59e0b;
        }

        .header-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .header-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hd1 { transition-delay: 0.05s; }
        .hd2 { transition-delay: 0.15s; }
      `}</style>

      <section ref={sectionRef} id="projects" className="py-28 px-6">
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "56px" }}>
            <p
              className={`projects-label header-reveal hd1 ${visible ? "visible" : ""}`}
            >
              Selected Work
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              <h2
                className={`projects-heading header-reveal hd2 ${visible ? "visible" : ""}`}
              >
                Things I've
                <br />
                built.
              </h2>
              <p
                className={`projects-sub header-reveal hd2 ${visible ? "visible" : ""}`}
              >
                A selection of real-world projects spanning full-stack
                development, real-time systems, and production-ready features.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`card-reveal cd${index + 1} ${visible ? "visible" : ""}`}
              >
                <ProjectCard {...project} index={index} />
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div
            className={`projects-cta card-reveal cd3 ${visible ? "visible" : ""}`}
          >
            <div className="projects-cta-line" />
            <a
              href="https://github.com/aabhushanCD"
              target="_blank"
              rel="noreferrer"
              className="projects-cta-link"
            >
              More on GitHub
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
