import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Smart Learn LMS",
    description:
      "Full-featured Learning Management System with authentication, video courses, quizzes, and discussion forums.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    link: "#",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with theme toggle, modern UI, and backend message handling.",
    tech: ["React", "Express", "Socket.io"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern animated developer portfolio with 3D effects and smooth transitions.",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-8 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-amber-400 mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
