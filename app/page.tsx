import BlogPosts from 'app/components/posts'
import Timeline from 'app/components/Timeline'
import Image from 'next/image'
import { BentoCard } from 'app/components/bento'
import ProjectsGrid from 'app/components/ProjectsGrid'

export default function Page() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 md:px-6">
      <div className="grid gap-4 md:grid-cols-2">
        <BentoCard className="md:col-span-2">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <Image
                src="/itamar-mizrahi.jpg"
                alt="Itamar Mizrahi - Cybersecurity Entrepreneur and VP Engineering at Tenable"
                width={200}
                height={200}
                className="rounded-lg shadow-lg"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="mb-6 text-3xl font-semibold tracking-tighter">
                Itamar Mizrahi
              </h1>
              <p className="mb-4 text-lg">
                {`A seasoned technology leader and entrepreneur with extensive experience in cybersecurity. Proven track record in building and scaling software products from inception to growth. Former Co-founder and CEO of Cymptom, acquired by Tenable.`}
              </p>
              <p className="mb-4 muted">
                {`My passion lies in building high-impact security products that protect organizations from evolving cyber threats. I enjoy mentoring the next generation of security professionals and sharing insights from my experience in both startup and enterprise environments.`}
              </p>
              <p className="muted">
                In my free time, I like surfing and traveling
              </p>
            </div>
          </div>
        </BentoCard>

        <BentoCard className="md:col-span-2">
          <h2 className="text-xl font-semibold tracking-tighter mb-6">Career Timeline</h2>
          <Timeline />
        </BentoCard>
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-2 items-start">
        <div className="min-w-0">
          <h2 className="text-xl font-semibold tracking-tighter mb-6">Key Projects</h2>
          <ProjectsGrid id="projects" />
        </div>

        <div className="min-w-0" id="insights">
          <h2 className="text-xl font-semibold tracking-tighter mb-6">Latest Insights</h2>
          <BlogPosts />
        </div>
      </section>
    </main>
  )
}
