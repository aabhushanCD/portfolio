type ProjectProps = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
};

const ProjectCard = ({ title, description, tech, link }: ProjectProps) => {
  return (
    <div className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-lg transition duration-500 hover:-translate-y-3 hover:scale-105">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-amber-400/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10"></div>

      <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-sm bg-white/10 px-3 py-1 rounded-full text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Link */}
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-amber-400 hover:underline"
        >
          View Project →
        </a>
      )}
    </div>
  );
};

export default ProjectCard;
