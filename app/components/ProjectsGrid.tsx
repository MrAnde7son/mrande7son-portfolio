import ProjectCard from './ProjectCard'
import { projects } from '../../lib/projects'

interface ProjectsGridProps {
  id?: string
  className?: string
  /** Render at most this many projects. */
  limit?: number
}

export default function ProjectsGrid({
  id,
  className = '',
  limit,
}: ProjectsGridProps) {
  const shown = limit ? projects.slice(0, limit) : projects

  return (
    <div
      id={id}
      className={`grid gap-4 sm:grid-cols-2 ${className}`}
    >
      {shown.map((project) => (
        <ProjectCard
          key={project.title}
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
