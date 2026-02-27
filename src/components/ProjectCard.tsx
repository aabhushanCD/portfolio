// ─── ProjectCard.tsx ───────────────────────────────────────────────────────

type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  index: number;
};

const ProjectCard = ({
  title,
  description,
  tech,
  link,
  index,
}: ProjectProps) => {
  return (
    <>
      <style>{`
        .project-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
          cursor: default;
        }

        .project-card:hover {
          border-color: rgba(245,158,11,0.25);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(245,158,11,0.08);
        }

        /* Glow spot that follows hover */
        .project-card::before {
          content: '';
          position: absolute;
          top: -60px;
          left: -60px;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          border-radius: 50%;
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .card-number {
          font-family: 'Syne', sans-serif;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #374151;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .card-number::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.05);
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.35rem;
          font-weight: 700;
          color: #f1f1f1;
          letter-spacing: -0.02em;
          margin-bottom: 12px;
          line-height: 1.25;
          transition: color 0.2s ease;
        }

        .project-card:hover .card-title {
          color: #fbbf24;
        }

        .card-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          color: #6b7280;
          line-height: 1.75;
          font-weight: 300;
          flex: 1;
          margin-bottom: 24px;
        }

        .card-tech-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }

        .card-tech {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4b5563;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 6px;
          padding: 4px 10px;
          transition: all 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }

        .project-card:hover .card-tech {
          border-color: rgba(245,158,11,0.12);
          color: #6b7280;
        }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.82rem;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          letter-spacing: 0.05em;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s ease, gap 0.2s ease;
          margin-top: auto;
        }

        .card-link:hover {
          color: #f59e0b;
          gap: 12px;
        }

        .card-link svg {
          transition: transform 0.2s ease;
        }

        .card-link:hover svg {
          transform: translateX(3px);
        }
      `}</style>

      <div className="project-card">
        <div className="card-number">
          Project {String(index + 1).padStart(2, "0")}
        </div>

        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>

        <div className="card-tech-wrap">
          {tech.map((t, i) => (
            <span className="card-tech" key={i}>
              {t}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            View Project
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
        )}
      </div>
    </>
  );
};
export default ProjectCard;
