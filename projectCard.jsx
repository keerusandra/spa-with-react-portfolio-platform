function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img
        src={project.image}
        alt={project.title}
      />

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p>{project.technologies}</p>

      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
      >
        View Project
      </a>
    </div>
  );
}

export default ProjectCard;