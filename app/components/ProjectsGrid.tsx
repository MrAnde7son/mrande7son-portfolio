import ProjectCard from './ProjectCard'
import { projects } from '../../lib/projects'

export default function ProjectsGrid() {
  return (
    <div className="projectsGrid">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tags={project.tags}
          stars={project.stars}
          href={project.href}
        />
      ))}
    </div>
  )
}
