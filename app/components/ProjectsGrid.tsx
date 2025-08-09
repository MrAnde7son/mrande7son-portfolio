import ProjectCard from './ProjectCard'
import { projects } from '../../lib/projects'

interface ProjectsGridProps {
  id?: string
  className?: string
}

export default function ProjectsGrid({ id, className = '' }: ProjectsGridProps) {
  return (
    <div
      id={id}
      className={`grid gap-5 grid-cols-[repeat(auto-fit,minmax(320px,1fr))] ${className}`}
    >
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
