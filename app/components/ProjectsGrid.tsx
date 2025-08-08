import ProjectCard from './ProjectCard'
import { projects } from '../../lib/projects'

export default function ProjectsGrid() {
  return (
    <section className="projectsSection mx-auto px-5 max-w-[1320px]">
      <div className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
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
    </section>
  )
}
